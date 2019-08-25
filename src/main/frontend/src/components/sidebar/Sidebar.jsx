import React, {Component} from 'react';
import {Drawer, List, withStyles} from "@material-ui/core";

import {
  Dashboard as DashboardIcon,
  Home as AddressIcon,
} from '@material-ui/icons';

import SidebarLink from "../../components/sidebar/sidebarlink/SidebarLink.jsx";
import classNames from 'classnames';
import {inject, observer} from "mobx-react";
import {DRAWER_WIDTH} from "../../util/Constants";

@inject("stateStore")
@observer
class Sidebar extends Component {

  render() {
    const {classes, stateStore} = this.props;
    const {expanded} = stateStore;

    const structure = [
      {id: 0, label: 'Dashboard', link: '/dashboard', icon: <DashboardIcon/>},
      {id: 1, label: 'Home', link: '/address', icon: <AddressIcon/>},
    ];

    return (
      <React.Fragment>
        <Drawer variant="permanent" color="default" className={classNames(classes.drawer, {
          [classes.drawerOpen]: expanded,
          [classes.drawerClose]: !expanded,
        })}
                classes={{
                  paper: classNames({
                    [classes.drawerOpen]: expanded,
                    [classes.drawerClose]: !expanded,
                  })
                }}
                open={expanded}>
          <List className={classes.sidebarList}>
            {structure.map(link => <SidebarLink key={link.id} location={location}
                                                isSidebarOpened={expanded} {...link} />)}
          </List>
        </Drawer>
      </React.Fragment>
    )
  }
}

const styles = theme => ({
      subheadingDiv: {
        width: '100%'
      },
      sidebarList: {
        marginTop: theme.spacing(6),
      },
      list: {
        backgroundColor: theme.palette.background.paper,
      },
      expanderIcon: {
        margin: 0,
        position: 'absolute',
        top: '50%',
        left: DRAWER_WIDTH - 70,
        '-ms-transform': 'translateY(-50%)',
        transform: 'translateY(-50%)',
      },
      flexEndDiv: {
        display: "flex",
        justifyContent: "flex-end"
      },
      root: {
        margin: 10
      },
      button: {
        margin: 4
      },
      drawer: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: DRAWER_WIDTH,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
      },
    }
  )
;
export default withStyles(styles)(Sidebar);