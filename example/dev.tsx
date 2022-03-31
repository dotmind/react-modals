import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../src/';

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleChangeModal = useCallback(() => {
    setModalOpen((prevState) => !prevState);
  }, [setModalOpen]);

  return (
    <div>
      <h1>Test react modal</h1>
      <button onClick={handleChangeModal}>Click me !</button>
      <Modal
        modalOpen={modalOpen}
        onClose={handleChangeModal}
        containerZIndex={99999}
        withShadow
      >
        <h1>This is modal content</h1>
        <p>You can put your html here, have fun !</p>
      </Modal>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
