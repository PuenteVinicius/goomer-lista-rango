import React from 'react';
import Restaurant from './restaurant';
import { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json"
import { BrowserRouter as Router } from 'react-router-dom';

it("should render the homepage for the non logged in user", () => {

  const restaurant = {
    id: 1,
    name: "Cupcake para todos",
    address: "Rua dos Sonhos, 310",
    image: "https://images.unsplash.com/photo-1525640788966-69bdb028aa73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d53c30ba55d9ca863d57fabfffdb416b&auto=format&fit=crop&w=1047&q=80",
    hours: [
      {
        from: "11:00",
        to: "20:00",
        days:[7,1]
      },
      {
        from: "09:00",
        to: "18:00",
        days:[2,3,4,5,6]
      }
    ] 
  }

  const app = mount(
    <Router>
      <Restaurant value={{restaurant}}/>
    </Router>
  );
  expect(toJson(app)).toMatchSnapshot();
})