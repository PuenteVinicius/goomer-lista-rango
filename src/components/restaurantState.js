import React, { Component } from "react";
import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

class RestaurantState extends Component {
  constructor(props, value) {
    super(props);
  }
  render() {
    const hours = this.props.value.hours || [];
    let isOpened = false;

    setInterval((isOpened = isRestaurantOpened(hours)), 1000);

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
}

export default RestaurantState;

function isRestaurantOpened(hours) {
  const format = "HH:mm";
  let opened = false;
  let todayHour = [];
  let today = moment().format("d");
  let time = moment();

  if (hours.length === 0) opened = true;
  else {
    todayHour = hours.filter(hour => hour.days.includes(parseInt(today)));

    todayHour.forEach(hour => {
      if (!opened) {
        let startTime = moment(hour.from, format);
        let endTime = moment(hour.to, format);

        if (startTime.isAfter(endTime)) endTime.add(1, "days");

        opened = time.isBetween(startTime, endTime);
      }
    });
  }
  return opened;
}
