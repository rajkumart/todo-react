import React, { Component } from "react";

class AddTask extends Component {
  state = { name: "" };
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };
  createTask = () => {
    this.props.createTask(this.state.name);
    this.setState({ name: "" });
  };
  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button className="btn btn-outline-secondary" onClick={this.createTask}>
          Add
        </button>
      </div>
    );
  }
}

export default AddTask;
