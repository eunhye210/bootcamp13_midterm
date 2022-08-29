export function getTodayDateAndTime() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDay();
  const todayDate = `${year}-${month}-${day}`;

  const hours = today.getHours();
  const minutes = today.getMinutes();
  const todayTime = `${hours}:${minutes}`;

  return [todayDate, todayTime];
}
