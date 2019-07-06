import React from 'react';
import Meal from './meal';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json"

it("should render the homepage for the non logged in user", () => {
  const meal = {
    restaurantId: 2,
    name: "Macarrão com salsicha",
    image: "https://st.depositphotos.com/2252541/3739/i/450/depositphotos_37397413-stock-photo-pasta-with-sausage.jpg",
    price: 1.2,
    group: "Pratos principais"
  }
  const app = mount(<Meal value={ {meal} }/>)
  expect(toJson(app)).toMatchSnapshot()
})