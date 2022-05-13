export const formatDate = (value) => {
  let options = { year: "numeric", month: "short", day: "numeric" };
  let date = new Date(value).toLocaleString("id-ID", options);
  return date;
};
