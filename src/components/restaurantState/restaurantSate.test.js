import React from 'react';
import RestaurantState from './restaurantState';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json"

it("should render the homepage for the non logged in user", () => {
  const props = {
    hours: [
      {
        from: "09:00",
        to: "18:00",
        days:[2,3,4,5,6]
      },
      {
        from: "11:00",
        to: "20:00",
        days:[7,1]
      }
    ]
  }
  const app = mount(<RestaurantState value={props.hours} />)
  expect(toJson(app)).toMatchSnapshot()
})