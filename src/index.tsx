import * as React from 'react'
import { ReactElement, useState, useMemo, useCallback } from 'react';
import './styles.scss'

export type Props = {
  children: ReactElement | string | null;
  overlay?: boolean,
  overlayStyle?: React.CSSProperties,
  containerStyle?: React.CSSProperties,
  contentStyle?: React.CSSProperties,
  closeButtonStyle?: React.CSSProperties,
  overlayClassName?: string,
  containerClassName?: string,
  contentClassName?: string,
  closeButtonClassName?: string,
  closeButtonElement?: ReactElement | string,
  closeButton?: boolean,
  clickOutside?: boolean,
  open: boolean,
};

const Modale = ({
  children,
  overlay,
  overlayStyle,
  containerStyle,
  contentStyle,
  closeButtonStyle,
  overlayClassName,
  containerClassName,
  contentClassName,
  closeButtonClassName,
  closeButtonElement,
  closeButton,
  clickOutside,
  open
}: Props): ReactElement<'div'> | null => {
  const [opened, show] = useState(open);

  const handleClickOutside = useCallback(() => {
    if (clickOutside) {
      show(false);
    }
  }, []);

  const renderCloseButton = useMemo(() => {
    return (
      <button className={`modale__closeButton ${closeButtonClassName}`} style={closeButtonStyle} onClick={() => show(false)}>
        {closeButtonElement}
      </button>
    );
  }, [opened]);

  const renderOverlay = useMemo(() => {
    return (
      <div className={`modale__overlay ${overlayClassName}`} style={overlayStyle} onClick={handleClickOutside} role='button'></div>
    );
  }, [opened]);

  const renderModale = useMemo(() => {
    return (
      <div className='modale__overlayContainer'>
        {overlay && renderOverlay}
        <div className={`modale__container ${containerClassName}`} style={containerStyle}>
          {closeButton && renderCloseButton}
          <div className={`modale__content ${contentClassName}`} style={contentStyle}>
            {children}
          </div>
        </div>
      </div>
    );
  }, [opened]);

  return (
    <>
      {opened && renderModale}
    </>
  );

}

Modale.defaultProps = {
  overlay: true,
  overlayStyle: null,
  containerStyle: null,
  contentStyle: null,
  closeButtonStyle: null,
  overlayClassName: '',
  containerClassName: '',
  contentClassName: '',
  closeButtonClassName: '',
  closeButtonElement: 'x',
  closeButton: true,
  clickOutside: true,
};

export default Modale