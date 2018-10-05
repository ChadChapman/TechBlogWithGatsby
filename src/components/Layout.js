import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import BlogDashboard from './BlogDashboard';
import FooterBar from './FooterBar';

import '../css/typography.css';


export default class Template extends React.Component {

  state = {
    open: true,
  };

  static propTypes = {
    children: PropTypes.func,
  };

  render() {

    return (
      <React.Fragment>
        <Helmet
          title="Chad Chapman Interesting Technology Musings"
          meta={[
            { name: 'description', content: 'Technology Blog' },
            { name: 'keywords', content: 'Software, Technology, Chad, Chapman,' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <CssBaseline />
        <BlogDashboard location={this.props} />
        <FooterBar />

      </React.Fragment>
    );
  }
}


