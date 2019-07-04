import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Box from "@material-ui/core/Box";

import { getRestaurants } from './restaurantsActions'
import Restaurant from "../../components/restaurant";

class Restaurants extends Component {

  componentWillMount() {
    this.props.getRestaurants()
  }

  render() {
    const renderCards = () => {
      const cards = this.props.restaurants || [];
      return cards.map(card => (
        <Restaurant key={card.id} value={{card}} />
      ))
    }

    return (
    <Box className="restaurants">
      {renderCards()}
    </Box>
    );
  }
}

let mapStateToProps = state => {
  return {
      restaurants: state.restaurants.restaurants
  }
}
let mapDispatchToProps = dispatch => {
  return bindActionCreators({ getRestaurants }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);