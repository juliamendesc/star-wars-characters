import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from 'react';
import { API_Response, CharactersContextProps } from 'src/types/types';
import { resetResponse } from 'src/types/constants';
import { fetcher } from 'src/helpers/fetcher';

// Create the context with a default value
export const CharactersContext = createContext<CharactersContextProps>({
  response: resetResponse,
  searchTerm: '',
  characters: [],
  setSearchTerm: () => {},
  handleSearchChange: () => {},
  handleCharacterSearch: () => {},
  resetTable: () => {},
  isOpened: false,
  setIsOpened: () => {},
  fetchPage: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
});

// Export the useCharactersContext hook
export const useCharactersContext = () => useContext(CharactersContext);

export const CharactersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [response, setResponse] = useState<API_Response>(resetResponse);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [characters, setCharacters] = useState<API_Response['results']>([]);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const initialResponse = useRef<API_Response>(resetResponse);

  useEffect(() => {
    fetcher({})
      .then((results) => {
        if (results === undefined) return;
        initialResponse.current = results;
        setResponse(results);
        setCharacters(results.results);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCharacterSearch = () => {
    fetcher({
      nameQuery: searchTerm,
    })
      .then((fetchedResponse) => {
        if (fetchedResponse && fetchedResponse.results.length === 0) {
          setIsOpened(true);
          setResponse(fetchedResponse);
          setCharacters(fetchedResponse.results);
        } else if (fetchedResponse) {
          setIsOpened(false);
          setResponse(fetchedResponse);
          setCharacters(fetchedResponse.results);
        } else {
          console.log('No response received');
        }
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
      });
  };

  function resetTable() {
    setCharacters(initialResponse.current.results);
    setResponse(initialResponse.current);
    setSearchTerm('');
    setIsOpened(false);
  }

  const fetchPage = (pageNumber = 0) => {
    if (!pageNumber) return;

    setCurrentPage(pageNumber);

    fetcher({
      page: pageNumber,
    })
      .then((fetchedResponse) => {
        if (fetchedResponse) {
          setResponse(fetchedResponse);
          setCharacters(fetchedResponse.results);
        } else {
          console.log('No response received for the provided URL');
        }
      })
      .catch((error) => {
        console.error('Error fetching page:', error);
      });
  };

  return (
    <CharactersContext.Provider
      value={{
        response,
        searchTerm,
        characters,
        setSearchTerm,
        handleSearchChange,
        handleCharacterSearch,
        resetTable,
        isOpened,
        setIsOpened,
        fetchPage,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
