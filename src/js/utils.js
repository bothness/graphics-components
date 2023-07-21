// const randomString = () => {
//   return Math.random().toString(16).slice(2, 8);
// };

export const slugify = (str, suffix = true) =>
  str
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
// .concat(suffix ? `-${randomString()}` : "");

export const validDate = (str) => {
  const date = new Date(str);
  return !isNaN(date);
};

export const formatDate = (
  str,
  locale = "en-GB",
  opts = { year: "numeric", month: "long", day: "2-digit" }
) => {
  const date = new Date(str);
  return date.toLocaleDateString(locale, opts);
};

export const commas = (num) => {
  const parts = String(num).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

export const ascending = (a, b) =>
  a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;

export const descending = (a, b) =>
  a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
