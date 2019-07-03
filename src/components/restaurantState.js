import React, { Component } from "react";
import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

class RestaurantState extends Component {
  constructor(props, value) {
    super(props);

  }
  render() {

    const format = 'HH:mm';
    const hours = this.props.value.hours || [];
    let isOpened = false;
    let today = moment().format("d");
    let todayHour = [];
    
    function isRestaurantOpened () {

      todayHour = hours.filter(hour => {
        return hour.days.includes(parseInt(today));
      });

      todayHour.forEach(hour => {
        if(!isOpened) {
          let startTime = moment(hour.from, format);
          let endTime = moment(hour.to, format);
          let time = moment();

          if(startTime.isAfter(endTime)) endTime.add(1, 'days');
          
          isOpened = time.isBetween(startTime, endTime);
        }
      });
    }
    
    setInterval(isRestaurantOpened(), 1000);

    return (
      <div
        className={
          isOpened ? "restaurant-state restaurant-state--open"
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
