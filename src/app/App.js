import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import FriendList from "../components/FriendList";
import ChatList from "../components/ChatList";
import ChatPage from "../components/ChatPage";

function App() {
  const [showChatPage, setShowChatPage] = useState(false);

  return (
    <div>
      {!showChatPage &&
        <Routes>
          <Route path="/" element={<FriendList setShowChatPage={setShowChatPage} />} />
          <Route path="/chats" element={<ChatList setShowChatPage={setShowChatPage}/>} />
        </Routes>
      }
      {showChatPage && <ChatPage setShowChatPage={setShowChatPage} />}
    </div>
  );
}

export default App;
