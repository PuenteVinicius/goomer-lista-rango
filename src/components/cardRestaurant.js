import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

import RestaurantState from "./restaurantState"
import { Link } from "react-router-dom";

export default props => {
  return (
    <div className="card-wrapper">
      <Link to={`/restaurant/${props.value.card.id}`}>
        <Card className="card">
          <CardHeader
            titleTypographyProps={{variant:'subtitle1' }}
            className="card__text"
            title={props.value.card.name}
            subheader={props.value.card.address}
          />
          <CardMedia
            className="card__media"
            image={props.value.card.image}
          />
        </Card>
        <RestaurantState />
      </Link>
    </div>
  );
};
