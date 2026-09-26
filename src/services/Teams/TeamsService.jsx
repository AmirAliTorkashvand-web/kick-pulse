import api from "../../api/axios";
import { ENDPOINTS } from "../../api/endpoints";

export const getTeamStats = async (params) => {
  const response = await api.get(ENDPOINTS.teamStats, {
    params,
  });

  return response.data;
};