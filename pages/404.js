import React, { Component } from 'react';
import Icon from 'react-fontawesome';

import {
  Button,
  DocumentTitle,
} from 'components';

import css from '../css/404.css';

export default class Missing extends Component {
  render() {
    return (
      <DocumentTitle title="Not Found">
        <div className={css.notFound}>
          <h1>Page not found!</h1>
          <a href="/" title="Back Home">
            <Button>
              <Icon style={{ marginRight: '10px' }} name="home" />
              Back home
            </Button>
          </a>
        </div>
      </DocumentTitle>
    );
  }
}
