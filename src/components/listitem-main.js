import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Archive from '@material-ui/icons/Archive';
import Laptop from '@material-ui/icons/Laptop';
import Public from '@material-ui/icons/Public';
import GroupAdd from '@material-ui/icons/GroupAdd';

// list all the resources linked by the buttons below, examples incld.
// const linkArchives = () => <Link to='/archives'/>;
// const MyLink = props => <Link to="/open-collective" {...props} />
const linkCodeTacoma = 'https://www.meetup.com/Code-Tacoma/';
const linkGithub = 'https://github.com/ChadChapman';
const linkLinkedIn = 'https://www.linkedin.com/in/chadtchapman/';
const linkCodeCrab = 'http://www.codecrab.me/';
const linkPortfolio = 'http://www.chadtchapman.me/';



export const mainListItems = (
  <div>

    <ListItem
      button
      component='a'
      href={linkPortfolio}
      aria-label="My portfolio page"
    >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Personal Page" />
    </ListItem>

    <ListItem
      button
      component='a'
      href={linkLinkedIn}
      aria-label="My LinkedIn profile"
    >
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="LinkedIn" />
    </ListItem>

    <ListItem
      button
      component='a'
      href={linkGithub}
      aria-label="My Github profile"
    >
      <ListItemIcon>
        <Laptop />
      </ListItemIcon>
      <ListItemText primary="Github" />
    </ListItem>

    <ListItem
      button
      component='a'
      href={linkPortfolio}
      aria-label="My personal portfolio"
    >
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>

    <ListItem
      button
      component='a'
      href={linkCodeCrab}
      aria-label="My old blog entires"
    >
      <ListItemIcon>
        <Archive />
      </ListItemIcon>
      <ListItemText primary="Blog Archives" />
    </ListItem>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>More Stuff</ListSubheader>

    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Contact Me" />
    </ListItem>

    <ListItem
      button
      component='a'
      href={linkCodeTacoma}
      aria-label="Code Tacoma Meetup group"
    >
      <ListItemIcon>
        <GroupAdd />
      </ListItemIcon>
      <ListItemText primary="Code Tacoma" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <Public />
      </ListItemIcon>
      <ListItemText primary="Volunteering" />
    </ListItem>
  </div>
);