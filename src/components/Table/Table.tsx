import React, { Suspense, useContext } from 'react';
import Dialog from '../Dialog/Dialog';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import AlertIcon from '../../assets/icons/alert';
import { CharactersContext } from '../../context/CharactersContext';

export default function Table() {
	const { isLoading, handleSearchChange, response, characters } =
		useContext(CharactersContext);

	function handleCloseDialog() {
		handleSearchChange({
			target: { value: '' },
		} as React.ChangeEvent<HTMLInputElement>);
	}

	return (
		<>
			{!response.count && !isLoading && (
				<Dialog onClose={handleCloseDialog}>
					<div className='flex items-center justify-center gap-7'>
						<AlertIcon className='h-10 w-10 text-yellow-500' />
						<p className='text-center text-black'>
							No characters with that name
						</p>
					</div>
				</Dialog>
			)}
			<div className='flex justify-center gap-7 my-10 mx-10  w-screen'>
				<table className='table-auto w-full'>
					<thead className='text-left text-green-500'>
						<tr>
							<th>Name</th>
							<th>Birth Year</th>
							<th>Gender</th>
							<th>Height</th>
							<th>Mass</th>
							<th>Skin color</th>
							<th>Eye color</th>
							<th>Hair color</th>
						</tr>
					</thead>

					<tbody>
						<Suspense fallback={<Loader />}>
							{characters?.map((character) => (
								<tr key={character.name} className='hover:bg-slate-600'>
									<td>{character.name || 'Not informed'}</td>
									<td>{character.birth_year || 'Not informed'}</td>
									<td>{character.gender || 'Not informed'}</td>
									<td>{character.height || 'Not informed'}</td>
									<td>{character.mass || 'Not informed'}</td>
									<td>{character.skin_color || 'Not informed'}</td>
									<td>{character.eye_color || 'Not informed'}</td>
									<td>{character.hair_color || 'Not informed'}</td>
								</tr>
							))}
						</Suspense>
					</tbody>
				</table>
			</div>
			<footer>
				<Pagination {...response} />
			</footer>
		</>
	);
}
