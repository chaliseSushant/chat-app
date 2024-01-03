import React, { useEffect, useState } from "react";
import axios from "axios";
import { Divider } from "@chakra-ui/react";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const getChats = async () => {
    const { data } = await axios.get("/api/chats");
    setChats(data);
  };

  useEffect(() => {
    getChats();
  }, []);
  return (
    <div>
      {chats.map((chat) => (
        <p key={chat._id}>{chat.chatName}</p>
      ))}
    </div>
  );
};

export default ChatPage;
