import React, { Component, PropTypes } from 'react';
import css from '../css/template.css';


export default class Template extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div className={css.wrapper}>
        {this.props.children}
        <div className={css.copyright}>
          {new Date().getFullYear()}
        </div>
      </div>
    );
  }
}
