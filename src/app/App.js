import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import { addChat } from "../store/sllices/chatSlice";
import styled from "styled-components";
import Header from "../components/PageComponents/Header";
import Loading from "../components/PageComponents/Loading";
import FriendList from "../components/PageComponents/FriendList";
import ChatList from "../components/PageComponents/ChatList";
import ChatPage from "../components/PageComponents/ChatPage";

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -400px;
  margin-left: -350px;
  width: 700px;
  height: 800px;
  border: 2px solid;
  border-color: grey;
  border-radius: 20px;
  background-color: #ECECEC;
`

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showChatPage, setShowChatPage] = useState(false);
  const [singleFriendInfo, setSingleFriendInfo] = useState(null);

  useEffect(() => {
    function getDataFromFirebase() {
      const messages = ref(db, "/chatting");

      return (dispatch) => {
        onValue(messages, (snapshot) => {
          snapshot.forEach(node => {
            dispatch(addChat({ name: node.key, value: node.val() }));
          })
          navigate("/friends");
        });
      }
    }

    dispatch(getDataFromFirebase());
  }, []);

  return (
    <Container>
      {!showChatPage &&
        <div>
          <Header setSingleFriendInfo={setSingleFriendInfo} />
          <Routes>
            <Route path="/" element={<Loading />} />
            <Route path="/friends" element={
              <FriendList
                setShowChatPage={setShowChatPage}
                singleFriendInfo={singleFriendInfo}
                setSingleFriendInfo={setSingleFriendInfo}
              />}
            />
            <Route path="/chats" element={<ChatList setShowChatPage={setShowChatPage} />} />
          </Routes>
        </div>
      }
      {showChatPage && <ChatPage setShowChatPage={setShowChatPage} />}
    </Container>
  );
}

export default App;
