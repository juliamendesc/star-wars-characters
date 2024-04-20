import { useEffect, useState } from 'react';

export default function useCharactersList() {
	const [characters, setCharacters] = useState<Array<object> | null>(null);

	useEffect(() => {
		async function fetchCharacters() {
			await fetch(`${process.env.REACT_APP_API_URL}/people/`)
				.then((res) => res.json())
				.then((data) => setCharacters(data.results))
				.catch((err) => console.error(err));
		}

		fetchCharacters();
	}, []);

	return characters;
}
