import { useState } from "react";
import { useSelector } from "react-redux";

export default function SearchInput({ setSingleFriendInfo }) {
  const [userName, setUserName] = useState("");
  const chats = useSelector(state => state.chat);

  function searchByName(e) {
    e.preventDefault();

    if (chats[userName]) {
      setSingleFriendInfo([userName, chats[userName]]);
    } else {
      setUserName("");
      alert(`${userName} 이름을 가진 친구가 없습니다.`);
    }
  }

  return (
    <form onSubmit={searchByName}>
      <input
        className="search"
        placeholder="친구 이름"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="search-button">search</button>
    </form>
  );
}
