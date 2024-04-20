import React from 'react';
import CloseIcon from '../../assets/icons/close';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import { createPortal } from 'react-dom';

const Dialog = ({
	children,
	onClose,
}: {
	children: React.ReactNode;
	onClose: () => void;
}) => {
	useEscapeKey(onClose);

	const modalRoot = document.querySelector('#modal-root');
  if (!modalRoot) {
    console.error('Modal root element not found');
    return null; // or handle this case appropriately
  }

  return createPortal(
    // <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className="fixed inset-0 grid place-content-center  p-4">
          <div
            className="absolute inset-0 bg-black bg-opacity-75"
            onClick={onClose}
          />
          <div
            className="relative bg-white rounded-lg p-8 max-w-full"
            role="dialog"
            aria-modal="true"
            aria-label="Dialog"
          >
            <button
              className="absolute top-0 right-0 p-4 text-white -translate-y-full cursor-pointer bg-transparent border-none"
              onClick={onClose}
            >
							<CloseIcon className='h-6 w-6 text-white' />
              <VisuallyHidden>
                Dismiss modal
              </VisuallyHidden>
            </button>
            {children}
          </div>
        </div>
      </RemoveScroll>,
    // </FocusLock>,
    modalRoot
  );
}

function useEscapeKey(callback: ()=>void) {
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === 'Escape') {
        callback();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
}

export default Dialog;
