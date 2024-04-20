export default function SearchBar({
	handleSearchChange,
}: {
	handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === 'Enter') {
			console.log('Enter key pressed');
		}
	}

	return (
		<div
			className='mx-auto flex rounded-3xl p-2 bg-slate text-lightGray w-1/4 items-center justify-between gap-4 mt-10'
			role='search'>
			<input
				type='text'
				className='text-lightGray rounded-2xl w-full pl-3 focus:outline-none'
				placeholder='Search for a character'
				onKeyUp={handleKeyUp}
				aria-label='Search input'
				role='searchbox'
				onChange={handleSearchChange}
			/>
		</div>
	);
}
