export function getTodayDateAndTime() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const todayDate = `${year}-${month < 10 ? "0" + month : month}-${date < 10 ? "0" + date : date}`;

  const hours = today.getHours();
  const minutes = today.getMinutes();
  const todayTime = `${hours}:${minutes}`;

  return [todayDate, todayTime];
}

export function getRecentTimeStampList(chats) {
  const dateList = [];

  for (const [key, value] of Object.entries(chats)) {
    const messages = value.messages;
    const date = messages[messages.length - 1].date;
    const time = messages[messages.length - 1].time;
    const timeStamp = new Date(`${date} ${time}`);
    dateList.push([timeStamp, key]);
  }

  dateList.sort((a, b) => {
    if (a[0] > b[0]) {
      return -1;
    } else {
      return 1;
    }
  })
  return dateList;
}
