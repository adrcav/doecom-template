import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import BackButton from '../../components/BackButton';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';
import Title from '../../components/Title';

export const Login = () => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    history.push('/');
  };

  return (
    <div className="container">
      <BackButton />

      <Title value="Login" />

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <Input
                label="E-mail:"
                type="email"
                name="email"
                icon="FaRegEnvelope"
                className="form-control"
                placeholder="Informe o seu e-mail"
                required={true}
              />
            </div>

            <div className="form-group">
              <Input
                label="Senha:"
                type="password"
                name="password"
                icon="FaLock"
                className="form-control"
                placeholder="Informe sua senha"
                required={true}
              />
            </div>

            <FormButton
              type="submit"
              theme="primary"
              value="Entrar"
            />
          </form>

          <p style={{
            fontSize: '.9rem',
            color: '#666666',
            textAlign: 'center',
            marginTop: '15px'
          }}>
            Ainda não tem uma conta?
            <NavLink to="/register" style={{ fontWeight: 500, marginLeft: '3px' }}>Cadastre-se!</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
