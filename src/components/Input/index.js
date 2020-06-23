import React from 'react';
import * as FontAwesome from 'react-icons/fa';
import classNames from 'classnames';

import { InputGroup, Container } from './styles';
import Label from '../Label';

const Input = (props) => {
  let Icon;

  if (props.icon) {
    Icon = FontAwesome[props.icon] || FontAwesome['FaAddressCard'];
  }

  return (
    <div className="d-flex flex-column-reverse">
      <InputGroup className={classNames({
        'has-icon': props.icon
      })}>
        <Container {...props} />
        {props.icon && (
          <div className="icon">
            <Icon />
          </div>
        )}
      </InputGroup>
      {props.label && (
        <Label value={props.label} />
      )}
    </div>
  );
};

export default Input;
