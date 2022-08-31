import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import { addChat } from "../store/sllices/chatSlice";
import styled from "styled-components";
import Header from "../components/PageContents/Header";
import Loading from "../components/PageContents/Loading";
import FriendList from "../components/PageContents/FriendList";
import ChatList from "../components/PageContents/ChatList";
import ChatPage from "../components/PageContents/ChatPage";

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
  const [name, setName] = useState("");
  const [showChatPage, setShowChatPage] = useState(false);
  const [singleFriendInfo, setSingleFriendInfo] = useState(null);

  const messages = ref(db, "/chatting");
  function getDataFromFirebase() {
    return (dispatch) => {
      onValue(messages, (snapshot) => {
        snapshot.forEach(node => {
          dispatch(addChat({ name: node.key, value: node.val() }));
        })
        navigate("/friends");
      });
    }
  }

  useEffect(() => {
    dispatch(getDataFromFirebase());
  }, []);

  return (
    <Container>
      {!showChatPage &&
        <div>
          <Header setName={setName} setSingleFriendInfo={setSingleFriendInfo} />
          <Routes>
            <Route path="/" element={<Loading />} />
            <Route path="/friends" element={
              <FriendList
                onSubmit={value => setName(value)}
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
