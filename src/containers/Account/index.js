import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthContext } from '../../services/auth';

import BackButton from '../../components/BackButton';
import Input from '../../components/Input';
import Select from '../../components/Select';
import FormButton from '../../components/FormButton';
import Title from '../../components/Title';

import { states as dataStates } from '../../util/data';

export const Register = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const states = dataStates.map(state => {
    return {
      value: state.uf,
      text: state.name
    };
  });

  useEffect(() => {
    if (!auth.isAuthenticated()) {
      history.push('/');
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    toast.success('Os dados da sua conta foram alterados com sucesso!');
  };

  return (
    <div className="container mb-4">
      <BackButton />

      <Title value="Configurações" />
      <p style={{
        textAlign: 'right',
        color: '#999',
        fontStyle: 'italic',
        fontSize: '.9rem',
        margin: '-10px 0 10px'
      }}>(*) Campo obrigatório</p>

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
                value="Ricardo da Doecom"
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
                value="ricardo@doecom.netlify.app"
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
                    value="PE"
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
                    value="Petrolina"
                    required={true}
                  />
                </div>
              </div>
            </div>

            <FormButton
              type="submit"
              theme="primary"
              value="Alterar dados"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
