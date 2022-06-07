import React, {
  useCallback,
  useEffect,
  useRef,
  ReactNode,
  useMemo,
  ReactElement,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import './styles.scss';

export type Props = {
  modalOpen: boolean;
  withShadow?: boolean;
  containerClassName?: string;
  contentClassName?: string;
  closeButtonClassName?: string;
  closeButtonElement?: ReactElement | string;
  containerZIndex?: number;
  closeOnClickOutside?: boolean;
  showCloseButton?: boolean;
  children: ReactNode;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({
  modalOpen,
  withShadow,
  containerClassName,
  contentClassName,
  closeButtonClassName,
  closeButtonElement,
  containerZIndex = 9999999,
  closeOnClickOutside = true,
  showCloseButton = true,
  onClose,
  children,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isBrowser, setIsBrowser] = useState<boolean>(false);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalOpen && closeOnClickOutside) {
        onClose();
      }
    },
    [onClose, modalOpen, closeOnClickOutside],
  );

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const { target } = e;

      if (
        ref
        && ref.current
        && !ref.current?.contains(target as Node)
        && modalOpen
        && closeOnClickOutside
      ) {
        onClose();
      }
    },
    [ref, onClose, modalOpen, closeOnClickOutside],
  );

  const renderCloseButton = useMemo(() => {
    if (!showCloseButton) {
      return null;
    }
    
    return (
      <button
        onClick={onClose}
        className={`react-modal-close ${closeButtonElement ? '' : 'default'} ${
          closeButtonClassName || ''
        }`}
      >
        {closeButtonElement}
      </button>
    );
  }, [showCloseButton, closeButtonElement, closeButtonClassName, onClose]);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (isBrowser) {
      document.addEventListener('keydown', onKeyDown, false);
      document.addEventListener('mousedown', handleClickOutside, false);

      return () => {
        document.removeEventListener('keydown', onKeyDown, false);
        document.removeEventListener('mousedown', handleClickOutside, false);
      };
    }

    return;
  }, [onKeyDown, handleClickOutside, isBrowser]);

  const renderModal = useMemo(() => {
    if (isBrowser && modalOpen) {
      return createPortal(
        <div
          className={`react-modal-container ${
            containerClassName || ''
          }`}
          style={{ zIndex: containerZIndex }}
        >
          <div
            ref={ref}
            className={`react-modal-content ${withShadow ? 'with-shadow' : ''} ${
              contentClassName || ''
            }`}
          >
            {renderCloseButton}
            {children}
          </div>
        </div>,
        document.body,
      );
    }

    return null;
  }, [
    contentClassName,
    renderCloseButton,
    modalOpen,
    children,
    withShadow,
    containerZIndex,
    containerClassName,
    isBrowser,
  ]);

  return renderModal;
};

export default Modal;
