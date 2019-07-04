import React from "react";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import helpers from "../helpers"

export default props => {
  
  const hours = props.value.restaurant.hours || [];
  const daysOfWeek = helpers.getDaysOfWeek();

  let renderRestaurantDays = () => {
    return hours.map(elem => (
      <Typography key={elem.from} variant="caption" component="p">
        {elem.days.length > 1
          ? `${daysOfWeek[elem.days[0]]} à ${
              daysOfWeek[elem.days[elem.days.length - 1]]
            }`
          : `${daysOfWeek[elem.days[0]]}`}
        <Typography
          variant="caption"
          component="span"
          className="restaurant-header__subtitle"
        >
          {elem.from} às {elem.to}
        </Typography>
      </Typography>
    ));
  }

  let renderNonDays = () => {
    return (
      <Typography variant="caption" component="p">
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
        {(hours.length === 0) ? renderNonDays(): renderRestaurantDays()}
      </CardContent>
    </Card>
  );
};
