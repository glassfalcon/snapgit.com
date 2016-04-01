import React, { Component } from 'react';
import Icon from 'react-fontawesome';

import {
  Button,
  Console,
  DocumentTitle,
  Logo,
  Signature,
} from 'components';

import css from '../css/index.css';

export default class Index extends Component {
  authors = [
    {
      name: 'Felix Krause',
      signature: 'felix',
      social: {
        github: 'https://github.com/krausefx',
        twitter: 'https://twitter.com/krausefx',
      },
    }, {
      name: 'Patrick Camacho',
      signature: 'patrick',
      social: {
        github: 'https://github.com/camacho',
        twitter: 'https://twitter.com/icofyre',
      },
    }, {
      name: 'David Fisher',
      signature: 'david',
      social: {
        twitter: 'https://twitter.com/fsha',
      },
    },
  ];

  renderAuthor(author) {
    return (
      <div
        className={css.author}
        key={author.name}
      >
        <Signature
          author={author.signature}
          fill="#9392cd"
        />
        <div className="links">
          {Object.keys(author.social).map((type) => (
            <a
              href={author.social[type]}
              className={css.link}
              key={type}
            >
              <Icon name={type} />
            </a>
          ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <DocumentTitle title="The most powerful way to share your commits">
        <div className={css.home}>
          <Logo />
          <h2 className={css.headline}>
            No more lonely commits
          </h2>
          <h5 className={css.subheadline}>
            The most powerful way to share your commits
          </h5>

          <Console
            lines={[
              'sudo gem install snapgit',
              'snapgit init',
            ]}
          />
          <p className={css.summary}>
            Snapgit snaps a selfie everytime you make a commit and
            sets it as your profile picture for Twitter and Gravatar
          </p>
          <div className={css.fork}>
            <a href="https://github.com/snapgit/snapgit">
              <Button>
                <Icon name="github" />
                Fork on GitHub
              </Button>
            </a>
          </div>
          <div className={css.authors}>
            {this.authors.map(::this.renderAuthor)}
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
