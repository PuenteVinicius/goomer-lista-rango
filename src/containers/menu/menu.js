import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getMenu } from "../../store/actions/menu"

import Acordion from "../../components/acordion/acordion"

class Menu extends Component {
  
  componentWillMount() {
    this.props.getMenu(this.props.value.restaurant.id);
  }

  render() {
    return (
      <Acordion menu={this.props.menu}></Acordion>
    );
  }
}

let mapStateToProps = state => {
  return {
    menu: state.menu.menu
  };
}

let mapDispatchToProps = dispatch => {
  return bindActionCreators({ getMenu }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
