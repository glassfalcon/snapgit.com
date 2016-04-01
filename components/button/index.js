/* eslint-disable max-len */
import React, { PropTypes } from 'react';
import css from './styles.css';

const Button = props => (
  <button styles={props.styles} className={css.dButton}>
    {props.children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object,
};

export default Button;
