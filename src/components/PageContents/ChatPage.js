import styled from "styled-components";
import ChatPageRow from "../PageItemContents/ChatPageRow";
import { useSelector } from "react-redux";
import { useState } from "react";
import { ref, set } from "firebase/database";
import { db } from "../../firebase";
import { getTodayDateAndTime } from "../../functions"
import { BiUndo } from "react-icons/bi";

const Container = styled.div`
  width: 650px;
  height: 750px;
  margin-top: 23px;
  margin-left: 23px;
  border: 2px solid;
  border-color: grey;
  border-radius: 20px;
  background-color: white;
  .undo-button {
    width: 70px;
    height: 35px;
    margin-top: 20px;
    margin-left: 20px;
    font-size: 30px;
  }
  .title {
    font-size: 30px;
    text-align: center;
    margin-bottom: 50px;
  }
  .mid-section {
    height: 520px;
  }
  .submit-section {
    display: flex;
    justify-content: center;
  }
  .submit-input {
    width: 450px;
    height: 40px;
    font-size: 25px;
  }
  .submit-button {
    width: 60px;
    height: 45px;
    font-size: 20px;
    margin-left: 10px;
  }
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

    const numberKey = chat[friend.value].messages.length;
    set(ref(db, `chatting/${friend.value}/messages/${numberKey}`), postData);
    setMessageInput("");
  }

  return (
    <Container>
      <div>
        <button className="undo-button" onClick={() => setShowChatPage(false)}>
          <BiUndo />
        </button>
        <div className="title">{`< ${friend.value}와의 대화 >`}</div>
      </div>
      <div className="mid-section">
        {chat[friend.value].messages?.map((msg, index) =>
          <ChatPageRow
            key={toString(msg.messages) + index}
            messageInfo={msg}
            name={msg.username}
          />
        )}
      </div>
      <div className="submit-section">
        <input
          className="submit-input"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button
          className="submit-button"
          onClick={(e) => sendMessage(e)}
          disabled={!messageInput}
        >
          send
        </button>
      </div>
    </Container>
  );
}
