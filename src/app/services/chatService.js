import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
const joinRoom = async (accestoken) => {
          try {
            const connection = new HubConnectionBuilder()
              .withUrl("http://localhost:5024/chats",{ headers:accestoken  })
              .configureLogging(LogLevel.Information)
              .build();
         
              connection.on('ReceiveRooms', rooms => {
                console.log(rooms)
                setrooms({ rooms });
              });
              connection.on("ReceivenewMessage",(messge)=>{
                console.log("new message"+messge)
              })
              connection.on("AllMessage",(messagesroom)=>{
                console.log("mesage is"+ messagesroom);
               
              })
            connection.on("ReceiveMessage", (user, message) => {
              console.log("Message Recived:",message)
              setMessages(messages => [...messages, { user, message }]);
            });
      
            connection.on("UsersInRoom", (users) => {
                    
              //setUsers(users);
            });
            connection.on("notification",(msg)=>{
                alert(msg);
            })
      
            connection.onclose(e => {
              setConnection();
              setMessages([]);
              setUsers([]);
            });
      
            await connection.start();
            console.log(user);
          
            await connection.invoke("JoinRoom");
            setConnection(connection);
          } catch (e) {
            console.log(e);
          }
        }