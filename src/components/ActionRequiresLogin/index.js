import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { FaTimes } from 'react-icons/fa';

import {
  Container,
  Modal,
  ModalHeader,
  ModalBody
} from './styles';

import Button from '../Button';

const ActionRequiresLogin = ({ show = false, onClose = null }) => {
  const history = useHistory();

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Container className={classNames({ 'show': show })} onClick={onClose}>
      <Modal className={classNames({ 'show': show })} onClick={handleModalClick}>
        <ModalHeader>
          <h2>Entre com uma conta</h2>
          <FaTimes style={{ fontSize: '1rem', cursor: 'pointer' }} onClick={onClose} />
        </ModalHeader>
        <ModalBody>
          <p>É necessário estar logado com uma conta da Doecom para realizar esta operação. Para continuar, escolha uma das opções abaixo:</p>

          <div className="d-flex justify-content-center" style={{ width: '100%', marginTop: '15px' }}>
            <NavLink
              to={{
                pathname: '/login',
                state: { redirectUrl: history.location.pathname }
              }}
              style={{ marginRight: '10px' }}
            >
              <Button theme="primary-outline" icon="FaSignInAlt" value="Entrar" />
            </NavLink>
            <NavLink to="/register">
              <Button theme="primary" icon="FaUserPlus" value="Cadastrar-se" />
            </NavLink>
          </div>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default ActionRequiresLogin;
