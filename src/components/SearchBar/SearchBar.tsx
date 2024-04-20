import React from 'react';
import SearchIcon from '../../assets/icons/search';
import Button from '../Button/Button';
import useCharactersList from '../../hooks/useCharactersList';

export default function SearchBar() {
	const { handleSearchKeyUp, handleSearchClick, handleSearchChange } = useCharactersList();

	return (
		<div
			className='mx-auto flex rounded-3xl p-2 bg-slate text-lightGray w-1/4 items-center justify-between gap-4 mt-10'
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
