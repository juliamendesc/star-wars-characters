import React, { useContext } from 'react';
import SearchIcon from '../../assets/icons/search';
import Button from '../Button/Button';
import { CharactersContext } from '../../context/CharactersContext';

export default function SearchBar() {
	const { handleSearchChange, handleCharacterSearch } = useContext(CharactersContext);;


	function handleSearchKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === 'Enter') {
			handleCharacterSearch()
		}
	}

	function handleSearchClick() {
		handleCharacterSearch()
	}

	return (
		<div
			className='mx-auto flex rounded-3xl p-2 bg-slate text-lightGray items-center justify-between gap-4 mt-10 w-1/3'
			role='search'>
			<input
				type='text'
				className='text-lightGray rounded-2xl w-full pl-3 focus:outline-none'
				placeholder='Search for a character'
				onKeyUp={handleSearchKeyUp}
				aria-label='Search input'
				role='searchbox'
				onChange={handleSearchChange}
			/>
			<Button type='submit' icon={SearchIcon} onClick={handleSearchClick} />
		</div>
	);
}
