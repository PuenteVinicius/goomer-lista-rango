import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Meal from './meal'

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "calc(100% - 400px)"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    paddingBottom: 0,
    fontWeight: "bolder",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  item: {
    border: "none",
    boxShadow: "none",
    paddingBottom: 0
  },
  itemContent: {
    paddingBottom: 0,
    borderBottom: "solid 1px",
    boxShadow: "none"
  },
  cardWraper: {
    display: "block",
    padding:0, 
    paddingTop: 24
  }
}));

export default props => {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  var groups = [];
  var menu = {};

  let mapGroups = () =>  {
    props.menu.forEach(meal => {

      if (groups.indexOf(meal.group) === -1) {
        groups.push(meal.group);
        menu[meal.group] = meal.group;
        menu[meal.group] = [];
      }
    });
  }

  let mapMeals = () => {
    props.menu.forEach(meal => {
      menu[meal.group].push(meal);
    });
  }

  let renderMeals = meals => {
    return meals.map(meal => (
      <Meal value={{meal}}></Meal>
    ));
  }

  let renderGroups = () => {
    return Object.keys(menu).map(group => (
      <ExpansionPanel key={group} className={classes.item} 
      expanded={expanded === group}onChange={handleChange(group)}
      >
        <ExpansionPanelSummary className={classes.itemContent} expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{group}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.cardWraper}>
          {renderMeals(menu[group])}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ));
  }

  mapGroups();
  mapMeals();

  return <div className={classes.root}>{renderGroups()}</div>;
};
