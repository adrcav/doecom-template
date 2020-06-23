import React, { useState, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import classNames from 'classnames';

import { AuthContext } from '../../services/auth';

import {
  Container,
  Logo,
  Account,
  HeaderWrapper
} from './styles';

import Menu from '../Menu';

const Header = ({ userInfo }) => {
  const history = useHistory();
  const auth = useContext(AuthContext);
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
      url: '/logout',
      exact: true,
      private: true,
    },
  ];

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <Container>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <NavLink to="/" onClick={handleCloseMenu}>
              <Logo src="/logo.png" alt="Doecom" />
            </NavLink>

            <nav>
              <Menu landscape="horizontal" data={menuList} />
              <Account>
                {!auth.isAuthenticated() && (
                  <p>
                    <strong onClick={() => history.push('/login')}>Entrar</strong> ou<br />
                    <strong onClick={() => history.push('/register')}>cadastrar-se</strong>
                  </p>
                )}
                {auth.isAuthenticated() && (
                  <p>
                    Olá,<br />
                    <strong>{userInfo.name.split(' ')[0]}</strong>
                  </p>
                )}
                <img
                  src={userInfo.avatar || '/no-avatar.png'}
                  alt={userInfo.name || 'Sem avatar'}
                  onClick={handleMenuClick}
                />
                <div
                  className={classNames('button-menu-expand', {
                    'rotate': showMenu
                  })}
                  onClick={handleMenuClick}
                >
                  <FaChevronDown />
                </div>
              </Account>
            </nav>
          </div>
        </div>
      </Container>
      <Menu
        landscape="vertical"
        data={menuList}
        show={showMenu}
        onClickVertical={handleCloseMenu}
      />
      <HeaderWrapper
        className={classNames({ 'show': showMenu })}
        onClick={handleCloseMenu}
      />
    </>
  );
};

export default Header;
