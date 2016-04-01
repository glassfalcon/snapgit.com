/* eslint-disable max-len */
import React, { PropTypes } from 'react';
import css from './styles.css';

const Signature = props => (
  <div className={[css.dSignature, css[props.author]].join(' ')} />
);

Signature.propTypes = {
  author: PropTypes.string.isRequired,
  fill: PropTypes.string,
};

Signature.defaultProps = {
  fill: '#FFFFFF',
};

export default Signature;
