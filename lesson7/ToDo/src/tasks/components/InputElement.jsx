import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputElement extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  handleTaskCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({
      value: '',
    });
  };
  render() {
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="btn create-task__btn" onClick={this.handleTaskCreate}>
          Create
        </button>
      </div>
    );
  }
}

InputElement.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default InputElement;
