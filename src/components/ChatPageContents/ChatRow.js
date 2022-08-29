import styled from "styled-components";

const Container = styled.div`
  width: 450px;
  height: 50px;
  border: 1px solid;
  .display {
    display: flex;
  }
`

export default function ChatRow() {
  return (
    <Container>
      <div className="display">
        <div>name</div>
        <div>date</div>
        <div>time</div>
      </div>
      <div>full message</div>
    </Container>
  );
}
