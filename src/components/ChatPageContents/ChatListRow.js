import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setChatFriendName } from "../../store/sllices/friendSlice";

const Container = styled.div`
  width: 700px;
  height: 70px;
  border: 1px solid;
  .content {
    display: flex;
  }
  .img {
    width: 90px;
    height: 50px;
  }
  .text {
    max-width: 30ch;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`

export default function ChatListRow({ chat, setShowChatPage }) {
  const dispatch = useDispatch();
  const [name, img, messageList] = chat;

  function showChatPage() {
    dispatch(setChatFriendName(name));
    setShowChatPage(true);
  }

  return (
    <Container>
      <div className="content">
        <img className="img" alt="person_img" src={`/img/${img}.png`} />
        <div className="content">
          <div>
            <div>{name}</div>
            <div className="text">{messageList[messageList.length - 1].message}</div>
          </div>
          <div>{messageList[messageList.length - 1].date}</div>
        </div>
        <button onClick={showChatPage}>대화하기</button>
      </div>
    </Container>
  );
}
