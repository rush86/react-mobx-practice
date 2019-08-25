import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from "@material-ui/core/es/Paper";
import UnderConstructionImage from './image/UnderConstruction.png';

class UnderConstruction extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.paper}>
        <img src={UnderConstructionImage} className={classes.logo}/>
      </Paper>
    )
  }
}

const styles = theme => ({
  paper: {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    height: '100%',
    width: '100%'
  },
  logo: {
    cursor: 'pointer',
    alignItems: 'center',
  },
});
export default withStyles(styles)(UnderConstruction);