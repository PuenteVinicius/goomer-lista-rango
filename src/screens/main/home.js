import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Search from "../../components/search/search";
import CardRestaurant from "../../components/card-restaurant/card-restaurant";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';

export default props => {

  const useStyles = makeStyles(theme => ({
    title: {
      marginTop: 32,
      marginBottom: 32,
      fontSize:24,
    },
    boxSearch: {
      marginBottom:46,
      display: "flex",
      justifyContent:"center",
      flexDirection:"column",
      flexWrap: "wrap",
      alignItems:"center"
    },
    boxGrid: {
      display: "flex",
      justifyContent:"flex-start",
      flexDirection:"row",
      flexWrap: "wrap",
      alignItems:"flex-start"
    }
  }));

  const classes = useStyles();
  return (
    <main>
      <Container fixed>
        <Box className={classes.boxSearch}>
          <Typography variant="h5" className={classes.title}>Bem-vindo ao Lista Rango</Typography>
          <Search />
        </Box>
        <Box className={classes.boxGrid}>
          <CardRestaurant />
        </Box>
      </Container>
    </main>
  );
};
