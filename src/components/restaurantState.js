import React from "react";
import {isOnTimeInterval} from "../helpers"

export default props => {
  const hours = props.value.hours || [];
  let isOpened = false;
  
  setInterval((isOpened = isOnTimeInterval(hours)), 1000);
  
  return (
    <div
      className={
        isOpened
          ? "restaurant-state restaurant-state--open"
          : "restaurant-state restaurant-state--closed"
      }
    >
      <span className="restaurant-state__text">
        {isOpened ? "Aberto Agora" : "Fechado"}
      </span>
    </div>
  );
}