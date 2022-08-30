import { useDispatch } from "react-redux";
import { setFriendName } from "../../store/sllices/friendSlice";
import { Container } from "./RowStyledComponents";


export default function ChatListRow({ chat, setShowChatPage }) {
  const dispatch = useDispatch();
  const [name, personInfo] = chat;
  const {img, messages} = personInfo;

  function showChatPage() {
    dispatch(setFriendName(name));
    setShowChatPage(true);
  }

  return (
    <Container>
      <div className="content">
        <div className="chatlist-display">
          <img className="img" alt="person_img" src={img} />
          <div className="chatlist-display">
            <div>{name}</div>
            <div className="chatlist-text">{messages[messages.length - 1].message}</div>
            <div className="chatlist-date">{messages[messages.length - 1].date}</div>
          </div>
        </div>
        <button className="info-button" onClick={showChatPage}>Chat</button>
      </div>
    </Container>
  );
}
