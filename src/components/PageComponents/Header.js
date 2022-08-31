import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  margin-bottom: 10px;
  border-bottom: 2px solid;
  border-color: grey;
  .button {
    width: 300px;
    height: 50px;
    margin-top: 25px;
    border-color: lightgrey;
    border-radius: 5px;
    background: white;
    font-size: 15px;
  }
`

export default function Header({ setSingleFriendInfo }) {
  const navigate = useNavigate();

  function movePage(e) {
    (e.target.value === "friends") ? navigate("/friends") : navigate("/chats");
    setSingleFriendInfo(null);
  }

  return (
    <Container>
      <div>
        <button className="button" value="friends" onClick={movePage}>Friends</button>
        <button className="button" value="chats" onClick={movePage}>Chats</button>
      </div>
    </Container>
  );
}
