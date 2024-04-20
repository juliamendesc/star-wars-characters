import React, { Suspense } from 'react';
import SearchBar from 'src/components/SearchBar/SearchBar';
import Table from 'src/components/Table/Table';
import Loader from 'src/components/Loader/Loader';
import { CharactersProvider } from 'src/context/CharactersContext';
import ResetButton from 'src/components/Button/ResetButton';

function App() {
	return (
		<CharactersProvider>
			<ResetButton />
			<Suspense fallback={<Loader />}>
				<SearchBar />
				<Table />
			</Suspense>
		</CharactersProvider>
	);
}

export default App;
