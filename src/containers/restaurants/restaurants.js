import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Box from "@material-ui/core/Box";

import { getRestaurants } from './restaurantsActions'
import CardRestaurant from "../../components/cardRestaurant";

class Restaurants extends Component {

  componentWillMount() {
    this.props.getRestaurants()
  }

  render() {
    const renderCards = () => {
      const cards = this.props.restaurants || [];
      return cards.map(card => (
        <CardRestaurant key={card.id} value={{card}} />
      ))
    }

    return (
    <Box className="restaurants">
      {renderCards()}
    </Box>
    );
  }
}

function mapStateToProps(state) {
  return {
      restaurants: state.Restaurants.restaurants
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getRestaurants }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);