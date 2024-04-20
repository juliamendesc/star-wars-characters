/*
 ** For reference: https://www.joshwcomeau.com/snippets/react-components/visually-hidden/
 */

import React from 'react';

const VisuallyHidden: React.FC<{ children: React.ReactNode }> = ({
	children,
	...delegated
}) => {
	const [forceShow, setForceShow] = React.useState(false);

	React.useEffect(() => {
		if (process.env.NODE_ENV !== 'production') {
			const handleKeyDown = (ev: KeyboardEvent) => {
				if (ev.key === 'Alt') {
					setForceShow(true);
				}
			};
			const handleKeyUp = (ev: KeyboardEvent) => {
				if (ev.key === 'Alt') {
					setForceShow(false);
				}
			};
			window.addEventListener('keydown', handleKeyDown);
			window.addEventListener('keyup', handleKeyUp);
			return () => {
				window.removeEventListener('keydown', handleKeyDown);
				window.removeEventListener('keyup', handleKeyUp);
			};
		}
	}, []);

	return (
		<span
			className={`inline-block absolute overflow-hidden clip-[rect(0_0_0_0)] h-px w-px m-[-1px] p-0 border-0 ${
				forceShow ? '' : 'hidden'
			}`}
			{...delegated}>
			{children}
		</span>
	);
};
export default VisuallyHidden;
