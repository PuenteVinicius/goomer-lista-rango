import React from "react";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import {NON_HOURS, DAYS_OF_WEEK} from "../../constants";

export default props => {
  const hours = props.value.restaurant.hours || [];

  let renderRestaurantHours = () => {
    return hours.map(hour => (
      <Typography key={hour.from} variant="caption" component="p">
        {hour.days.length > 1
          ? `${DAYS_OF_WEEK[hour.days[0]]} à ${
            DAYS_OF_WEEK[hour.days[hour.days.length - 1]]
            }`
          : `${DAYS_OF_WEEK[hour.days[0]]}`}
        <Typography
          variant="caption"
          component="span"
          className="restaurant-header__subtitle"
        >
          {hour.from} às {hour.to}
        </Typography>
      </Typography>
    ));
  }

  let renderNonHours = () => {
    return (
      <Typography 
        variant="caption" 
        component="p"
      >
        Aberto todos os dias em todos os horários
      </Typography>
    )
  }

  return (
    <Card className="restaurant-header">
      <CardMedia
        className="restaurant-header__media"
        image={props.value.restaurant.image}
      />
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          children={props.value.restaurant.name}
        />
        <Typography
          variant="subtitle1"
          component="p"
          children={props.value.restaurant.address}
        />
        {(hours.length === NON_HOURS) ? renderNonHours(): renderRestaurantHours()}
      </CardContent>
    </Card>
  );
};
