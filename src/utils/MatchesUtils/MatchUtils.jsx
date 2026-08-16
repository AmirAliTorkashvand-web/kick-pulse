export function getMatchDates() {
  const today = new Date();

  const createDate = (offset) => {
    const date = new Date(today);
    date.setDate(date.getDate() + offset);

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    });
  };

  return {
    yesterday: createDate(-1),
    today: createDate(0),
    tomorrow: createDate(1),
  };
}
