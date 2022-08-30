import ChatListRow from "../PageItemContents/ChatListRow";
import { useSelector } from "react-redux";
import { orderChatListByTimestamp } from "../../functions";

export default function ChatList({ setShowChatPage }) {
  const chats = useSelector(state => state.chat);
  const orderedChatList = orderChatListByTimestamp(chats);

  return (
    <div>
      {orderedChatList.map((chat) =>
          <ChatListRow key={chat[0]} chat={chat} setShowChatPage={setShowChatPage} />
      )}
    </div>
  );
}
