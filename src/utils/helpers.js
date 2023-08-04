export const formatDate = function (dateStr) {
  const date = new Date(dateStr);

  const formattedDate = date.toLocaleDateString('ua', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return formattedDate;
};

export const calcTimesLeft = function (dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  const timeDiff = d2 - d1;

  if (timeDiff <= 0) return null;

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export const getDayName = function (dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en', { weekday: 'long' });
};
