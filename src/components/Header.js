import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  border-bottom: 2px solid;
  border-color: grey;
  margin-bottom: 10px;
  .button {
    margin-top: 25px;
    width: 300px;
    height: 50px;
    background: white;
    border-color: lightgrey;
    border-radius: 5px;
    font-size: 15px;
  }
`

export default function Header({ setName, setSingleFriendInfoList }) {
  const navigate = useNavigate();

  function movePage(e) {
    (e.target.value === "friends") ? navigate("/") : navigate("/chats");
    setName("");
    setSingleFriendInfoList("");
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
