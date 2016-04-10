import React, { PropTypes } from 'react';
import classnames from 'classnames';
import css from './styles.css';

import felix from './felix.svg';
import david from './david.svg';
import patrick from './patrick.svg';

const signatures = {
  felix,
  david,
  patrick,
};

const Signature = props => (
  <div
    className={classnames(css.dSignature, css[props.author])}
    style={{ backgroundImage: `url(${signatures[props.author]})` }}
  />
);

Signature.propTypes = {
  author: PropTypes.string.isRequired,
  fill: PropTypes.string,
};

Signature.defaultProps = {
  fill: '#FFFFFF',
};

export default Signature;
