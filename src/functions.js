export function getTodayDateAndTime() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const todayDate = `${year}-${month < 10 ? "0" + month : month}-${date < 10 ? "0" + date : date}`;

  const hours = today.getHours();
  const minutes = today.getMinutes();
  const todayTime = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;

  return [todayDate, todayTime];
}

export function orderChatListByTimestamp(chats) {
  const dateList = [];
  const chatList = [];

  for (const [key, value] of Object.entries(chats)) {
    const messages = value.messages;
    const date = messages[messages.length - 1].date;
    const time = messages[messages.length - 1].time;
    const timeStamp = new Date(`${date} ${time}`);
    dateList.push([timeStamp, key]);
  }

  dateList.sort((a, b) => {
    return (a[0] > b[0]) ? -1 : 1;
  });

  for (const date of dateList) {
    chatList.push([date[1], chats[date[1]]]);
  }

  return chatList;
}
