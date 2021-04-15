import * as React from 'react'
import { ReactElement, useState, useMemo, useCallback } from 'react';
import './styles.scss'

export type Props = {
  children: ReactElement | string | null;
  overlay: boolean,
  overlayStyle: React.CSSProperties,
  containerStyle: React.CSSProperties,
  contentStyle: React.CSSProperties,
  closeButtonStyle: React.CSSProperties,
  closeButtonElement: ReactElement | string,
  closeButton: boolean,
  clickOutside: boolean,
  open: boolean,
};

const Modale = ({
  children,
  overlay,
  overlayStyle,
  containerStyle,
  contentStyle,
  closeButtonStyle,
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
      <button className='modale__closeButton' style={closeButtonStyle} onClick={() => show(false)}>
        {closeButtonElement || "X"}
      </button>
    );
  }, [opened]);

  const renderOverlay = useMemo(() => {
    return (
      <div className='modale__overlay' style={overlayStyle} onClick={handleClickOutside} role='button'></div>
    );
  }, [opened]);

  const renderModale = useMemo(() => {
    return (
      <div className='modale__overlayContainer'>
        {overlay && renderOverlay}
        <div className='modale__container' style={containerStyle}>
          {closeButton && renderCloseButton}
          <div className='modale__content' style={contentStyle}>
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

export default Modale