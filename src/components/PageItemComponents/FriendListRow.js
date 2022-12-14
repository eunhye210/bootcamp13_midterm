import { useDispatch } from "react-redux";
import { setFriendName } from "../../store/sllices/friendSlice";
import { Container } from "./RowStyledComponents";

export default function FriendListRow({ info, setShowChatPage }) {
  const dispatch = useDispatch();
  const [name, value] = info;

  function showChatPage() {
    dispatch(setFriendName(name));
    setShowChatPage(true);
  }

  return (
    <Container>
      <div className="content">
        <div className="person-info">
          <img className="img" alt="img_url" src={value.img}/>
          <div className="info-font">{name}</div>
        </div>
        <button className="info-button" onClick={showChatPage}>Chat</button>
      </div>
    </Container>
  );
}
