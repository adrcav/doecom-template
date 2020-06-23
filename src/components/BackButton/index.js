import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';

const BackButton = ({ value = 'Voltar', url = null }) => {
  const history = useHistory();

  const handleRedirect = () => url ? history.push(url) : history.goBack();

  return (
    <div className="d-flex justify-content-start">
      <div
        className="d-flex align-items-center"
        style={{ cursor: 'pointer', marginBottom: '20px' }}
        onClick={handleRedirect}
      >
        <FaArrowCircleLeft style={{ marginRight: '5px' }} />
        <p style={{ margin: 0, fontWeight: '500' }}>{value}</p>
      </div>
    </div>
  );
};

export default BackButton;
