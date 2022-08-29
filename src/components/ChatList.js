import ChatListRow from "./ChatPageContents/ChatListRow";
import Header from "../components/Header";

export default function ChatList({ setShowChatPage }) {
  return (
    <div>
      <Header />
      <ChatListRow setShowChatPage={setShowChatPage} />
      <ChatListRow setShowChatPage={setShowChatPage} />
      <ChatListRow setShowChatPage={setShowChatPage} />
      <ChatListRow setShowChatPage={setShowChatPage} />
      <ChatListRow setShowChatPage={setShowChatPage} />
      <ChatListRow setShowChatPage={setShowChatPage} />
    </div>
  );
}
