export function mapLeague(league) {
  return {
    id: league.league.id,
    name: league.league.name,
    image: league.league.logo,
  };
}

export function mapTeam(team) {
  return {
    id: team.team.id,
    name: team.team.name,
    image: team.team.logo,
  };
}

export function mapPlayer(player) {
  return {
    id: player.player.id,
    name: player.player.name,
    image: player.player.photo,
  };
}

export function playerRatingColor(rating) {
  const value = Number(rating);

  if (value === 10) return "text-cyan";
  if (value >= 9) return "text-brand-dark";
  if (value >= 7) return "text-brand-light";
  if (value >= 6) return "text-warning";
  if (value >= 5) return "text-danger";
  return "text-purple";
}

export function playerTeamFinder(statistics, nationality) {
  for (let i = statistics.length - 1; i >= 0; i--) {
    const team = statistics[i].team;

    if (team.name !== nationality) {
      return team;
    }
  }
  return null;
}

export function playerAvgRating(statistics) {
  const ratings = statistics.map((stat) => stat.games.rating);

  const ratingTotal = ratings.reduce((sum, rating) => sum + Number(rating), 0);

  const ratingAvg = ratingTotal / ratings.length;

  return Number(ratingAvg.toFixed(2));
}

export function playerAppearences(statistics, field, box) {
  const fieldBox = statistics.map((stat) => stat[box][field]);

  const fieldTotal = fieldBox.reduce((sum, value) => sum + Number(value), 0);

  return fieldTotal;
}

export const statCategories = {
  attacking: ["goals", "dribbles", "shots"],

  defending: ["penalty", "tackles", "duels"],

  discipline: ["cards", "fouls"],

  passing: ["passes"],

  team: ["games"],
};

export function extractStats(statistics) {
  return statistics.flatMap((stat) =>
    Object.entries(stat).flatMap(([box, fields]) => {
      if (!fields || typeof fields !== "object") return [];

      return Object.entries(fields).map(([field, value]) => ({
        box,
        field,
        value,
      }));
    }),
  );
}

export function sortBoxes(stats) {
  const result = {};

  Object.entries(statCategories).flatMap(([category, fields]) => {
    stats.map((stat) => {
      if (fields.includes(stat.box)) {
        if (
          category === "team" &&
          ["rating", "position", "number"].includes(stat.field)
        ) {
          return;
        }

        if (!result[category]) {
          result[category] = [];
        }

        result[category].push(stat);
      }

      return [];
    });
  });

  return result;
}

export function totalValue(boxes) {
  const stat = {};

  Object.entries(boxes).flatMap(([category, stats]) => {
    if (!stat[category]) {
      stat[category] = [];
    }
    stats.map((field) => {
      const existingBox = stat[category].find(
        (box) => box.box === field.box && box.field === field.field,
      );
      if (existingBox) {
        existingBox.value += field.value;
      } else {
        stat[category].push(field);
      }
    });
  });
  return stat;
}

export function categoryColors(category) {
  if (category === "attacking") return "text-danger";
  else if (category === "passing") return "text-brand";
  else if (category === "defending") return "text-cyan";
  else if (category === "discipline") return "text-warning";
  else if (category === "team") return "text-purple-400";
}

export function boxContainer(stats) {
  const boxes = {};

  Object.entries(stats).flatMap(([box, stat]) => {
    if (!boxes[stat.box]) {
      boxes[stat.box] = [];
    }
    boxes[stat.box].push({
      field: stat.field,
      value: stat.value,
    });
  });
  return boxes;
}

export function findData(statistics, dataPaths) {
  return statistics.map((stat) => {
    const data = {};

    dataPaths.forEach(([name, path]) => {
      data[name] = path.reduce((value, key) => value?.[key], stat);
    });

    return data;
  });
}
