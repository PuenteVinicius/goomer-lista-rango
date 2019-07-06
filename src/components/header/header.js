import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export default props => {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar />
      </AppBar>
    </div>
  );
};
