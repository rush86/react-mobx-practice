import {inject, observer} from "mobx-react";
import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import classNames from "classnames";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import NavBarLogo from './img/TestAppLogo.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from "@material-ui/core/Tooltip";
import {DRAWER_WIDTH} from "../../util/Constants";

@inject("stateStore")
@observer
class Navbar extends Component {

  render() {
    const {classes, stateStore} = this.props;
    const {expanded} = stateStore;
    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar)}
        >
          <Toolbar disableGutters={!expanded} className={classes.flex} variant="dense">
            {(
              <React.Fragment>
                <div className={classes.flex}>
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={stateStore.toggleDrawer}
                    className={classNames(classes.menuButton)}
                  >
                    {expanded ? <ArrowBackIcon/> : <MenuIcon/>}
                  </IconButton>
                  <img src={NavBarLogo} className={classes.logo}/>
                </div>
              </React.Fragment>
            )}
            {(
              <React.Fragment>
                <Tooltip
                  title="Logga ut"
                  aria-label="Logga ut">
                  <IconButton className={classes.navBtn} color="inherit"><ExitToAppIcon/></IconButton>
                </Tooltip>
              </React.Fragment>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = theme => ({
  appBar: {
    width: "100vw",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin', 'background-color'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  shiftRight: {
    marginLeft: 36,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  root: {},
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: theme.transitions.create(['padding-right'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  text: {
    margin: 10
  },
  logo: {
    height: '20px',
    cursor: 'pointer'
  },
});


export default withStyles(styles, {withTheme: true})(Navbar);