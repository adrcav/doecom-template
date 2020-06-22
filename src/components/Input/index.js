import React from 'react';
import * as FontAwesome from 'react-icons/fa';
import classNames from 'classnames';

import { Wrapper, Container } from './styles';
import Label from '../Label';

const Input = (props) => {
  let Icon;

  if (props.icon) {
    Icon = FontAwesome[props.icon] || FontAwesome['FaAddressCard'];
  }

  return (
    <div className="d-flex flex-column-reverse">
      <Wrapper className={classNames({
        'has-icon': props.icon
      })}>
        <Container {...props} />
        {props.icon && (
          <div className="icon">
            <Icon />
          </div>
        )}
      </Wrapper>
      {props.label && (
        <Label value={props.label} />
      )}
    </div>
  );
};

export default Input;
