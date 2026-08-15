import api from "../../api/axios";
import { ENDPOINTS } from "../../api/endpoints";

export const getFixtures = async (params) => {
  const response = await api.get(ENDPOINTS.fixtures, {
    params,
  });

  return response.data;
};

export const getHomeFixtures = async ({ yesterday, today }) => {
  const [yesterdayData, todayData] = await Promise.all([
    getFixtures({ date: yesterday }),
    getFixtures({ date: today }),
  ]);

  return [
    ...yesterdayData.response,
    ...todayData.response,
  ];
};