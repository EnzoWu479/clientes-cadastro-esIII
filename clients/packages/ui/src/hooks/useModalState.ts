import { useState } from 'react';

export const useModalState = (initialValue: boolean | string | number) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const open = setIsOpen;

  const close = () => setIsOpen(false);

  return { isOpen: !!isOpen, open, value: isOpen, close };
};
