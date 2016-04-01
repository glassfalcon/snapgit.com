import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';
import { TypographyStyle, GoogleFont } from 'components/typography';

export default class Site extends Component {
  static propTypes = {
    title: PropTypes.string,
    body: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.node,
    ]),
  }

  render() {
    let title = DocumentTitle.rewind();

    if (this.props.title) {
      title = this.props.title;
    }

    let cssLink;
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={prefixLink('/styles.css')} />;
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=1.0"
          />
          <title>{title}</title>
          <link rel="shortcut icon" href={prefixLink('/favicon.ico')} />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
          <GoogleFont />
          <TypographyStyle />
          {cssLink}
        </head>
        <body>
          <div id="react-mount"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          <script src={prefixLink('/bundle.js')} />
        </body>
      </html>
    );
  }
}
