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
`

export default function FriendListRow({ info, setShowChatPage }) {
  const dispatch = useDispatch();
  const [name, img] = info;

  function showChatPage() {
    dispatch(setChatFriendName(name));
    setShowChatPage(true);
  }
  return (
    <Container>
      <div className="content">
        <img className="img" alt="person_img" src={`/img/${img}.png`} />
        <div>{name}</div>
        <button onClick={showChatPage}>대화하기</button>
      </div>
    </Container>
  );
}
