import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';

const BackButton = ({ value }) => {
  const history = useHistory();

  return (
    <div className="d-flex justify-content-start">
      <div
        className="d-flex align-items-center"
        style={{ cursor: 'pointer', marginBottom: '20px' }}
        onClick={() => history.goBack()}
      >
        <FaArrowCircleLeft style={{ marginRight: '5px' }} />
        <p style={{ margin: 0, fontWeight: '500' }}>Voltar</p>
      </div>
    </div>
  );
};

export default BackButton;
