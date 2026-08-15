import api from "../../api/axios";
import { ENDPOINTS } from "../../api/endpoints";

export const getTopScorers = async (params) => {
  const response = await api.get(ENDPOINTS.topScorers, {
    params,
  });

  return response.data;
};

export const getLeague = async (params) => {
  const response = await api.get(ENDPOINTS.leagues, {
    params,
  });

  return response.data;
};

export const getTransfers = async (params) => {
  const response = await api.get(ENDPOINTS.transfers, {
    params,
  });

  return response.data;
};

export const getTopAssiters = async (params) => {
  const response = await api.get(ENDPOINTS.topAssisters, {
    params,
  });

  return response.data;
};

export const getStandings = async (params) => {
  const response = await api.get(ENDPOINTS.standing, {
    params,
  });

  return response.data;
};
