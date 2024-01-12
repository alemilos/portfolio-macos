import { languagesEnum } from "../../providers/LanguageProvider";

function isToday(dateStr) {
  const now = new Date();
  const date = new Date(dateStr);

  const dayNow = String(now.getDate()).padStart(2, "0");
  const dayDate = String(date.getDate()).padStart(2, "0");
  if (dayNow !== dayDate) return false;

  const monthNow = String(now.getMonth() + 1).padStart(2, "0");
  const monthDate = String(date.getMonth() + 1).padStart(2, "0");
  if (monthNow !== monthDate) return false;

  const yearNow = String(now.getFullYear());
  const yearDate = String(date.getFullYear());
  if (yearNow !== yearDate) return false;

  return true;
}

function getHourMinutes(dateStr) {
  const date = new Date(dateStr);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
}

function formatENDate(dateStr) {
  const date = new Date(dateStr);
  if (isToday(dateStr)) {
    // If date is today just print the hour and minutes of publishing
    return getHourMinutes(dateStr);
  }
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en", { month: "long" });
  const year = String(date.getFullYear());

  return `${month} ${day} ${year}`;
}

function formatITDate(dateStr) {
  const date = new Date(dateStr);
  if (isToday(dateStr)) {
    // If date is today just print the hour and minutes of publishing
    return getHourMinutes(dateStr);
  }
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("it", { month: "long" });
  const year = String(date.getFullYear());

  return `${day} ${month} ${year}`;
}

export function formatDate(lng, date) {
  if (lng === languagesEnum.EN) {
    return formatENDate(date);
  } else if (lng === languagesEnum.IT) {
    return formatITDate(date);
  }
}

export function sortComments(comments) {
  if (!comments) {
    return [];
  }

  return comments.sort((comment1, comment2) => {
    return new Date(comment2.date) - new Date(comment1.date);
  });
}
