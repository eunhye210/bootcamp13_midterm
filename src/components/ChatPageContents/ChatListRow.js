import styled from "styled-components";
import person from "../../person.png";

const Container = styled.div`
  width: 700px;
  height: 70px;
  border: 1px solid;
  .content {
    display: flex;
  }
  .img {
    width: 50px;
    height: 50px;
  }
`

export default function ChatListRow({ setShowChatPage }) {

  return (
    <Container>
      <div className="content">
        <img className="img" alt="person_img" src={person} />
        <div className="content">
          <div>
            <div>name</div>
            <div>message 30max</div>
          </div>
          <div>date</div>
        </div>
        <button onClick={() => setShowChatPage(true)}>대화하기</button>
      </div>
    </Container>
  );
}
