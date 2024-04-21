import React, { useContext } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { createPortal } from 'react-dom';
import { CharactersContext } from 'src/context/CharactersContext';
import CloseIcon from 'src/assets/icons/close';
import VisuallyHidden from 'src/components/VisuallyHidden/VisuallyHidden';

const Dialog = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  const { resetTable } = useContext(CharactersContext);

  useEscapeKey(onClose);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.code === 'Escape') {
      resetTable();
      onClose();
    }
  }

  function handleCloseDialog() {
    resetTable();
    onClose();
  }

  const closeBtnRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const currentlyFocusedElem = document.activeElement;

    closeBtnRef.current?.focus();

    return () => {
      (currentlyFocusedElem as HTMLElement)?.focus();
    };
  }, []);

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
          onClick={handleCloseDialog}
          onKeyDown={handleKeyDown}
        />
        <div
          className="relative bg-white rounded-lg p-8 max-w-full"
          role="dialog"
          aria-modal="true"
          aria-label="Dialog"
        >
          <button
            ref={closeBtnRef}
            aria-label="Close dialog"
            className="absolute top-0 right-0 p-4 text-white -translate-y-full cursor-pointer bg-transparent border-none"
            onClick={handleCloseDialog}
          >
            <CloseIcon className="h-6 w-6 text-white" id="closeButton" />
            <VisuallyHidden>Dismiss modal</VisuallyHidden>
          </button>
          {children}
        </div>
      </div>
    </RemoveScroll>,
    // </FocusLock>,
    modalRoot,
  );
};

function useEscapeKey(callback: () => void) {
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
