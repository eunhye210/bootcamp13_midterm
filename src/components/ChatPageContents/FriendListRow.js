import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setChatFriendName } from "../../store/sllices/friendSlice";

const Container = styled.div`
  width: 600px;
  height: 40px;
  border: 1px solid;
  .content {
    display: flex;
  }
  .img {
    width: 30px;
    height: 30px;
  }
`

export default function FriendListRow({ info, setShowChatPage }) {
  const dispatch = useDispatch();
  const [name, value] = info;

  function showChatPage() {
    dispatch(setChatFriendName(name));
    setShowChatPage(true);
  }
  return (
    <Container>
      <div className="content">
        <img className="img" alt="person_img" src={value.img}/>
        <div>{name}</div>
        <button onClick={showChatPage}>대화하기</button>
      </div>
    </Container>
  );
}
