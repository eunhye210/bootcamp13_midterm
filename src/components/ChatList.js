import ChatListRow from "./ChatPageContents/ChatListRow";
import { useSelector } from "react-redux";
import { getRecentTimeStampList } from "../functions";

export default function ChatList({ setShowChatPage }) {
  const chats = useSelector(state => state.chat);

  const chatList = [];
  const recentDateList = getRecentTimeStampList(chats);
  for (const date of recentDateList) {
    chatList.push([date[1], chats[date[1]]]);
  }

  return (
    <div>
      {chatList.map((chat) =>
          <ChatListRow key={chat[0]} chat={chat} setShowChatPage={setShowChatPage} />
      )}
    </div>
  );
}
