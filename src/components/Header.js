import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 30px;
  border-bottom: 1px solid;
  margin-bottom: 10px;
`

export default function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <button onClick={() => navigate("/")}>Friends</button>
        <button onClick={() => navigate("/chats")}>Chats</button>
      </div>
    </Container>
  );
}
