import FriendListRow from "./ChatPageContents/FriendListRow";
import styled from "styled-components";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useState } from "react";

const Container = styled.div`
  .search {
    margin-bottom: 10px;
  }
  .rows {
  }
`

export default function FriendList({ setShowChatPage }) {
  const [name, setName] = useState("");
  const [chats, setChats] = useState(useSelector(state => state.chat));

  function searchByName() {
    // 수정 필요 !
  }

  const friendInfoList = [];
  for (const [key, value] of Object.entries(chats)) {
    friendInfoList.push([key, value.img]);
  }

  return (
    <Container>
      <Header />
      <div className="search">
        <input
          placeholder="친구 이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={searchByName}>search</button>
      </div>
      <select>
        <option value="">-- 정렬 기준 --</option>
        <option value="ascending">오름차순</option>
        <option value="descending">내림차순</option>
      </select>
      <div className="rows">
        {friendInfoList.map((info) =>
          <FriendListRow key={info} info={info} setShowChatPage={setShowChatPage} />
        )}
      </div>
    </Container>
  );
}
