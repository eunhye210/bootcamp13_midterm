import styled from "styled-components"

export const Container = styled.div`
  width: 600px;
  height: 50px;
  border: 1px solid;
  margin: 10px;
  margin-left: 45px;
  border-radius: 10px;
  background-color: white;
  .content {
    display: flex;
    justify-content: space-between;
  }
  .chatlist-display {
    display: flex;
    margin-top: 7px;
    margin-left: 20px;
    font-size: 16px;
  }
  .chatlist-text {
    margin-left: 10px;
    margin-right: 5px;
    font-weight: bold;
  }
  .chatlist-date {
    color: grey;
  }
  .person-info {
    display: flex;
    width: 50px;
    font-size: 20px;
    margin-top: 7px;
    margin-left: 20px;
  }
  .info-font {
    margin-left: 30px;
    margin-top: 5px;
  }
  .info-button {
    width: 50px;
    height: 30px;
    font-size: 15px;
    margin-top: 8px;
    margin-right: 30px;
  }
  .img {
    width: 30px;
    height: 30px;
  }
  .chatlist-text {
    max-width: 30ch;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`
