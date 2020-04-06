import React, { Component } from "react";
import "../../main.css";

export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "block",
      status: {
        id: this.props.id,
        salary: this.props.salary,
        value: this.props.value
      }
    };
  }

  fireEmployee() {
    this.props.fireEmployee(this.state.status);
  }

  render() {
    return (
      <div className="company_body" style={{ display: this.state.display }}>
        <div>Weekly salary: ${this.props.salary}</div>
        <div>Weekly value: ${this.props.value * 7}</div>
        <button onClick={() => this.fireEmployee()}>Fire me</button>
      </div>
    );
  }
}
