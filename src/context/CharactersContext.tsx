import React, { createContext, useContext, useState, useEffect } from 'react';
import { API_Response, CharactersContextProps } from '../types/types';
import { resetResponse } from '../types/constants';
import { fetcher } from '../helpers/fetcher';

// Create the context with a default value
export const CharactersContext = createContext<CharactersContextProps>({
	response: resetResponse,
	isLoading: false,
	searchTerm: '',
	characters: [],
	setSearchTerm: () => {},
	handleSearchChange: () => {},
	handleCharacterSearch: () => {},
	resetTable: () => {},
});

// Export the useCharactersContext hook
export const useCharactersContext = () => useContext(CharactersContext);

export const CharactersProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [response, setResponse] = useState<API_Response>(resetResponse);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [characters, setCharacters] = useState<API_Response['results']>([]);

	useEffect(() => {
		setIsLoading(true);
		fetcher()
			.then((results) => {
				if (results === undefined) return;
				setResponse(results);
				setCharacters(results.results);
				setIsLoading(false);
			})
			.catch((error) => {
				setIsLoading(false);
			});
	}, []);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const handleCharacterSearch = () => {
		setIsLoading(true);
		fetcher(1, searchTerm)
			.then((fetchedResponse) => {
				if (fetchedResponse) {
					setResponse(fetchedResponse);
					setCharacters(fetchedResponse.results);
				} else {
					console.log('No response received');
				}
				setIsLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching characters:', error);
				setIsLoading(false);
			});
	};

	function resetTable() {
		setCharacters([]);
		setResponse(resetResponse);
	}

	return (
		<CharactersContext.Provider
			value={{
				response,
				isLoading,
				searchTerm,
				characters,
				setSearchTerm,
				handleSearchChange,
				handleCharacterSearch,
				resetTable,
			}}>
			{children}
		</CharactersContext.Provider>
	);
};
