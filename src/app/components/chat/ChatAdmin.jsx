import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import * as signalR from "@microsoft/signalr";
import MassgeRight from "./MassgeRight";
import MassageLeft from "./MassageLeft";
import User from "./User";
import "./chat.css";
import { successMessage } from "../../../utils/message";
import { useRef } from "react";

const ChatAdmin = () => {
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);
  const [messageUser, setMessageUser] = useState("");
  const [allmessageUser, setAllMessageUser] = useState([]);
  console.log("allmessageUser",allmessageUser);
  const [nameRoom, setNameRoom] = useState();
  const [connection, setConnection] = useState();
  console.log("KSLAKDLSA", connection);
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [allmessageUser]);
  // const connectToSignalR = () => {
  //   const token = localStorage.getItem("access_token");
  //   const headers = {
  //     Authorization: `Bearer ${token}`,
  //   };
  //   const connection = new signalR.HubConnectionBuilder()
  //     .withUrl("https://taktamir.mohamadrezakiani.ir/chats", {
  //       headers: headers,
  //     })
  //     .configureLogging(signalR.LogLevel.Information)
  //     .withAutomaticReconnect()
  //     .build();
  //   setConnection(connection);
  // };

  // useEffect(() => {
  //   connectToSignalR();
  // }, []);
  const fetchRooms = useCallback(async () => {
    try {
      const accessToken = localStorage.getItem("access_token");
      const response = await axios.get(
        "https://taktamir.mohamadrezakiani.ir/api/Chats",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setRooms(response.data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  }, []);

  useEffect(() => {
    fetchRooms();
    
  }, [fetchRooms]);
  const connectToSignalR = (headers) => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("https://taktamir.mohamadrezakiani.ir/chats", {
        headers: headers,
      })
      .configureLogging(signalR.LogLevel.Information)
      .withAutomaticReconnect()
      .build();
    return connection;
  };
  
  const jonAdminroom = useCallback(async (Nameroom) => {
    try {
      const token = localStorage.getItem("access_token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const newConnection = connectToSignalR(headers);
      setConnection(newConnection);

      newConnection.on("ReceiveRooms", (rooms) => {
        setRooms(rooms);
      });
  
      newConnection.on("notification", (msg) => {
        successMessage(msg);
      });
  
      newConnection.on("ReceiveMessage", (user, message) => {
        setAllMessageUser((messages) => [...messages,  JSON.parse(message)]);
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
      await newConnection.invoke("JonAdmintoroom", Nameroom);
      setNameRoom(Nameroom);
      setConnection(newConnection);
    } catch (e) {
      console.log(e);
      connectToSignalR();
    }
  }, []);
  // const jonAdminroom = useCallback(async (Nameroom) => {
  //   try {
  //     connection.on("ReceiveRooms", (rooms) => {
  //       setRooms(rooms);
  //     });

  //     connection.on("notification", (msg) => {
  //       successMessage(msg);
  //     });

  //     connection.on("ReceiveMessage", (user, message) => {
  //       setAllMessageUser((messages) => [...messages,  JSON.parse(message)]);
  //       console.log("logger",message);
  //     });

  //     connection.on("AllMessage", (messagesroom) => {
  //       console.log("AllMessage", messagesroom);
  //       setAllMessageUser(JSON.parse(messagesroom));
  //     });

  //     connection.on("UsersInRoom", (users) => {
  //       setUsers(users);
  //     });

  //     connection.on("Erorr", (eror) => {
  //       console.log(eror);
  //     });

  //     connection.onclose(() => {
  //       setConnection();
  //       setAllMessageUser([]);
  //       setUsers([]);
  //     });

  //     await connection.start();
  //     await connection.invoke("JonAdmintoroom", Nameroom);
  //   } catch (e) {
  //     console.log(e);
  //     connectToSignalR();

  //   }
  // }, [connection]);

  const handleClick = useCallback(
    (item) => {
      localStorage.setItem("NameRoom", item);
      setNameRoom(item);
      jonAdminroom(item);
    },
    [jonAdminroom, setNameRoom]
  );
  // const handleClick = useCallback(
  //   async (item) => {
  //     try {
  //       const token = localStorage.getItem("access_token");
  //       const headers = {
  //         Authorization: `Bearer ${token}`,
  //       };
  //       const connection = new signalR.HubConnectionBuilder()
  //         .withUrl("https://taktamir.mohamadrezakiani.ir/chats", {
  //           headers: headers,
  //         })
  //         .configureLogging(signalR.LogLevel.Information)
  //         .withAutomaticReconnect()
  //         .build();
      
  //       connection.on("ReceiveRooms", (rooms) => {
  //         setRooms(rooms);
  //       });
  
  //       connection.on("notification", (msg) => {
  //         successMessage(msg);
  //       });
  
  //       connection.on("ReceiveMessage", (user, message) => {
  //         setAllMessageUser((messages) => [...messages,  JSON.parse(message)]);
  //         console.log("logger",message);
  //       });
  
  //       connection.on("AllMessage", (messagesroom) => {
  //         console.log("AllMessage", messagesroom);
  //         setAllMessageUser(JSON.parse(messagesroom));
  //       });
  
  //       connection.on("UsersInRoom", (users) => {
  //         setUsers(users);
  //       });
  
  //       connection.on("Erorr", (eror) => {
  //         console.log(eror);
  //       });
  
  //       connection.onclose(() => {
  //         setAllMessageUser([]);
  //         setUsers([]);
  //       });
  
  //       await connection.start();
  
  //       await connection.invoke("JonAdmintoroom", item);
  //       localStorage.setItem("NameRoom", item);
  //       setNameRoom(item);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }, []);

  // const sendMessage = useCallback(
  //   async (message) => {
  //     try {
  //       const NameRoom = localStorage.getItem("NameRoom") || nameRoom;
  //       const chatMessage = {
  //         NameRoom: NameRoom,
  //         message: message,
  //       };
  //       if (connection.connectionStarted) {
  //         try {
  //           await connection.send("SendMessage", chatMessage);
  //         } catch (e) {
  //           console.log(e);
  //         }
  //       } else {
  //         alert('No connection to server yet.');
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   },
  //   [connection, nameRoom]
  // );
  const sendMessage = useCallback(
    async (message) => {
      try {
        const NameRoom = localStorage.getItem("NameRoom") || nameRoom;
        
        await connection.invoke("SendMessage", message,NameRoom);
        setMessageUser("")
      } catch (e) {
        console.error(e);
      }
    },
    [connection, nameRoom]
  );
  // const sendMessage = async (message) => {
  //   const NameRoom = localStorage.getItem("NameRoom") || nameRoom;
  //   console.log("message",message);
  //   console.log("nameRoom",nameRoom);
  //   try {
  //     console.log("اتصال",connection._connectionState)
  //     if (connection._connectionStarted !== false) {
  //       await connection.invoke("SendMessage", message, NameRoom);
  //       console.log("پیام ارسال شد");
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <div>
      <div className="card">
        <div className="row ">
          <div className="col-12 col-lg-5 col-xl-3  ">
            <div className="px-4 d-block">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1 ">
                  <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="جستجو..."
                  />
                </div>
              </div>
            </div>
            <p className="px-4 py-2 border-bottom">لیست کاربران :</p>
            <span
              className=""
              style={{ maxHeight: "540px", overflowY: "scroll" }}
            >
              {rooms.map((item, index) => (
                <User item={item} handelClick={handleClick} key={index} />
              ))}
            </span>
          </div>
          <div className="col-12 col-lg-7 col-xl-9">
            <div className="py-2 px-4 border-bottom">
              <div className="d-flex align-items-center py-1">
                <div className="position-relative ">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    className="rounded-circle ml-1 "
                    alt="Sharon Lessman"
                    width="40"
                    height="40"
                  />
                </div>
                <div className="flex-grow-1 pr-3">
                  <strong>Sharon Lessman</strong>
                  <div className="text-muted small">
                    <em>Typing...</em>
                  </div>
                </div>
                <div>
                  <button className="btn btn-light border btn-lg px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-more-horizontal feather-lg"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="position-relative">
              <div className="chat-messages p-4" >
                {allmessageUser?.map((m, index) =>
                  m.Sender === "Admin" ? (
                    <MassgeRight key={index} data={m} />
                  ) : (
                    <MassageLeft key={index} data={m} />
                  )
                )}
                  <div ref={messagesEndRef} />

              </div>
            </div>
            <div className="flex-grow-0  py-3 px-4 border-top">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="پیام خود را ارسال کنید !"
                  value={messageUser}
                  onChange={(e) => setMessageUser(e.target.value)}
                />
                <button
                  className="btn btn-primary"
                  onClick={() => sendMessage(messageUser)}
                >
                  ارسال
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAdmin;
