import { Substitution } from "../../assets/icons/Matches/matchesIcons";
import { Ball, Card } from "../../assets/icons/Players/PlayersIcon";

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

export function getEventSide({ events, homeId, awayId }) {
  const side = events.map((event) => {
    if (event.team.id === homeId)
      return {
        event: event,
        side: "home",
      };
    if (event.team.id === awayId)
      return {
        event: event,
        side: "away",
      };

    return {
      event: event,
      side: "default",
    };
  });
  return side;
}

export function getEventMeta({ event }) {
  const meta = {
    type: null,
    Icon: null,
    iconColor: null,
    player: event.player?.name ?? null,
    secondaryText: event.assist?.name ?? null,
  };

  switch (event.type) {
    case "Goal": {
      switch (event.detail) {
        case "Normal Goal":
          meta.type = "goal";
          meta.Icon = Ball;
          meta.iconColor = "#00e676";
          break;

        case "Own Goal":
          meta.type = "own-goal";
          meta.Icon = Ball;
          meta.iconColor = "#FF3030";
          break;

        case "Penalty":
          meta.type = "penalty";
          meta.Icon = Ball;
          meta.iconColor = "#00e676";
          break;

        case "Missed Penalty":
          meta.type = "missed-penalty";
          meta.Icon = Ball;
          meta.iconColor = "#FF3030";
          break;

        default:
          return null;
      }

      break;
    }

    case "Card": {
      switch (event.detail) {
        case "Yellow Card":
          meta.type = "yellow-card";
          meta.Icon = Card;
          meta.iconColor = "#FFD600";
          break;

        case "Second Yellow card":
          meta.type = "second-yellow";
          meta.Icon = Card;
          meta.iconColor = "#FF3030";
          break;

        case "Red Card":
          meta.type = "red-card";
          meta.Icon = Card;
          meta.iconColor = "#FF3030";
          break;

        default:
          return null;
      }

      break;
    }

    case "subst":
      meta.type = "substitution";
      meta.Icon = Substitution;
      meta.iconColor = "#33C771";
      meta.secondaryText = event.assist?.name
        ? `IN: ${event.assist.name}`
        : null;
      break;

    case "Var":
      meta.type = "var";
      meta.Icon = Var;
      meta.iconColor = "#00c8ff";
      meta.player = null;
      meta.secondaryText = event.detail ?? event.comments ?? null;
      break;

    default:
      return null;
  }

  return meta;
}

export function getPlayerMeta({ fixture, teamId, field }) {
  const lineup = fixture.lineups.find((team) => team.team.id === teamId);

  const playersData = fixture.players.find((team) => team.team.id === teamId);

  if (!lineup || !playersData) return [];

  return lineup[field].map((player) => {
    const playerFinder = playersData.players.find(
      (data) => data.player.id === player.player.id,
    );

    return {
      startXI: player,
      playerPhoto: playerFinder?.player.photo ?? null,
    };
  });
}

export function gridToPitchPosition({ grid, rowPlayers, side }) {
  const [row, column] = grid.split(":").map(Number);

  const rowPositions = {
    1: 8,
    2: 28,
    3: 50,
    4: 70,
    5: 90,
  };

  let left = rowPositions[row] ?? 50;

  if (side === "away") {
    left = 100 - left;
  }

  const columns = rowPlayers
    .map((player) => Number(player.startXI.player.grid.split(":")[1]))
    .sort((a, b) => a - b);

  const index = columns.indexOf(column);

  let top = 50;

  if (columns.length === 2) {
    top = index === 0 ? 40 : 60;
  }

  if (columns.length === 3) {
    top = [30, 50, 70][index];
  }

  if (columns.length === 4) {
    top = [20, 40, 60, 80][index];
  }

  if (columns.length === 5) {
    top = [15, 32.5, 50, 67.5, 85][index];
  }

  if (row === 1) {
    return {
      left: side === "home" ? "15%" : "85%",
      top: "50%",
    };
  }

  return {
    left: `${left}%`,
    top: `${top}%`,
  };
}

export function getStatsMeta({ stat }) {
  const teamStats = [];

  const lowerWinner = ["Fouls", "Yellow Cards", "Red Cards"];

  for (const homeStats of stat.statistics[0].statistics) {
    let winner;

    const findSameStat = stat.statistics[1].statistics.find(
      (awayStats) => awayStats.type === homeStats.type,
    );

    if (!findSameStat) continue;

    const homeValue = Number(String(homeStats.value).replace("%", ""));
    const awayValue = Number(String(findSameStat.value).replace("%", ""));

    if (!lowerWinner.includes(homeStats.type)) {
      if (homeValue > awayValue) {
        winner = stat.statistics[0].team.name;
      } else if (homeValue < awayValue) {
        winner = stat.statistics[1].team.name;
      } else {
        winner = null;
      }
    } else {
      if (homeValue < awayValue) {
        winner = stat.statistics[0].team.name;
      } else if (homeValue > awayValue) {
        winner = stat.statistics[1].team.name;
      } else {
        winner = null;
      }
    }

    teamStats.push({
      type: homeStats.type,
      homeValue: homeStats.value,
      awayValue: findSameStat.value,
      winner: winner,
    });
  }

  const positionIndex = (type) => {
    return teamStats.findIndex((team) => team.type === type);
  };

  [teamStats[positionIndex("Ball Possession")], teamStats[0]] = [
    teamStats[0],
    teamStats[positionIndex("Ball Possession")],
  ];
  [teamStats[positionIndex("Total Shots")], teamStats[8]] = [
    teamStats[8],
    teamStats[positionIndex("Total Shots")],
  ];

  console.log(teamStats);

  return teamStats;
}
