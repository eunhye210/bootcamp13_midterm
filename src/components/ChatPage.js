import styled from "styled-components";
import ChatRow from "./ChatPageContents/ChatRow";

const Container = styled.div`
  width: 500px;
  height: 600px;
  border: 1px solid;
`

export default function ChatPage({ setShowChatPage }) {
  return (
    <Container>
      <button onClick={() => setShowChatPage(false)}>go back</button>
      <div>~와의 대화</div>
      <ChatRow />
      <ChatRow />
      <ChatRow />
      <ChatRow />
      <ChatRow />
      <ChatRow />
    </Container>
  );
}
