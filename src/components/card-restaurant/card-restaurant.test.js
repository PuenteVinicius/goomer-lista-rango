import React from "react";
import toJson from "enzyme-to-json";
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import { mount } from "enzyme";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "../../store/reducers";
import CardRestaurant from "./card-restaurant";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
      && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

it("should render the homepage", () => {
  const props = {
    initialValue: "Seu nome aqui"
  };
  const cardRestaurant = mount(
    <Provider store={store}>
      <CardRestaurant {...props} />
    </Provider>
  );
  expect(toJson(cardRestaurant)).toMatchSnapshot();
});
