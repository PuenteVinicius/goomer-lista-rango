import React from "react";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default props => {
  return (
    <Card className="restaurant-header">
      <CardMedia
        className="restaurant-header__media"
        image={props.value.card.image}
      />
      <CardContent>
        <Typography variant="h5" component="h2" children={props.value.card.name}></Typography>
        <Typography variant="subtitle1" component="p" children={props.value.card.address}></Typography>
        <Typography variant="caption" component="p" children={props.value.card.address}>Segunda à Sexta: <Typography variant="caption" component="span" className="restaurant-header__subtitle"  >11:30 às 15:00</Typography></Typography>
        <Typography variant="caption" component="p" children={props.value.card.address}>Sábados: <Typography variant="caption" component="span" className="restaurant-header__subtitle"  >11:30 às 22:00</Typography></Typography>
        <Typography variant="caption" component="p" children={props.value.card.address}>Domingos e Feriados: <Typography variant="caption" component="span" className="restaurant-header__subtitle"  >11:30 às 15:00</Typography></Typography>
      </CardContent>
    </Card>
  );
};
