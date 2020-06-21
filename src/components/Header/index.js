import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import classNames from 'classnames';

import {
  Container,
  Logo,
  Account,
  HeaderWrapper
} from './styles';

import Menu from '../Menu';

const Header = ({ userInfo }) => {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const menuList = [
    {
      title: 'Causas voluntárias',
      icon: 'FaBuilding',
      url: '/',
      exact: true,
    },
    {
      title: 'Configurações',
      icon: 'FaUser',
      url: '/account',
      exact: true,
      private: true,
    },
    {
      title: 'Sair da conta',
      icon: 'FaSignOutAlt',
      url: '/account/logout',
      exact: true,
      private: true,
    },
  ];

  return (
    <>
      <Container>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <NavLink to="/">
              <Logo src="/logo.png" alt="Doecom" />
            </NavLink>

            <nav>
              <Menu landscape="horizontal" data={menuList} />
              <Account>
                <p>
                  <strong onClick={() => history.push('/login')}>Entrar</strong> ou<br />
                  <strong onClick={() => history.push('/register')}>cadastrar-se</strong>
                </p>
                <img src="/no-avatar.png" alt="Sem avatar" />
                <div
                  className={classNames('button-menu-expand', {
                    'rotate': showMenu
                  })}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <FaChevronDown />
                </div>
              </Account>
            </nav>
          </div>
        </div>
      </Container>
      <Menu landscape="vertical" data={menuList} show={showMenu} />
      <HeaderWrapper
        className={classNames({ 'show': showMenu })}
        onClick={() => setShowMenu(false)}
      />
    </>
  );
};

export default Header;
