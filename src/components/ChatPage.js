import styled from "styled-components";
import ChatRow from "./ChatPageContents/ChatRow";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 500px;
  height: 600px;
  border: 1px solid;
`

export default function ChatPage({ setShowChatPage }) {
  const { friend, chat } = useSelector(state => state);

  let messageList = null;
  for (const item of chat) {
    if (item[0] === friend.value) {
      messageList = item[2];
    }
  }
  console.log(chat);
  return (
    <Container>
      <button onClick={() => setShowChatPage(false)}>go back</button>
      <div>{`${friend.value}와의 대화`}</div>
      {messageList.map((message, index) =>
        <ChatRow
          key={message.message + index}
          messageInfo={message}
          name={friend.value}
        />
      )}
    </Container>
  );
}
