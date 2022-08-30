import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FriendList from "../components/FriendList";
import ChatList from "../components/ChatList";
import ChatPage from "../components/ChatPage";
import { app } from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { addChat } from "../store/sllices/chatSlice";
import styled from "styled-components";
import Header from "../components/Header";

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
  const [showChatPage, setShowChatPage] = useState(false);
  const [name, setName] = useState("");
  const [singleFriendInfoList, setSingleFriendInfoList] = useState("");

  const db = getDatabase(app);
  const messages = ref(db, "/chatting");

  const fetchValues = () => {
    return (dispatch) => {
      onValue(messages, (snapshot) => {
        snapshot.forEach(node => {
          dispatch(addChat({ name: node.key, value: node.val() }));
        })
      });
    }
  };
  useEffect(() => {
    dispatch(fetchValues());
  }, []);


  return (
    <Container>
      {!showChatPage &&
        <div>
          <Header setName={setName} setSingleFriendInfoList={setSingleFriendInfoList} />
          <Routes>
            <Route path="/" element={
              <FriendList
                name={name}
                setName={setName}
                setShowChatPage={setShowChatPage}
                singleFriendInfoList={singleFriendInfoList}
                setSingleFriendInfoList={setSingleFriendInfoList}
              />}
            />
            <Route path="/chats" element={<ChatList setShowChatPage={setShowChatPage}/>} />
          </Routes>
        </div>
      }
      {showChatPage && <ChatPage setShowChatPage={setShowChatPage} />}
    </Container>
  );
}

export default App;
