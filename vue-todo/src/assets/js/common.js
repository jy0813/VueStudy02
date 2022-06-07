export default () => {
  const time = new Date();
  const year = time.getFullYear();
  const month = ("0" + (time.getMonth() + 1)).slice(-2);
  const day = ("0" + time.getDate()).slice(-2);
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const dateInfo = {
    year,
    month,
    day,
    hour,
    minutes,
    seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
  };
  return dateInfo;
};
