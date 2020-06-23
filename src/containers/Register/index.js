import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../services/auth';

import BackButton from '../../components/BackButton';
import Input from '../../components/Input';
import Select from '../../components/Select';
import FormButton from '../../components/FormButton';
import Title from '../../components/Title';
import RegisterTerms from './terms';

import { states as dataStates } from '../../util/data';

export const Register = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [agreedTerms, setAgreedTerms] = useState(false);

  const states = dataStates.map(state => {
    return {
      value: state.uf,
      text: state.name
    };
  });

  useEffect(() => {
    if (auth.isAuthenticated()) {
      history.push('/');
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    history.push('/register/success');
  };

  const agreeTerms = () => {
    setAgreedTerms(true);
  };

  if (!agreedTerms) return <RegisterTerms onClick={agreeTerms} />;

  return (
    <div className="container mb-4">
      <BackButton />

      <Title value="Vamos lá!" />

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <Input
                label="Nome: *"
                type="text"
                name="name"
                className="form-control"
                placeholder="Informe o seu nome e sobrenome"
                required={true}
              />
            </div>

            <div className="form-group">
              <Input
                label="E-mail: *"
                type="email"
                name="email"
                className="form-control"
                placeholder="Informe o seu e-mail"
                required={true}
              />
            </div>

            <div className="row">
              <div className="col-5">
                <div className="form-group">
                  <Select
                    label="Estado: *"
                    name="state"
                    className="form-control"
                    placeholderValue="UF"
                    options={states}
                    required={true}
                  />
                </div>
              </div>
              <div className="col-7">
                <div className="form-group">
                  <Input
                    label="Cidade: *"
                    type="text"
                    name="city"
                    className="form-control"
                    placeholder="Sua cidade"
                    required={true}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <Input
                label="Senha: *"
                type="password"
                name="password"
                className="form-control"
                placeholder="Informe sua senha"
                required={true}
              />
            </div>

            <FormButton
              type="submit"
              theme="primary"
              value="Continuar"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
