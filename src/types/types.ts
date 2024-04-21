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

export type CharactersContextProps = {
  response: API_Response;
  searchTerm: string;
  characters: API_Response["results"];
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCharacterSearch: () => void;
  resetTable: () => void;
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  fetchPage: (pageNumber: number) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};
