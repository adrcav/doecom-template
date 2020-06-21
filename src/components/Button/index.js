import React from 'react';
import * as FontAwesome from 'react-icons/fa';
import classNames from 'classnames';

import { Container } from './styles';

const Button = ({ type = 'button', theme = 'primary', icon = null, value }) => {
  const Icon = FontAwesome[icon] || FontAwesome['FaExternalLinkSquareAlt'];

  return (
    <Container type={type} className={classNames('btn', theme)}>
      {icon && (
        <div className="icon">
          <Icon />
        </div>
      )}
      <p>{value}</p>
    </Container>
  );
};

export default Button;
