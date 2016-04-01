import React, { PropTypes } from 'react';
import Title from 'react-document-title';
import { config } from 'config';

const DocumentTitle = props => (
  <Title title={`${config.siteTitle} | ${props.title}`}>
    {props.children}
  </Title>
);

DocumentTitle.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default DocumentTitle;
