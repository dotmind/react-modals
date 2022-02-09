import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Modal from './index';

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <div>
      <h1>Test react modal</h1>
      <button onClick={handleOpenModal}>Click me !</button>
      <Modal
        modalOpen={modalOpen}
        onClose={handleCloseModal}
        withShadow
      >
        <h1>This is modal content</h1>
        <p>You can put your html here, have fun !</p>
      </Modal>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
