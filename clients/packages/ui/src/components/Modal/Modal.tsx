import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { BlackBackground, ChidrenContainer } from './_modal';

export interface ModalProps {
  isOpen: boolean;
  close: () => void;
  onClose?: () => void;
}
export const Modal = ({
  isOpen,
  close,
  onClose,
  children
}: PropsWithChildren<ModalProps>) => {
  const modalRoot = document.getElementById('modal-root');

  const handleClose = () => {
    if (onClose) onClose();
    close();
  };
  if (!modalRoot) {
    return null;
  }
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <BlackBackground onClick={handleClose} />
          </motion.div>

          <motion.div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              zIndex: 100
            }}
            initial={{ opacity: 0, transform: 'scale(0.6)' }}
            animate={{ opacity: 1, transform: 'scale(1)' }}
            exit={{ opacity: 0, transform: 'scale(1.2)' }}
            transition={{ duration: 0.2 }}
          >
            <ChidrenContainer>{children}</ChidrenContainer>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    modalRoot
  );
};
export default Modal;
