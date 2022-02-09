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
  onClose,
  children,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClasses = useCallback((classes: string[]) => (
    classes.filter((x) => !!x).join(' ')
  ), []);

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
    if (!modalOpen) {
      return null;
    }

    return createPortal(
      <div
        className={handleClasses([
          'react-modal-container',
          containerClassName || '',
        ])}
      >
        <div
          ref={ref}
          className={handleClasses([
            'react-modal-content',
            withShadow ? 'with-shadow' : '',
            contentClassName || '',
          ])}
        >
          <button
            onClick={onClose}
            className={handleClasses([
              'react-modal-close',
              closeButtonElement ? '' : 'default',
              closeButtonClassName || '',
            ])}
          >
            {closeButtonElement}
          </button>
          {children}
        </div>
      </div>,
      document.body,
    );
  }, [modalOpen, children, withShadow, onclose, handleClasses]);

  return renderModal;
};

export default Modal;
