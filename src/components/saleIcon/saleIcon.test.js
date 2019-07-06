import React from 'react';
import SaleIcon from './saleIcon';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json"

it("should render the homepage for the non logged in user", () => {
  const sale = {
    description: "Terça-feira doce",
    price: 5,
    hours: [
      {
        from: "09:00",
        to: "18:00",
        days:[3]
      }
    ]
  }
  const app = mount(<SaleIcon value={{ sale }}/>)
  expect(toJson(app)).toMatchSnapshot()
})
