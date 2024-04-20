export type Character = {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  url: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
};

export type API_Response = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
};
