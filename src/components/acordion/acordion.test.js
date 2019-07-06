import React from 'react';
import Acordion from './acordion';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json"
import {menu} from "../../mock"

it("should render the homepage for the non logged in user", () => {  
  const app = mount(<Acordion menu={menu} />)
  expect(toJson(app)).toMatchSnapshot()
})