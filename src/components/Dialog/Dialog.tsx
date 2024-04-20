import React from 'react';
import Alert from '../../assets/icons/alert';
import Button from '../Button/Button';
import CloseIcon from '../../assets/icons/close';

export default function Dialog({
	children,
	onClose,
}: {
	children: React.ReactNode;
	onClose: () => void;
}) {
	return (
		<div
			className='relative z-50'
			aria-labelledby='modal-title'
			role='dialog'
			aria-modal='true'>
			<div
				className='fixed inset-0 bg-black bg-opacity-75 transition-opacity overflow-hidden pointer-events-none'
				onClick={onClose}></div>

			<div className='fixed inset-0 z-50 overflow-y-auto'>
				<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
					<div className='relative transform overflow-hidden rounded-lg bg-slate text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
						{/* Close button */}
						<div className='absolute top-0 right-0 pt-4 pr-4'>
							<Button
								onClick={onClose}
								icon={CloseIcon}
								ariaLabel='Close dialog'
							/>
						</div>
						<div className='bg-slate px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
							<div className='sm:flex sm:items-start'>
								<div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary-500 sm:mx-0 sm:h-10 sm:w-10'>
									<Alert className='h-6 w-6 text-white' aria-hidden='true' />
								</div>
								<div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
									<h3
										className='text-lg font-heading leading-6 text-white'
										id='modal-title'>
										Oops!
									</h3>
									<p className='text-sm text-lightGray'>{children}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
