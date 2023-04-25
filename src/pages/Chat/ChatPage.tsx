import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import "./Chat.css"

const ws = new WebSocket(
  "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
);

export type ChatMessageType = {
  message: string;
  photo: string;
  userId: any;
  userName: string;
};

const ChatPage: React.FC = () => {
  return (
    <div className="chat-container">
      <Chat />
    </div>
  );
};

const Chat: React.FC = () => {
  return (
    <div className="chat">
      <Messages />
      <AddMessageForm/>
    </div>
  );
};

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  useEffect(() => {
    ws.addEventListener("message", (e: MessageEvent) => {
    //   let newMessages = JSON.parse(e.data) //замыкаем
    //   setMessages(JSON.parse(e.data)); //тк записываем массив в массив, поэтому спред оператор перед JSON...
    console.log(JSON.parse(e.data))
    });
  });
  return (
    <div className="messages">
      {messages.map((m, index) => (
        <Message message={m} key={index} />
      ))}
    </div>
  );
};

const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {
  return (
    <div>
      <Image src={message.photo} roundedCircle /> <b>{message.userName}</b>
      <p>{message.message}</p>
      <hr />
    </div>
  );
};

const AddMessageForm: React.FC = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (!message) {
      return;
    }
    ws.send(message); // отправляем сообщение на сервер
    setMessage('');
  };

  return (
    <div className="add-message-form">
      <input onChange={(e) => setMessage(e.currentTarget.value)} value={message} />
      <Button onClick={sendMessage}>Send</Button>
    </div>
  );
};








export default ChatPage;