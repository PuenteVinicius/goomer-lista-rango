import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import SaleIcon from "../saleIcon/saleIcon"

import { formatMoney, isOnTimeInterval } from "../../helpers";
import { NON_HOURS, NON_MONEY } from "../../constants";

const useStyles = makeStyles(theme => ({
  price: {
    textDecoration: "line-through",
    marginLeft: 7
  },
}));

export default props =>  {
  const classes = useStyles();
  const meal = props.value.meal;
  const sales = props.value.meal.sales || [];
  
  if (sales.length === NON_HOURS) {
    return (
      <Box>
        <Typography 
          component="p" 
          variant="subtitle1" 
          color="primary"
        >
          {meal.price ? formatMoney(meal.price) : NON_MONEY}
        </Typography>
      </Box>
    );
  } else {
    return sales.map(sale => (
      <Box key={sale.description}>
        {isOnTimeInterval(sale.hours) ? 
        (
          <Typography 
            component="p" 
            variant="subtitle1" 
            color="primary"
          >
            {sale.price ? formatMoney(sale.price) : NON_MONEY}
            <SaleIcon value={sale} />
            <Typography
              component="span"
              variant="caption"
              color="secondary"
              className={classes.price}
            >
              {meal.price ? formatMoney(meal.price) : NON_MONEY}
            </Typography>
          </Typography>
        ) : (
          <Typography 
            component="p" 
            variant="subtitle1" 
            color="primary">
            {meal.price ? formatMoney(meal.price): NON_MONEY}
          </Typography>
        )}
      </Box>
    ));
  }
}