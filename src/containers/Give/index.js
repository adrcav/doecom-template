import React from 'react';
import { useHistory } from 'react-router-dom';
import * as FontAwesome from 'react-icons/fa';

import { SafeAlert } from './styles';

import BackButton from '../../components/BackButton';
import CauseInfo from '../../components/CauseInfo';
import Input from '../../components/Input';
import Label from '../../components/Label';
import FormButton from '../../components/FormButton';
import FormRadioCard from '../../components/FormRadioCard';
import Title from '../../components/Title';

import { causes as dataCauses } from '../../util/data';

const Give = ({ match }) => {
  const { id } = match.params;
  const history = useHistory();

  const cause = dataCauses.filter(cause => cause._id === id)[0] || null;
  const paymentMethods = [
    {
      text: 'Boleto',
      value: 'boleto',
      icon: 'FaBarcode',
    },
    {
      text: 'Cartão de crédito',
      value: 'credit_card',
      icon: 'FaRegCreditCard',
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('> form', event.target);

    history.push('/give/success');
  };

  return (
    <div className="container" style={{ marginBottom: '20px' }}>
      <BackButton />

      <Title value="Doação" />

      <CauseInfo data={cause} />

      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <Input
                label="Valor:"
                type="tel"
                name="value"
                icon="FaDollarSign"
                className="form-control"
                placeholder="Informe o valor"
                required={true}
              />
            </div>

            <div className="row">
              <div className="col-12">
                <Label value="Método de pagamento:" />
              </div>
              {paymentMethods.map(method => (
                <div key={method.value} className="col-6">
                  <FormRadioCard
                    name="paymentMethod"
                    text={method.text}
                    value={method.value}
                    icon={method.icon}
                    required={true}
                  />
                </div>
              ))}
            </div>

            <hr/>

            <SafeAlert>
              <p>Ao continuar, você será redirecionado(a) à tela de pagamento do <strong>PagSeguro</strong> para finalizar o pagamento.</p>
            </SafeAlert>

            <SafeAlert style={{ marginTop: '10px', marginBottom: '15px' }}>
              <div className="icon">
                <FontAwesome.FaLock />
              </div>
              <p><strong>Não se preocupe! Este é um ambiente totalmente seguro.</strong></p>
            </SafeAlert>

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

export default Give;
