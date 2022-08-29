import FriendListRow from "./ChatPageContents/FriendListRow";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  .search {
    margin-bottom: 10px;
  }
  .rows {
  }
`

export default function FriendList({ setShowChatPage }) {
  return (
    <Container>
      <Header />
      <div className="search">
        <input placeholder="친구 이름"></input>
        <button>search</button>
      </div>
      <select>
        <option value="">-- 정렬 기준 --</option>
        <option value="ascending">오름차순</option>
        <option value="descending">내림차순</option>
      </select>
      <div className="rows">
        <FriendListRow setShowChatPage={setShowChatPage} />
        <FriendListRow setShowChatPage={setShowChatPage} />
        <FriendListRow setShowChatPage={setShowChatPage} />
        <FriendListRow setShowChatPage={setShowChatPage} />
      </div>
    </Container>
  );
}
