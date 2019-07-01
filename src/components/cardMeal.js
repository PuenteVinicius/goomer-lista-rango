import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    display: "inline-block",
    width: 386,
    maxWidth: "100%",
    height: 115,
    marginBottom: 24,
    marginRight: 15,
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    display: "flex",
    flex: "1 0 auto",
    padding: 0,
    paddingBottom:"0 !important",
    alignItems: "center"
  },
  cover: {
    width: 115,
    height: 115
  },
  text: {
    width: "100%",
    maxWidth: "calc(100% - 115px)",
  }
}));

export default props => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <CardMedia className={classes.cover} image={props.value.meal.image} />
        <Typography className={classes.text} component="h3" variant="h6">
          {props.value.meal.name}
        </Typography>
      </CardContent>
    </Card>
  );
};
