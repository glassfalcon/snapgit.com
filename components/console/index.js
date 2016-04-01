/* eslint-disable max-len */
import React, { Component, PropTypes } from 'react';
import Icon from 'react-fontawesome';
import Button from '../button';
import css from './styles.css';

class Console extends Component {
  static propTypes = {
    lines: PropTypes.array,
  }

  state = {
    hasCopied: false,
  }

  copy() {
    const selection = getSelection();
    selection.removeAllRanges();

    const range = document.createRange();
    range.selectNodeContents(this.refs.content);
    selection.addRange(range);

    document.execCommand('copy');
    selection.removeAllRanges();

    this.refs.content.blur();
    this.setState({ hasCopied: true });

    window.setTimeout(this.setState.bind(this, { hasCopied: false }), 1500);
  }

  render() {
    const { hasCopied } = this.state;

    return (
      <div className={css.dConsole}>
        <div className={css.content} ref="content">
          {this.props.lines.map((line, index) => (
            <div key={index} className={css.dConsoleLine}>{line}</div>
          ))}
        </div>
        <Button className={css.copy} onClick={::this.copy}>
          <Icon name={hasCopied ? 'check' : 'copy'} className={css.icon} />
          {hasCopied ? 'Copied to clipboard' : 'Copy'}
        </Button>
      </div>
    );
  }
}

Console.propTypes = {
  lines: PropTypes.array,
};

export default Console;
