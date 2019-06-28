import React, { Component } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { bindActionCreators } from "redux";
import { changeValue } from "./searchActions";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

class Search extends Component {

  constructor(props, classes) {
    super(props, classes);
    
    this.classes = makeStyles(theme => ({
      root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
      },
      input: {
        marginLeft: 8,
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        width: 1,
        height: 28,
        margin: 4,
      },
    }));

    this.state = { value: props.initialValue };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <label>{this.props.value}</label>
        <br />
        <Paper className={this.classes.root}>
          <Divider className={this.classes.divider} />
          <InputBase
            className={this.classes.input}
            onChange={this.props.changeValue}
            value={this.props.value}
          />
          <IconButton className={this.classes.iconButton} aria-label="Search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.search.value
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeValue }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
