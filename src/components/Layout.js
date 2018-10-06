import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import BlogDashboard from './BlogDashboard';
import FooterBar from './FooterBar';

import '../css/typography.css';
const tabIcon =  '../../public/icons/smiley.png'


export default class Template extends React.Component {

  state = {
    open: true,
  };

  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    const tabIcon =  '../../public/icons/smiley.png'
    return (
      <React.Fragment>
        <Helmet
          title="Just Another Chad"
          meta={[
            { name: 'description', content: 'Technology Blog' },
            { name: 'keywords', content: 'Software, Technology, Chad, Chapman,' },
          ]}
        >
          <html lang="en" />

        </Helmet>
        <CssBaseline />
        <BlogDashboard location={this.props} />
        {/*<FooterBar />*/}

      </React.Fragment>
    );
  }
}


