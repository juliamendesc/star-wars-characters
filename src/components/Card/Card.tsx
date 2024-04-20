type Props = {
	character: {
		name: string;
		url: string;
	};
};

export default function Card({ character }: Props) {
	return (
		<div className='rounded-xl overflow-hidden shadow-md bg-slate text-white ml-5 border-success-500 border-2 hover:border-color-5-500'>
			<div className='p-4'>
				<div className='font-heading text-xl mb-2'>{character.name}</div>
				<p className='text-base'>Free</p>
			</div>
			<div className='px-4 pt-4 pb-2'>
				<span className='inline-block bg-gray-900 rounded-full py-1 text-sm font-semibold mr-2 mb-2'>
					#starwars
				</span>
				{/* Add more tags if needed */}
			</div>
			<div className='absolute bottom-0 right-0 p-4'>
				<svg
					className='fill-current text-white h-6 w-6'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'>
					{/* Heart icon SVG path */}
				</svg>
			</div>
		</div>
	);
}
