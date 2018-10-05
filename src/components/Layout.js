import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import BlogDashboard from './BlogDashboard';
import FooterBar from './FooterBar';

import '../css/typography.css';

const drawerWidth = 240;

const styles = theme => ({

  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed

  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: `rebeccapurple`,
    marginBottom: `1.45rem`,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    margin: `0 auto`,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
});


export default class Template extends React.Component {

  state = {
    open: true,
  };

  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    const { location } = this.props;

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


