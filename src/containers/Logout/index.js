import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../services/auth';

import BackButton from '../../components/BackButton';
import NotificationIcon from '../../components/NotificationIcon';
import Title from '../../components/Title';
import FormButton from '../../components/FormButton';

const Logout = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (!auth.isAuthenticated()) {
      history.push('/');
    }
  });

  const handleLogout = () => {
    auth.logout();
    // history.push('/');
    window.location.href = '/';
  };

  return (
    <div className="container mb-4">
      <BackButton />

      <div className="row justify-content-center">
        <div className="col-lg-6 col-xl-5">
          <NotificationIcon theme="danger" icon="FaSignOutAlt" />
          <Title value="Sair da conta" align="center" />

          <p style={{
            color: '#666666',
            textAlign: 'center',
            marginBottom: '40px',
            padding: '0 15px'
          }}>
            Tem certeza que deseja sair da sua conta na plataforma?
          </p>

          <FormButton
            type="button"
            theme="danger"
            value="Sim, desejo sair"
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};

export default Logout;
