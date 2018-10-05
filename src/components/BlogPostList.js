import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import Link from 'gatsby-link';

import CssBaseline from '@material-ui/core/CssBaseline';

import '../css/typography.css';

const drawerWidth = 240;

export default class BlogPostList extends React.Component {

   static propTypes = {
    children: PropTypes.func,
  };

  render() {
    const { location } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}
