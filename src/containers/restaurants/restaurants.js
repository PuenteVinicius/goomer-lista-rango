import React, { Component } from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import Box from "@material-ui/core/Box";

import { getRestaurants } from "../../store/actions/restaurants"
import Restaurant from "../../components/restaurant/restaurant";

class Restaurants extends Component {

  componentWillMount() {
    this.props.getRestaurants()
  }

  render() {
    const renderCards = () => {
      const restaurants = this.props.restaurants || [];
      return restaurants.map(restaurant => (
        <Restaurant key={restaurant.id} value={{restaurant}} />
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