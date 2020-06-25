import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

import { Container } from './styles';

const Footer = () => (
  <div className="container">
    <hr />
    <Container>
      <p>&copy; {moment().format('YYYY')} Doecom</p>
      <ul>
        <li>
          <NavLink to="/privacy-policy">
            <p>Política de Privacidade</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/terms-of-use">
            <p>Termos de Uso</p>
          </NavLink>
        </li>
      </ul>
    </Container>
  </div>
);

export default Footer;
