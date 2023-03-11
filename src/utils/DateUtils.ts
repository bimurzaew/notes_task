export const getCurrentDateTime = (): string => {
  const currentDateTime = new Date();
  const year = currentDateTime.getFullYear();
  const month = currentDateTime.getMonth() + 1;
  const day = currentDateTime.getDate();
  const hours = currentDateTime.getHours();
  const minutes = currentDateTime.getMinutes();

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};
