import styled from "styled-components";
import ChatInput from "../PageItemComponents/ChatInput";
import ChatPageRow from "../PageItemComponents/ChatPageRow";
import { useSelector } from "react-redux";
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
    margin-bottom: 50px;
    font-size: 30px;
    text-align: center;
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
    margin-left: 10px;
    font-size: 20px;
  }
`

export default function ChatPage({ setShowChatPage }) {
  const { friend, chat } = useSelector(state => state);

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
        <ChatInput />
      </div>
    </Container>
  );
}
