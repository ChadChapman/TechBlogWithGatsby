import React from 'react';
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


export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Personal Page" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="LinkedIn" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Laptop />
      </ListItemIcon>
      <ListItemText primary="Github" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>
    <ListItem button>
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
    <ListItem button>
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