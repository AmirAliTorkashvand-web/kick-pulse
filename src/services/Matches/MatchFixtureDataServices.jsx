import { getFixtures } from "../Home/MatchFixtureService";

export const getMatchesFixtures = async ({ yesterday, today, tomorrow }) => {
  const [yesterdayData, todayData, tomorrowData] = await Promise.all([
    getFixtures({ date: yesterday }),
    getFixtures({ date: today }),
    getFixtures({ date: tomorrow }),
  ]);

  return {
    yesterday: yesterdayData.response,
    today: todayData.response,
    tomorrow: tomorrowData.response,
  };
};