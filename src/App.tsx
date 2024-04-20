import React, { Suspense } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Table from './components/Table/Table';
import Loader from './components/Loader/Loader';
import { CharactersProvider } from './context/CharactersContext';

function App() {
	return (
		<CharactersProvider>
			<Suspense fallback={<Loader />}>
				<SearchBar
				/>
				<Table />
			</Suspense>
		</CharactersProvider>
	);
}

export default App;
