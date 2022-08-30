import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
  .display {
    display: flex;
    justify-content: ${props => props.user  === "eunhye" ? "end" : "start"};
  }
  .date-time {
    margin-left: 10px;
    color: grey;
  }
  .text-box1 {
    height: 20px;
    padding: 5px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 20px;
    background-color: ${props => props.user  === "eunhye" ? "#C2E5D3" : "#ECECEC"};
    font-size: 16px;
    display: flex;
    justify-content: ${props => props.user  === "eunhye" ? "end" : "start"};
  }
`

export default function ChatRow({ messageInfo, name }) {
  const { message, date, time, username } = messageInfo;

  return (
    <Container user={name} length={messageInfo.message}>
      <div className="display">
        <div>{username}</div>
        <div className="date-time">{`${date} ,  ${time}`}</div>
      </div>
      <div className="display">
        <div className="text-box1">
          {message}
        </div>
      </div>
    </Container>
  );
}
