import React, {
  useCallback,
  useEffect,
  useRef,
  ReactNode,
  useMemo,
  ReactElement,
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
  onClose,
  children,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && modalOpen) {
      onClose();
    }
  }, [onClose, modalOpen]);

  const handleClickOutside = useCallback((e) => {
    const { target } = e;

    if (ref.current && !ref.current?.contains(target) && modalOpen) {
      onClose();
    }
  }, [ref, onClose, modalOpen]);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('mousedown', handleClickOutside, false);
    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
      document.removeEventListener('mousedown', handleClickOutside, false);
    };
  }, [onKeyDown, handleClickOutside]);

  const renderModal = useMemo(() => {
    if (!modalOpen || typeof window === 'undefined') {
      return null;
    }

    return createPortal(
      <div
        className={`react-modal-container ${containerClassName ? containerClassName : ''}`}
        style={{ zIndex: containerZIndex }}
      >
        <div
          ref={ref}
          className={`react-modal-content ${withShadow ? 'with-shadow' : ''} ${contentClassName ? contentClassName : ''}`}
        >
          <button
            onClick={onClose}
            className={`react-modal-close ${closeButtonElement ? '' : 'default'} ${closeButtonClassName ? closeButtonClassName : ''}`}
          >
            {closeButtonElement}
          </button>
          {children}
        </div>
      </div>,
      document.body
    );
  }, [modalOpen, children, withShadow, onclose, containerZIndex]);

  return renderModal;
};

export default Modal;
