import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

import RestaurantState from "./restaurantState"

export default props => {
  return (
    <div className="card-wrapper">
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
    </div>
  );
};
