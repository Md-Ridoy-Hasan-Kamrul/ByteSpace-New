import { useCallback, useState } from 'react';

export const useHomeMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen((open) => !open);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, handleToggle, handleClose };
};
