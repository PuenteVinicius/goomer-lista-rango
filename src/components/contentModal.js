import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';

import { PRODUCT_IMAGE } from "../constants";
import { formatMoney } from "../helpers";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 553,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: 0,
    outline: "none"
  },
  cover: {
    width: "100%",
    height: 196,
    marginBottom: 45
  },
  textContent: {
    display: "flex",
    marginBottom: 45
  },
  buttonContent: {
    display: "flex",
    flexDirection: "row",
    textTransform: 'capitalize',
  },
  text: {
    textTransform: 'capitalize',
  },
  button: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    maxWidth: 265,
    marginBottom: 20
  },
  buttonContentPrice: {
    display: "flex",
    flexDirection: "row",
    height: 45,
    width: "100%",
    maxWidth: 125,
    alignItems: "center",
    justifyContent: "center",
    border: "1px rgba(0, 0, 0, 0.12) solid",
    padding: 0
  },
  buttonPrice: {
    height: 45,
    padding: 0,
    margin: 0
  }
}));

export default React.forwardRef((props, ref) => {
  const meal = props.value.meal;
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();

  return (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.content}>
        <CardContent className={classes.content}>
          <CardMedia className={classes.cover} image={PRODUCT_IMAGE} />
          <Typography
            component="h3"
            variant="subtitle1"
            className={classes.subText}
          >
            {meal.name}
          </Typography>
          <Box className={classes.textContent}>
            <Typography component="p" variant="caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Typography>
            <Typography
              component="p"
              variant="h4"
              color="primary"
              className={classes.price}
            >
              {formatMoney(meal.price)}
            </Typography>
          </Box>
          <Divider />
        </CardContent>
        <Container className={classes.buttonContent} >
          <Container className={classes.buttonContentPrice} >
              <Button color="primary" className={classes.buttonPrice}>              
                <Typography className={classes.text} component="span" variant="h3">-</Typography>
              </Button>
              <Typography color="primary"  className={classes.text} component="span" variant="h6">1</Typography>
              <Button color="primary" className={classes.buttonPrice}>              
                <Typography className={classes.text} component="span" variant="h3">+</Typography>
              </Button>
          </Container>
          <Button className={classes.button}
            variant="contained"
            color="primary"
          >
            <Typography className={classes.text} component="p" variant="h6">
              Adicionar
            </Typography>
            <Typography component="p" variant="h6">
            {formatMoney(meal.price)}
            </Typography>
          </Button>
        </Container>
      </div>
    </div>
  );
});
