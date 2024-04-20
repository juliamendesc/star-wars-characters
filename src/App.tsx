import React, { Suspense } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Table from './components/Table/Table';
import Loader from './components/Loader/Loader';

function App() {

	return (
		<Suspense fallback={<Loader />}>
			<SearchBar />

			<Table />
		</Suspense>
	);
}

export default App;
