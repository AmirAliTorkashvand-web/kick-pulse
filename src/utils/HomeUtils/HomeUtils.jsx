import MatchPriority from "../../components/Home/MatchFixtures/MatchPriority";

export function getDateRange() {
  const now = new Date();

  const today = now.toLocaleDateString("en-CA", {
    timeZone: "Asia/Tehran",
  });

  const yesterdayDate = new Date(now);
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);

  const yesterday = yesterdayDate.toLocaleDateString("en-CA", {
    timeZone: "Asia/Tehran",
  });

  return {
    today,
    yesterday,
  };
}

export const getMatchStatusPriority = (match) => {
  const status = match.fixture.status.short;

  const liveStatuses = ["LIVE", "1H", "2H", "HT", "ET", "P"];

  if (liveStatuses.includes(status)) {
    return 3;
  }

  if (status === "NS") {
    return 2;
  }

  return 1;
};

export const getFeaturedMatches = (matches) => {
  return matches
    .map((match) => ({
      ...match,
      score: MatchPriority(match),
    }))
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      const statusA = getMatchStatusPriority(a);
      const statusB = getMatchStatusPriority(b);

      if (statusB !== statusA) {
        return statusB - statusA;
      }

      if (statusA === 2) {
        return a.fixture.timestamp - b.fixture.timestamp;
      }

      if (statusA === 1) {
        return b.fixture.timestamp - a.fixture.timestamp;
      }

      return 0;
    })
    .slice(0, 3);
};

export const getTodayTopMatches = (matches, today) => {
  return matches.filter(
    (match) =>
      match.fixture.date.slice(0, 10) === today && MatchPriority(match) > 1,
  );
};

export const getBiggestWin = (matches, today) => {
  const finishedStatuses = ["FT", "AET", "PEN"];

  const finishedMatches = matches.filter(
    (match) =>
      match.fixture.date.slice(0, 10) === today &&
      finishedStatuses.includes(match.fixture.status.short),
  );

  if (!finishedMatches.length) return null;

  return finishedMatches.reduce((biggest, match) => {
    const homeGoals = match.goals.home ?? 0;
    const awayGoals = match.goals.away ?? 0;

    const difference = Math.abs(homeGoals - awayGoals);

    const biggestDifference = Math.abs(
      (biggest.goals.home ?? 0) - (biggest.goals.away ?? 0),
    );

    return difference > biggestDifference ? match : biggest;
  });
};

export const truncateTeamName = (name, length) => {
  if (!name) return "";

  return name.length > length ? `${name.slice(0, length)}...` : name;
};

export const getTopLiveMatches = (matches) => {
  const liveStatuses = ["LIVE", "1H", "2H", "HT", "ET", "P"];

  return matches
    .filter((match) => liveStatuses.includes(match.fixture.status.short))
    .sort((a, b) => MatchPriority(b) - MatchPriority(a))
    .slice(0, 4);
};

export function getMatchTime(match) {
  if (!match?.fixture?.status) return "";

  const status = match.fixture.status;

  if (["1H", "2H"].includes(status.short)) {
    return `${status.elapsed}'`;
  }

  if (status.short === "HT") {
    return "HT";
  }

  if (status.short === "FT") {
    return "FT";
  }

  return new Date(match.fixture.date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export const getTopUpcomingMatches = (matches) => {
  return matches
    .filter(
      (match) =>
        match.fixture.status.short === "NS" && MatchPriority(match) > 1,
    )
    .sort((a, b) => MatchPriority(b) - MatchPriority(a))
    .slice(0, 4);
};

export const getTopRecentResults = (matches) => {
  return matches
    .filter(
      (match) =>
        match.fixture.status.short === "FT" && MatchPriority(match) > 1,
    )
    .sort((a, b) => MatchPriority(b) - MatchPriority(a))
    .slice(0, 4);
};

export function getMatchStage(round = "") {
  const value = round.toLowerCase();

  if (value.includes("final")) {
    return "Final";
  }

  if (value.includes("play-off") || value.includes("playoffs")) {
    return "Play-off";
  }

  if (
    value.includes("qualifying") ||
    value.includes("qualification") ||
    value.includes("qualifier") ||
    value.includes("1st qualifying") ||
    value.includes("2nd qualifying") ||
    value.includes("3rd qualifying")
  ) {
    return "Qualification";
  }

  if (value.includes("quarter")) {
    return "Quarter-final";
  }

  if (value.includes("semi")) {
    return "Semi-final";
  }

  if (value.includes("group")) {
    return "Group Stage";
  }

  if (value.includes("regular season")) {
    return "Regular Season";
  }

  return null;
}
