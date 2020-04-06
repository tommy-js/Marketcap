import React, { Component } from "react";
import "../../main.css";

export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "block"
    };
  }

  fireEmployee() {
    this.setState({ display: "none" });
  }

  render() {
    return (
      <div className="company_body" style={{ display: this.state.display }}>
        <div>Weekly salary: ${this.props.salary}</div>
        <button onClick={() => this.fireEmployee()}>Fire me</button>
      </div>
    );
  }
}
