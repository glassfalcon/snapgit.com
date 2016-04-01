/* eslint-disable max-len */
import React, { PropTypes } from 'react';
import ReactZeroClipboard from 'react-zeroclipboard';
import Icon from 'react-fontawesome';
import css from './styles.css';

const Console = props => (
  <div className={css.dConsole}>
    <div className="content">
      {props.lines.map((line, index) => (
        <div key={index} className={css.dConsoleLine}>{line}</div>
      ))}
    </div>
    <ReactZeroClipboard text={props.lines.join('\n')}>
      <button className={css.copy}>
        <Icon name="copy" className={css.icon} />
        copy
      </button>
    </ReactZeroClipboard>
  </div>
);

Console.propTypes = {
  lines: PropTypes.array,
};

export default Console;
