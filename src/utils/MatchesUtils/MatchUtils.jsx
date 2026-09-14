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

export const filterMatches = (matches, activeFilter) => {
  return matches.filter((match) => {
    const status = match.fixture.status.short;

    if (activeFilter === "all") {
      return true;
    }

    if (activeFilter === "live") {
      return ["LIVE", "1H", "2H", "HT", "ET", "P"].includes(status);
    }

    if (activeFilter === "finished") {
      return ["FT", "AET", "PEN"].includes(status);
    }

    if (activeFilter === "upcoming") {
      return status === "NS";
    }

    return true;
  });
};
