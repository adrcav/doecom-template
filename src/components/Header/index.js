import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

import { Container, Logo, Account } from './styles';

const Header = ({ userInfo }) => {
  const history = useHistory();

  return (
    <Container>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <NavLink to="/">
            <Logo src="/logo.png" alt="Doecom" />
          </NavLink>
          <Account>
            <p>
              <strong onClick={() => history.push('/login')}>Entrar</strong> ou<br />
              <strong onClick={() => history.push('/register')}>cadastrar-se</strong>
            </p>
            <img src="/no-avatar.png" alt="Sem avatar" />
            <div className="button-menu-expand">
              <FaChevronDown />
            </div>
          </Account>
        </div>
      </div>
    </Container>
  );
};

export default Header;
