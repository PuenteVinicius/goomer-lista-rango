import React from "react";
import { Link } from "react-router-dom";

import RestaurantState from "./restaurantState";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export default props => {
  const hours = props.value.card.hours;

  return (
    <div className="card-wrapper">
      <Link to={`/restaurant/${props.value.card.id}`}>
        <Card className="card">
          <CardHeader
            titleTypographyProps={{ variant: "subtitle1" }}
            className="card__text"
            title={props.value.card.name}
            subheader={
              <Typography 
                component="p" 
                variant="caption">
                {props.value.card.address}
              </Typography>
            }
          />
          <CardMedia 
            className="card__media" 
            image={props.value.card.image} 
          />
        </Card>
        <RestaurantState value={{ hours }} />
      </Link>
    </div>
  );
};
