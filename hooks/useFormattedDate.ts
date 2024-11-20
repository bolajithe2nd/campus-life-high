import moment from "moment";

export const useFormattedDate = (date: string) => {
  const formatted = date ? moment(date).format("MMM Do, YYYY") : "N/A";
  return formatted;
};
