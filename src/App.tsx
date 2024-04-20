import React, { Suspense } from 'react';
import SearchBar from 'src/components/SearchBar/SearchBar';
import Table from 'src/components/Table/Table';
import Loader from 'src/components/Loader/Loader';
import { CharactersProvider } from 'src/context/CharactersContext';
import ResetButton from 'src/components/Button/ResetButton';
import StarWarsLogo from './assets/icons/star-wars-logo';

function App() {
	return (
		<CharactersProvider>
			<ResetButton />
			<div className='absolute top-0 right-0 w-56 h-56'>
				<StarWarsLogo  />
			</div>
			<Suspense fallback={<Loader />}>
				<SearchBar />
				<Table />
			</Suspense>
		</CharactersProvider>
	);
}

export default App;
