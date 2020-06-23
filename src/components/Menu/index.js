import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import * as FontAwesome from 'react-icons/fa';
import classNames from 'classnames';

import { AuthContext } from '../../services/auth';

import { Container } from './styles';
import Button from '../Button';

const Menu = ({ data, landscape, show = false, onClickVertical }) => {
  const auth = useContext(AuthContext);

  return (
    <Container className={classNames(landscape, {
      'show': landscape === 'vertical' && show,
    })}>
      {data.map(menu => {
        const privateMenu = menu.private || false;
        let Icon = FontAwesome[menu.icon] || FontAwesome['FaExternalLinkAlt'];

        return (
          <li key={menu.url} style={{ display: (privateMenu && !auth.isAuthenticated() ? 'none' : '') }}>
            <NavLink
              className="menu-item"
              activeClassName="active"
              to={menu.url}
              exact={menu.exact || false}
              onClick={onClickVertical || null}
            >
              <div className="icon">
                <Icon />
              </div>
              <p>{menu.title}</p>
            </NavLink>
          </li>
        );
      })}
      {landscape === 'vertical' && !auth.isAuthenticated() && (
        <li key="mobile-buttons">
          <div className="menu-item" style={{ width: '100%' }}>
            <div className="d-flex justify-content-center" style={{ width: '100%' }}>
              <NavLink to="/login" style={{ marginRight: '10px' }} onClick={onClickVertical || null}>
                <Button theme="primary-outline" icon="FaSignInAlt" value="Entrar" />
              </NavLink>
              <NavLink to="/register" onClick={onClickVertical || null}>
                <Button theme="primary" icon="FaUserPlus" value="Cadastrar-se" />
              </NavLink>
            </div>
          </div>
        </li>
      )}
    </Container>
  );
};

export default Menu;
