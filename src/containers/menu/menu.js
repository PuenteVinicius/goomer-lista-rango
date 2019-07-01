import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getMenu } from './menuActions'

import Acordion from "../../components/acordion"

class Menu extends Component {
  
  componentWillMount() {
    this.props.getMenu(this.props.value.card.id);
  }

  render() {
    return (
      <Acordion menu={this.props.menu}></Acordion>
    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu.menu
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMenu }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
