import { useEffect, useRef } from 'react';

const ESCAPE_KEY = 'Escape';

// Calls onDismiss when the user presses outside the returned ref's element or hits Escape,
// but only while isOpen, so closed menus add no document listeners.
export const useDismissable = (isOpen, onDismiss) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onDismiss();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === ESCAPE_KEY) {
        onDismiss();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onDismiss]);

  return ref;
};
