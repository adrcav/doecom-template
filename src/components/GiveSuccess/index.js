import React from 'react';
import { useHistory } from 'react-router-dom';

import BackButton from '../BackButton';
import NotificationIcon from '../NotificationIcon';
import Title from '../Title';
import FormButton from '../FormButton';

const GiveSuccess = () => {
  const history = useHistory();

  return (
    <div className="container" style={{ marginBottom: '20px' }}>
      <BackButton value="Ir para página principal" url="/" />

      <div className="row justify-content-center mt-3">
        <div className="col-lg-6 col-xl-5">
          <NotificationIcon theme="secondary" icon="FaHandHoldingHeart" />

          <Title value="Doação realizada! 👏" align="center" />
          <p style={{
            color: '#666666',
            textAlign: 'center',
            marginBottom: '40px',
            padding: '0 15px'
          }}>
            O pagamento foi confirmado com sucesso e sua doação será enviada diretamente à causa voluntária selecionada.
          </p>

          <FormButton
            type="button"
            theme="primary"
            value="Voltar à página principal"
            onClick={() => history.push('/')}
          />
        </div>
      </div>
    </div>
  );
};

export default GiveSuccess;
