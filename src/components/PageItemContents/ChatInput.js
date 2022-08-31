import { useState } from "react";
import { useSelector } from "react-redux";
import { ref, set } from "firebase/database";
import { db } from "../../firebase";
import { getTodayDateAndTime } from "../../functions";

export default function ChatInput() {
  const [input, setInput] = useState("");
  const { friend, chat } = useSelector(state => state);

  function sendMessage(e) {
    e.preventDefault();

    const [todayDate, todayTime] = getTodayDateAndTime();
    const postData = {
      username: "eunhye",
      message: input,
      date: todayDate,
      time: todayTime,
    };

    const numberKey = chat[friend.value].messages.length;
    set(ref(db, `chatting/${friend.value}/messages/${numberKey}`), postData);
    setInput("");
  }

  return (
    <form onSubmit={sendMessage}>
      <input
        className="submit-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="submit-button" disabled={!input}>send</button>
    </form>
  );
}
