/* eslint-disable max-len */
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import css from './styles.css';

const Button = props => {
  const { children, className, ...rest } = props;

  return (
    <button
      className={classnames(css.dButton, className)}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
