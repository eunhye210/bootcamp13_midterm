import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setChat } from "../../store/sllices/chatSlice";
import SearchInput from "../PageItemComponents/SearchInput";
import FriendListRow from "../PageItemComponents/FriendListRow";

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
  setShowChatPage,
  singleFriendInfo,
  setSingleFriendInfo,
}) {
  const dispatch = useDispatch();
  const chats = useSelector(state => state.chat);

  let everyFriendInfoList = [];
  for (const [key, value] of Object.entries(chats)) {
    everyFriendInfoList.push([key, value]);
  }

  function showAscOrDesc(e) {
    const newChats = {};
    const keys = Object.keys(chats).sort();
    everyFriendInfoList = [];

    if (e.target.value === "ascending") {
      for (const key of keys) {
        newChats[key] = chats[key];
      }
    } else {
      keys.reverse();
      for (const key of keys) {
        newChats[key] = chats[key];
      }
    }
    dispatch(setChat(newChats));
  }

  return (
    <Container>
      <div className="search-display">
        <SearchInput setSingleFriendInfo={setSingleFriendInfo} />
        <select className="select" onChange={showAscOrDesc}>
          <option value="">-- 정렬 기준 --</option>
          <option value="ascending">오름차순</option>
          <option value="descending">내림차순</option>
        </select>
      </div>
      <div className="rows">
        {singleFriendInfo ?
          <FriendListRow info={singleFriendInfo} setShowChatPage={setShowChatPage} />
          : everyFriendInfoList.map((info) =>
          <FriendListRow key={info[0]} info={info} setShowChatPage={setShowChatPage} />)
        }
      </div>
    </Container>
  );
}
