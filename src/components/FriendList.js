import FriendListRow from "./ChatPageContents/FriendListRow";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setChat } from "../store/sllices/chatSlice";

const Container = styled.div`
  .search-display {
    display: flex;
    justify-content: space-between;
  }
  .search {
    width: 200px;
    height: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 25px;
  }
  .search-button {
    height: 25px;
    margin-left: 5px;
  }
  .select {
    height: 25px;
    margin-top: 10px;
    margin-right: 25px;
  }
`

export default function FriendList({
    name,
    setName,
    setShowChatPage,
    singleFriendInfoList,
    setSingleFriendInfoList
  }) {
  const chats = useSelector(state => state.chat);
  const dispatch = useDispatch();

  let allFriendsInfoList = [];
  for (const [key, value] of Object.entries(chats)) {
    allFriendsInfoList.push([key, value]);
  }

  function searchByName() {
    setSingleFriendInfoList([name, chats[name]]);
  }

  function showAscOrDesc(e) {
    const newChats = {};
    const keys = Object.keys(chats).sort();
    allFriendsInfoList = [];

    if (e.target.value === "ascending") {
      for (const key of keys) {
        newChats[key] = chats[key];
      }
      dispatch(setChat(newChats));
    } else {
      keys.reverse();
      for (const key of keys) {
        newChats[key] = chats[key];
      }
      dispatch(setChat(newChats));
    }
  }

  return (
    <Container>
      <div className="search-display">
        <div>
          <input
            className="search"
            placeholder="친구 이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="search-button" onClick={searchByName}>search</button>
        </div>
        <select className="select" onChange={showAscOrDesc}>
          <option value="">-- 정렬 기준 --</option>
          <option value="ascending">오름차순</option>
          <option value="descending">내림차순</option>
        </select>
      </div>
      <div className="rows">
        {singleFriendInfoList ?
          <FriendListRow info={singleFriendInfoList} setShowChatPage={setShowChatPage} />
          : allFriendsInfoList.map((info) =>
          <FriendListRow key={info} info={info} setShowChatPage={setShowChatPage} />)
        }
      </div>
    </Container>
  );
}
