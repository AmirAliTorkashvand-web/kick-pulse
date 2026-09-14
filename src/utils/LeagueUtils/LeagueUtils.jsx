import { leaguePriority } from "../../components/Home/MatchFixtures/MatchPriority";

export const getLeagueScore = (tournament) => {
  const leagueIDs = tournament.league.id;
  const leagueScore = leaguePriority[leagueIDs] ?? 0;

  return leagueScore;
};

export function groupBy(array, getKey, createGroup, addItem) {
  return array.reduce((acc, item) => {
    const key = getKey(item);
    if (!acc[key]) {
      acc[key] = createGroup(item);
    }

    addItem(acc[key], item);

    return acc;
  }, {});
}
