# Chat App

**Firebase Realtime Database를 이용하여 실시간 채팅 기능이 구현된 앱입니다.**

## Description

### 1. `/friends` 친구 목록 페이지

- 각 목록에는 친구 이름, 사진과 함께 채팅을 시작할 수 있는 버튼이 있습니다.
- 검색창을 이용해 친구를 찾을 수 있습니다.
- 이름을 기준으로 오름차순 또는 내림차순 정렬이 가능합니다.
- 채팅 목록으로 이동할 수 있는 버튼이 있습니다.

### 2. `/chats` 채팅 목록 페이지

- 최신 채팅 순으로 채팅 목록이 나열됩니다.
- 각 목록에는 친구 이름, 가장 최신 메시지의 첫 30글자, 해당 전송 날짜가 나타납니다.
- "Chat" 버튼을 누르면 채팅 페이지로 이동합니다.
- 친구 목록으로 이동할 수 있는 버튼이 있습니다.

### 3. 채팅 페이지

- 상대방과 나눈 대화가 시간 순으로 나열됩니다.
- 상대방 이름, 메시지 내용, 전송 날짜 및 시간이 나타납니다.
- 채팅 페이지에서 전송된 메시지는, 채팅 페이지와 채팅 목록 페이지에 모두 반영됩니다.

## Getting Started

### Installation

```
npm install
```

### Development

```
npm start
# visit http://localhost:3000
```

### Built With

- React 18.2.0
- React-Router-Dom 6.3.0
- Redux-Toolkit 1.8.5
- Firebase 9.9.3

### Prerequisites

- [redux-thunk](https://www.npmjs.com/package/redux-thunk)
- [react-icons](https://react-icons.github.io/react-icons)
- [styled-components](https://styled-components.com/)

### Firebase Configuration

```
REACT_APP_FIREBASECONFIG_APIKEY=AIzaSyDhlHs2I-zV_cKU5nc3yV3fgq0ZS52a4bs
REACT_APP_FIREBASECONFIG_AUTHDOMAIN=bootcamp13-midterm.firebaseapp.com
REACT_APP_FIREBASECONFIG_PROJECTID=bootcamp13-midterm
REACT_APP_FIREBASECONFIG_STORAGEBUCKET=bootcamp13-midterm.appspot.com
REACT_APP_FIREBASECONFIG_MESSAGINGSENDERID=218748169096
REACT_APP_FIREBASECONFIG_APPID=1:218748169096:web:8bd6697572d5ee7be5a83d
REACT_APP_FIREBASECONFIG_MEASUREMENTID=G-23G5NDP3QE
REACT_APP_FIREBASECONFIG_DATABASEURL=https://bootcamp13-midterm-default-rtdb.firebaseio.com
```

## Chat App URL

[ChatApp_url](https://graceful-daffodil-fc6db8.netlify.app/)
