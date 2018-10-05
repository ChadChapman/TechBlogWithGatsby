import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import DashboardAppBar from './DrawerAppBar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CssBaseline from '@material-ui/core/CssBaseline';
import BlogPostList from './BlogPostList';
import GatsbyLink from 'gatsby-link';
import { graphql } from 'gatsby';

import Link from '../components/Link';


import '../css/typography.css';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
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
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
});


export default class Template extends React.Component {

  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    const { location } = this.props;

    const isRoot = location.pathname === '/';

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
        {/*<DashboardAppBar/>*/}
        <CssBaseline />
        <BlogPostList {...props} />


        {/*<div*/}
          {/*style={{*/}
            {/*background: `rebeccapurple`,*/}
            {/*marginBottom: `1.45rem`,*/}
          {/*}}*/}
        {/*>*/}
          {/*<div*/}
            {/*style={{*/}
              {/*margin: `0 auto`,*/}
              {/*maxWidth: 960,*/}
              {/*padding: isRoot ? `1.45rem 1.0875rem` : `1rem 0.75rem`,*/}
            {/*}}*/}
          {/*>*/}
            {/*<h1 style={{ margin: 0, fontSize: isRoot ? `2.5rem` : `2rem` }}>*/}
              {/*<Link*/}
                {/*to="/"*/}
                {/*style={{*/}
                  {/*color: 'white',*/}
                  {/*textDecoration: 'none',*/}
                {/*}}*/}
              {/*>*/}
                {/*Interesting Musings*/}
              {/*</Link>*/}
            {/*</h1>*/}
          {/*</div>*/}
        {/*</div>*/}
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

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                    }
                }
            }
        }
    }
`;
