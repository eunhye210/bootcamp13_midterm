import styled from "styled-components";
import ChatRow from "./ChatPageContents/ChatRow";
import { useSelector } from "react-redux";
import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase";
import { getTodayDateAndTime } from "../functions"


const Container = styled.div`
  width: 500px;
  height: 600px;
  border: 1px solid;
`

export default function ChatPage({ setShowChatPage }) {
  const { friend, chat } = useSelector(state => state);
  const [messageInput, setMessageInput] = useState("");

  function sendMessage(e) {
    e.preventDefault();

    const [todayDate, todayTime] = getTodayDateAndTime();
    const postData = {
      username: "eunhye",
      message: messageInput,
      date: todayDate,
      time: todayTime,
    };

    const db = getDatabase(app);
    const numberKey = chat[friend.value].messages.length;
    set(ref(db, `chatting/${friend.value}/messages/${numberKey}`), postData);
    setMessageInput("");
  }

  return (
    <Container>
      <button onClick={() => setShowChatPage(false)}>go back</button>
      <div>{`${friend.value}와의 대화`}</div>
      {chat[friend.value].messages?.map((msg) =>
        <ChatRow key={msg.message} messageInfo={msg} />
      )}
      <input value={messageInput} onChange={(e) => setMessageInput(e.target.value)} />
      <button onClick={(e) => sendMessage(e)}>send</button>
    </Container>
  );
}
