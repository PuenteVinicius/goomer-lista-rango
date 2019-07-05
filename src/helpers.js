import Moment from "moment";
import { extendMoment } from "moment-range";
import { DAYS_OF_WEEK, MONEY_LOCATION, NON_HOURS, ALREADY_INSERTED, HOUR_FORMAT } from './constants';

const moment = extendMoment(Moment);

  
export let isOnTimeInterval = hours => {
    
    const format = HOUR_FORMAT;
    let opened = false;
    let todayHour = [];
    let today = moment().format("d");
    let time = moment();

    if (hours.length === NON_HOURS) opened = true;
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

export let getDaysOfWeek = () => {
  return DAYS_OF_WEEK;
}

export let formatMoney = money => {    
  return money.toLocaleString(MONEY_LOCATION, { style: "currency", currency: "BRL"}); 
}

export let mapGroups = menu => {
  let groups = [];
  menu.forEach(meal => {if(groups.indexOf(meal.group) === ALREADY_INSERTED) groups.push(meal.group)});
  return groups;
}

export let mapMenu = (menu, groups) => {
  let mapedMenu = {};
  menu.forEach(meal => {
    mapedMenu[meal.group] = [];
  });
  return mapedMenu;
}

export let mapMeals = (menu, mapedMenu) => {
  menu.forEach(meal => { return mapedMenu[meal.group].push(meal)});
  return mapedMenu;
}

