import React from 'react';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[ 500 ],
      main: blue[ 700 ],
      dark: blue[ 900 ],
    },
    secondary: {
      light: lightBlue[ 500 ],
      main: lightBlue[ 700 ],
      dark: lightBlue[ 900 ],
    },
  },
  typography: {
    useNextVariants: true,
    button:{
      textTransform: 'none',
    }
  }
});

function Theme(Component) {

  function Theme(props) {

    return (
      <MuiThemeProvider theme={ theme }>
        <CssBaseline />
        <Component { ...props } />
      </MuiThemeProvider>
    );

  }

  return Theme;
}

export default Theme;