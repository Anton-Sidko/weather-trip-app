// export function formatDate(dateStr) {
//   // const formattedDate = new Date(dateStr).toISOString();

//   // return formattedDate;
//   // return new Intl.DateTimeFormat('en', {
//   //   year: 'numeric',
//   //   day: 'numeric',
//   //   month: '2-digit',
//   // }).format(new Date(dateStr));
// }

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}
