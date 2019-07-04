import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Sale from "./sale";
import helpers from "../helpers";

const useStyles = makeStyles(theme => ({
  card: {
    display: "inline-block",
    width: 386,
    maxWidth: "100%",
    height: 115,
    marginBottom: 24,
    marginRight: 15,
    position: "relative"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    display: "flex",
    flex: "1 0 auto",
    padding: 0,
    paddingBottom: "0 !important",
    alignItems: "center"
  },
  cover: {
    width: 115,
    height: 115
  },
  text: {
    width: "100%",
    maxWidth: "calc(100% - 115px)",
    marginLeft: 15
  },
  subText: {
    width: "65%"
  },
  price: {
    textDecoration: "line-through",
    marginLeft: 7
  }
}));

export default props => {
  const classes = useStyles();
  const sales = props.value.meal.sales || [];
  let price = props.value.meal.price;

  let renderSales = () => {
    if (sales.length === 0) {
      return (
        <Box>
          <Typography component="p" variant="subtitle1" color="primary">R$ 
            {price ? helpers.formatMoney(price): "0,00"}
          </Typography>
        </Box>
      );
    } else {
      return sales.map(sale => (
        <Box>
          {helpers.isOnTimeInterval(sale.hours) ? (
            <Typography component="p" variant="subtitle1" color="primary">
              R$ {sale.price ? helpers.formatMoney(sale.price): "0,00"}
              <Sale />
              <Typography component="span" variant="caption" color="secondary" className={classes.price}>
                R$ {price ? helpers.formatMoney(price): "0,00"}
              </Typography>
            </Typography>
          ) : (
            <Typography component="p" variant="subtitle1" color="primary">
              R$ {props.value.meal.price ? helpers.formatMoney(props.value.meal.price): "0,00"}
            </Typography>
          )}
        </Box>
      ));
    }
  }

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <CardMedia className={classes.cover} image={props.value.meal.image} />
        <Box className={classes.text}>
          <Typography
            component="h3"
            variant="subtitle1"
            className={classes.subText}
          >
            {props.value.meal.name}
          </Typography>
          <Typography component="p" variant="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          {renderSales()}
        </Box>
      </CardContent>
    </Card>
  );
};
