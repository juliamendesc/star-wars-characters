import { API_Response } from 'src/types/types';

export const BASE_URL =
  process.env.REACT_APP_API_URL || 'https://swapi.dev/api';

export const resetResponse: API_Response = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};
