type ButtonProps = {
	onClick: () => void;
	icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
	ariaLabel?: string;
};

export default function Button({
	onClick,
	icon: Icon,
	ariaLabel,
}: ButtonProps) {
	return (
		<button
			onClick={onClick}
			className='text-white bg-transparent hover:bg-secondary-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
			aria-label={ariaLabel}
			aria-pressed='false'>
			{Icon && <Icon className='h-6 w-6' />}
		</button>
	);
}
