import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

export default props => {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#009CA3',
      }
    },
  });

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <header>
        <div className={classes.root}>
          <AppBar position="static" color="primary">
            <Toolbar>
            </Toolbar>
          </AppBar>
        </div>
      </header>
    </ThemeProvider>
  );
};