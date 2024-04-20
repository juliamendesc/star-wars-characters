import React, { useContext } from 'react';
import { CharactersContext } from 'src/context/CharactersContext';
import Button from 'src/components/Button/Button';
import SearchIcon from 'src/assets/icons/search';

export default function SearchBar() {
	const { searchTerm, handleSearchChange, handleCharacterSearch } =
		useContext(CharactersContext);

	function handleSearchKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === 'Enter') {
			handleCharacterSearch();
		}
	}

	function handleSearchClick() {
		handleCharacterSearch();
	}

	return (
		<div
			className='mx-auto flex rounded-3xl p-2 bg-slate text-lightGray items-center justify-between gap-4 mt-10 w-1/3 h-fit'
			role='search'>
			<input
				type='text'
				className='text-lightGray rounded-2xl w-full pl-3 focus:outline-none'
				placeholder='Search for a character'
				onKeyUp={handleSearchKeyUp}
				aria-label='Search input'
				role='searchbox'
				onChange={handleSearchChange}
				value={searchTerm}
			/>
			<Button type='submit' icon={SearchIcon} onClick={handleSearchClick} ariaLabel='Search button' />
		</div>
	);
}
