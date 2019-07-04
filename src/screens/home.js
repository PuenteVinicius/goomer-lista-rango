import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import SearchRestaurant from "../containers/search-restaurants/searchRestaurants";
import Restaurants from "../containers/restaurants/restaurants";

export default props => {
  const useStyles = makeStyles(theme => ({
    title: {
      marginTop: 32,
      marginBottom: 32,
      fontSize: 24
    },
    boxSearch: {
      marginBottom: 46,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      flexWrap: "wrap",
      alignItems: "center"
    }
  }));

  const classes = useStyles();

  return (
    <Container fixed>
      <Box className={classes.boxSearch}>
        <Typography variant="h5" className={classes.title}>
          Bem-vindo ao Lista Rango
        </Typography>
        <SearchRestaurant />
      </Box>
      <Restaurants />
    </Container>
  );
};
