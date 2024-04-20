import { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import SearchBar from './components/SearchBar/SearchBar';
import useSearchTerm from './hooks/useSearchTerm';
import useCharactersList from './hooks/useCharactersList';
import Dialog from './components/Dialog/Dialog';

function App() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { handleSearchChange, searchTerm } = useSearchTerm();
	const characters = useCharactersList();

	const filteredCharactersList = characters?.filter((character: any) =>
		character.name.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	useEffect(() => {
		if (filteredCharactersList?.length === 0) {
			setIsOpen(true);
		}
	}, [filteredCharactersList]);

	function handleCloseDialog() {
		setIsOpen(false);
		handleSearchChange({
			target: { value: '' },
		} as React.ChangeEvent<HTMLInputElement>);
	}

	return (
		<div>
			<SearchBar handleSearchChange={handleSearchChange} />

			<div className='grid grid-cols-5 gap-7 my-10 mx-5'>
				{filteredCharactersList?.length === 0
					? !!isOpen && (
							<Dialog onClose={handleCloseDialog}>No characters found</Dialog>
					  )
					: filteredCharactersList?.map((character: any) => (
							<Card key={character.name} character={character} />
					  ))}
			</div>
		</div>
	);
}

export default App;
