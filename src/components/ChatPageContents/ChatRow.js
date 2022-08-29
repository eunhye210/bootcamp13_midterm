import styled from "styled-components";

const Container = styled.div`
  width: 450px;
  height: 50px;
  border: 1px solid;
  .display {
    display: flex;
  }
  .margin {
    margin-right: 10px;
  }
`

export default function ChatRow({ name, messageInfo }) {
  const { message, date, time } = messageInfo;

  return (
    <Container>
      <div className="display">
        <div className="margin">{name}</div>
        <div className="margin">{date}</div>
        <div>{`${time}:00`}</div>
      </div>
      <div>{message}</div>
    </Container>
  );
}
