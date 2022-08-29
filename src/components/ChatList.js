import ChatListRow from "./ChatPageContents/ChatListRow";
import Header from "../components/Header";
import { useSelector } from "react-redux";

export default function ChatList({ setShowChatPage }) {
  const chats = useSelector(state => state.chat);

  return (
    <div>
      <Header />
      {chats.map((chat) =>
          <ChatListRow key={chat[0]} chat={chat} setShowChatPage={setShowChatPage} />
      )}
    </div>
  );
}
