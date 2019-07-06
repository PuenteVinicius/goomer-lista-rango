import React from 'react';
import Header from './header';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json"

it("should render the homepage for the non logged in user", () => {

  const app = mount(<Header />)
  expect(toJson(app)).toMatchSnapshot()
})