import styled from "styled-components";
import ChatRow from "./ChatPageContents/ChatRow";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getDatabase, ref, child, push, update, onValue } from "firebase/database";
import { app } from "../firebase";
import { getTodayDateAndTime } from "../functions"
import { addChat } from "../store/sllices/chatSlice";

const Container = styled.div`
  width: 500px;
  height: 600px;
  border: 1px solid;
`

export default function ChatPage({ setShowChatPage }) {
  const dispatch = useDispatch();
  const { friend, chat } = useSelector(state => state);
  const [messageInput, setMessageInput] = useState("");

  function sendMessage(e) {
    e.preventDefault();

    const [todayDate, todayTime] = getTodayDateAndTime();

    const db = getDatabase(app);
    const postData = {
      username: "eunhye",
      message: messageInput,
      date: todayDate,
      time: todayTime,
    };

    const newPostKey = push(child(ref(db), `/chatting/${friend.value}`)).key;
    const updates = {};
    updates[`/chatting/${friend.value}/` + newPostKey] = postData;
    update(ref(db), updates);
    setMessageInput("");
  }

  let messageList = [];
  const db = getDatabase(app);
  const messages = ref(db, `/chatting/${friend.value}`);

  const fetchValues = () => {
    return (dispatch) => {
      console.log(1);
      onValue(messages, (snapshot) => {
        let bucket = [];
        console.log(2);
        snapshot.forEach(node => {
          bucket.push(node.val());
          console.log(3);
          // dispatch(addChat({name: friend.value, value: node.val()}));
        })
        dispatch(addChat({ name: friend.value, value: bucket }));
      });
    }
  };
  useEffect(() => {
    // let bucket = [];
    // onValue(messages, (snapshot) => {
    //   snapshot.forEach(node => {
    //     bucket.push(node.val());
    //     // console.log(bucket);
    //     // dispatch(addChat({name: friend.value, value: node.val()}));
    //   })
    // });
    // console.log(bucket);
    // dispatch(addChat({ name: friend.value, value: bucket }));
    fetchValues();
  }, [])

  return (
    <Container>
      <button onClick={() => setShowChatPage(false)}>go back</button>
      <div>{`${friend.value}와의 대화`}</div>
      {chat[friend.value].messages.map((msg) =>
        <ChatRow key={msg.time} messageInfo={msg} />
      )}
      <input value={messageInput} onChange={(e) => setMessageInput(e.target.value)} />
      <button onClick={(e) => sendMessage(e)}>send</button>
    </Container>
  );
}
