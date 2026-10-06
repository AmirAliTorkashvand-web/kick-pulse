import api from "../../api/axios";
import { ENDPOINTS } from "../../api/endpoints";
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

export const getEvents = async (params) => {
  const response = await api.get(ENDPOINTS.matchEvents, {
    params,
  });

  return response.data;
};