import DateObject from "react-date-object";

export function convertDateFormat(date) {
    return new DateObject({
      date: date ? new Date(date) : new Date(),
      format: "DD MMMM YYYY",
    }).format();
}
  