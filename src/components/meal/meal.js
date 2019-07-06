import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";

import ContentModal from "../contentModal/contentModal"

import Sales from "../sale/sales"
import { IMAGE_NOT_FOUND } from "../../constants";

const useStyles = makeStyles(theme => ({
  card: {
    display: "inline-block",
    width: "100%",
    maxWidth: 386,
    height: 115,
    marginBottom: 24,
    marginRight: 15,
    position: "relative",
    cursor: "pointer"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    display: "flex",
    flex: "1 0 auto",
    padding: 0,
    paddingBottom: "0 !important",
    alignItems: "center"
  },
  cover: {
    width: 115,
    height: 115
  },
  text: {
    width: "100%",
    maxWidth: "calc(100% - 115px)",
    marginLeft: 15
  },
  subText: {
    width: "65%"
  },
}));

export default React.forwardRef((props, ref) =>  {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const meal = props.value.meal;

  let handleOpen = () => {
    setOpen(true);
  };

  let handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card  
          className={classes.card} 
          onClick={handleOpen}
        >
        <CardContent className={classes.content}>
          <CardMedia 
            className={classes.cover} 
            image={meal.image || IMAGE_NOT_FOUND} 
          />
          <Box className={classes.text}>
            <Typography
              component="h3"
              variant="subtitle1"
              className={classes.subText}
            >
              {meal.name}
            </Typography>
            <Typography 
              component="p" 
              variant="caption"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Sales value={{meal}}/>
          </Box>
        </CardContent>
      </Card>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <ContentModal value={{meal}}/>
      </Modal>
    </div>
  );
});
