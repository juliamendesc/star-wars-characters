import React from 'react';

type ButtonProps = {
	onClick: () => void;
	icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
	ariaLabel?: string;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	children?: React.ReactNode;
};

export default function Button({
	onClick,
	icon: Icon,
	ariaLabel,
	type = 'button',
	children,
}: ButtonProps) {
	return (
		<button
			type={type}
			onClick={onClick}
			className='text-white bg-transparent focus:outline-none'
			aria-label={ariaLabel}
			aria-pressed='false'>
			{Icon && <Icon className='h-6 w-6' />}
			{children && children}
		</button>
	);
}
