import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

export default props => {
  const useStyles = makeStyles(theme => ({
    cardContent: {
      position: "relative",
      display: "flex",
      flexDirection: "row-reverse",
      width: "100%",
      maxWidth: 405,
      height: 120,
      padding: 0,
      marginBottom: 34
    },
    card: {
      position: "absolute",
      width: "100%",
      height: 100,
      display: "flex",
      padding: 0,
      maxWidth: 367,
      marginBottom: 0,
      flexDirection: "row-reverse",
      bottom: 0, 
      left: 0,
    },
    media: {
      width: "100%",
      maxWidth: 100,
      height: 100
    },
    text: {
      width: "100%",
      maxWidth: 251,
      paddingRight: 0,
    },
    circle: {
      position: "absolute",
      right: 16,
      top: 4,
      width: 48,
      height: 48,
      borderRadius: "50%",
      backgroundColor: "#2B0D61",
      textAlign: "center",
      lineHeight: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    circleText: {
      width: "100%",
      color: "white",
      fontSize: "10px",
      fontWeight: "bold",
      textAlign: "center"
    },
    title: {
      fontSize: 16
    }
  }));

  const classes = useStyles();

  return (
    <div  className={classes.cardContent}>
      <Card className={classes.card}>
        <CardHeader
          titleTypographyProps={{variant:'subtitle1' }}
          className={classes.text}
          title="Nome do Restaurante"
          subheader="Endereço do restaurante"
        />
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/random"
          title="Contemplative Reptile"
        />
      </Card>
      <div className={classes.circle}>
        {/* <span className={classes.circleText}>Aberto agora</span> */}
        <span className={classes.circleText}>Fechado</span>
      </div>
    </div>
  );
};
