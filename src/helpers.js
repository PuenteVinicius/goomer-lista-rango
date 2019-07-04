import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

export default {
  
  isOnTimeInterval: hours => {
    
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
  },

  getDaysOfWeek: () => {
    return {
      1: "Domingo",
      2: "Segunda",
      3: "Terça",
      4: "Quarta",
      5: "Quinta",
      6: "Sexta",
      7: "Sábado"
    };
  },

  formatMoney: money => {    
    return money.toLocaleString("pt-br", { style: "currency",currency: "BRL"}); 
  } 
  
}
