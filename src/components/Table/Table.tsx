import React from 'react';
import useCharactersList from '../../hooks/useCharactersList';
import Dialog from '../Dialog/Dialog';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import AlertIcon from '../../assets/icons/alert';

export default function Table() {
	const { isLoading, response, handleSearchChange, characters } =
		useCharactersList();

	function handleCloseDialog() {
		handleSearchChange({
			target: { value: '' },
		} as React.ChangeEvent<HTMLInputElement>);
	}

	// console.log('response', response);
	// console.log('characters', characters);

	return (
		<div>
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
			{!!isLoading ? (
				<Loader />
			) : (
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
						</tbody>
					</table>
				</div>
			)}
			<Pagination {...response} />
		</div>
	);
}
