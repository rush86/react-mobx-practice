import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {MemoryRouter as Router} from 'react-router';
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Routes from "./Routes.jsx";


class StartPage extends React.Component {

  getRoutePage = () => {
    const {classes} = this.props;
      return (
        <div className={classes.root}>
          <Navbar/>
          <Sidebar/>
          <Routes/>
        </div>
      )
  };

  render() {
    return (
      <Router>{this.getRoutePage()}</Router>
    )
  };
}

const styles = {
  root: {
    display: 'flex'
  }
};

export default withStyles(styles)(StartPage)