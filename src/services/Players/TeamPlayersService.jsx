import api from "../../api/axios";
import { ENDPOINTS } from "../../api/endpoints";

export const getTeams = async (params) => {
  const response = await api.get(ENDPOINTS.teams, {
    params,
  });

  return response;
};

export const getPlayers = async (params) => {
  const response = await api.get(ENDPOINTS.players, {
    params,
  });

  return response;
};
