import React, { Component } from "react";
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { filterRestaurants } from './searchRestaurantsActions'

class SearchRestaurant extends Component {
  constructor(props) {
    super(props)
    this.state = {value: props.initialValue}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {

    this.setState({ value: event.target.value })
  }
  
  render() {
    return (
    <Paper className="search-restaurant" >
      <InputBase onChange={this.props.filterRestaurants} className="search-restaurant__input" />
      <IconButton className="search-restaurant__button" aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Paper>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.searchRestaurants.value
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ filterRestaurants }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchRestaurant);