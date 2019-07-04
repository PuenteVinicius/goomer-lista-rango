import React, { Component } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { filterMeals } from "../menu/menuActions";

class SearchMeals extends Component {
  constructor(props, value) {
    super(props, value);
    this.state = { value: props.initialValue };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.filterMeals({
      text: event.target.value,
      id: this.props.id.restaurantId
    });
  }

  render() {
    return (
      <Paper className="search-restaurant search-restaurant--meals ">
        <div className="search-restaurant__title">
          <p>Buscar no cardápio</p>
        </div>
        <InputBase
          onChange={this.handleChange}
          value={this.props.value}
          className="search-restaurant__input"
        />
        <IconButton className="search-restaurant__button" aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }
}

let mapStateToProps = state => {
  return {
    value: state.menu.value
  };
}

let mapDispatchToProps = dispatch => {
  return bindActionCreators({ filterMeals }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMeals);
