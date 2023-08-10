import React, { useCallback, useState, useRef, useEffect } from "react";
import photo from "/img/suprted.jpg";
import TechMessageLeft from "./TechMessageLeft";
import TechMessageRight from "./TechMessageRight";
import * as signalR from "@microsoft/signalr";
import { successMessage } from "../../../utils/message";
import { useSelector } from "react-redux";
import config from '../../services/config.json'

function ChatTechncian() {
  const user = useSelector((state) => state.user);
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);
  const [messageUser, setMessageUser] = useState("");
  const [allmessageUser, setAllMessageUser] = useState([]);
  console.log("allmessageUser", allmessageUser);
  const [connection, setConnection] = useState();
  console.log("KSLAKDLSA", connection);
  const messagesEndRef = useRef(null);
  const NameRoom = user.firstname + " " + user.lastName;
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [allmessageUser]);
  const connectToSignalR = (headers) => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl(`${config.api}/chats`, {
        headers: headers,
      })
      .configureLogging(signalR.LogLevel.Information)
      .withAutomaticReconnect()
      .build();
    return connection;
  };
  const jonAdminroom = useCallback(async () => {
    try {
      const token = localStorage.getItem("access_token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const newConnection = connectToSignalR(headers);
      setConnection(newConnection);

      // newConnection.on("ReceiveRooms", (rooms) => {
      //   setRooms(rooms);
      // });

      newConnection.on("notification", (msg) => {
        console.log("msg", msg);
        console.log("NameRoom", NameRoom);
        if (msg.Sender !== NameRoom) {
          successMessage(`${msg.Firstname} ${msg.LastName}`);     
        }

      });

      newConnection.on("ReceiveMessage", (user, message) => {
        setAllMessageUser((messages) => [...messages, JSON.parse(message)]);
        console.log("logger", message);
      });

      newConnection.on("AllMessage", (messagesroom) => {
        console.log("AllMessage", messagesroom);
        setAllMessageUser(JSON.parse(messagesroom));
      });

      newConnection.on("UsersInRoom", (users) => {
        setUsers(users);
      });

      newConnection.on("Erorr", (eror) => {
        console.log(eror);
      });

      newConnection.onclose(() => {
        setConnection();
        setAllMessageUser([]);
        setUsers([]);
      });

      await newConnection.start();
      await newConnection.invoke("JoinRoom");
      // setNameRoom(Nameroom);
      setConnection(newConnection);
    } catch (e) {
      console.log(e);
      connectToSignalR();
    }
  }, []);
  const sendMessage = useCallback(
    async (message) => {
      try {
        setMessageUser("");
        await connection.invoke("SendMessage", message, NameRoom);
      } catch (e) {
        console.error(e);
      }
    },
    [connection]
  );
  useEffect(() => {
    jonAdminroom();
  }, []);

  return (
    <div className="">
      <div className="col-12 col-lg-7 col-xl-10 mx-auto">
        <div
          className=" fixed-top  text-dark col-12 col-lg-7 col-xl-10 mx-auto "
          style={{
            background:
              "linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1))",
          }}
        >
          <div className="d-flex align-items-center  border-bottom  py-2 px-4  rounded">
            <div className="position-relative">
              <img
                src={photo}
                className="rounded-circle ml-1"
                alt="Sharon Lessman"
                width="40"
                height="40"
              />
            </div>
            <div className="flex-grow-1 pr-3">
              <strong>پشتیانی</strong>
              <div className="text-muted small">
                <em>Typing...</em>
              </div>
            </div>
          </div>
        </div>
        <div className={`${ connection?._connectionState !== "Connecting" ? "d-none":"d-flex vh-100 align-items-center "} `}>
          {connection !== undefined &&
            connection?._connectionState === "Connecting" && (
              <div
                className="spinner-border text-dark mx-auto "
                role="status"
              ></div>
            )}
        </div>
        {connection !== undefined &&
          connection?._connectionState === "Connected" &&
          connection._connectionStarted && (
            <div className="">
              <div
                className="chat-messages p-2"
                style={{ height: "75vh", maxHeight: "75vh", margin: "60px 0" }}
              >
                {allmessageUser.length === 0 ? (
                  <p>
                    <div className="alert alert-info" role="alert">
                      پیامی وجود ندارد
                    </div>
                  </p>
                ) : (
                  allmessageUser?.map((m, index) =>
                    m.Sender === "Admin" ? (
                      <TechMessageLeft key={index} data={m} />
                    ) : (
                      <TechMessageRight key={index} data={m} />
                    )
                  )
                )}
                <div ref={messagesEndRef} />
              </div>
              <div
                className="mx-auto col-12 col-lg-7 col-xl-9 fixed-bottom   "
                style={{ bottom: "90px" }}
              >
                <div className=" rounded-pill shadow-sm d-flex   px-4 py-2">
                  <button
                    onClick={() => sendMessage(messageUser)}
                    className="btn btn-warning btn-circle ml-2 shadow-sm"
                  >
                    <i className="fas fa-paper-plane text-dark"></i>
                  </button>
                  <input
                    value={messageUser}
                    onChange={(e) => setMessageUser(e.target.value)}
                    type="text"
                    className="form-control  shadow-sm"
                    placeholder="پیام خود را ارسال کنید !"
                  />
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default ChatTechncian;
