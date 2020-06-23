import React from 'react';
import { useHistory } from 'react-router-dom';

import BackButton from '../BackButton';
import NotificationIcon from '../NotificationIcon';
import Title from '../Title';
import FormButton from '../FormButton';

const RegisterSuccess = () => {
  const history = useHistory();

  return (
    <div className="container" style={{ marginBottom: '20px' }}>
      <BackButton value="Ir para página principal" url="/" />

      <Title value="Parabéns!" align="center" />

      <div className="row justify-content-center mt-3">
        <div className="col-lg-6 col-xl-5">
          <NotificationIcon theme="secondary" icon="FaUserCheck" />

          <p style={{
            color: '#666666',
            textAlign: 'center',
            marginBottom: '40px',
            padding: '0 15px'
          }}>
            Seu cadastro foi efetuado com sucesso! Agora você já pode usufruir de todas as funcionalidades da plataforma Doecom.
          </p>

          <FormButton
            type="button"
            theme="primary"
            value="Entrar na sua conta"
            onClick={() => history.push('/login')}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterSuccess;
