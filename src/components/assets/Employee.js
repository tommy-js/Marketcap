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
        value: this.props.value,
        profession: this.props.profession
      }
    };
  }

  fireEmployee() {
    this.props.fireEmployee(this.state.status);
  }

  render() {
    return (
      <div className="company_body" style={{ display: this.state.display }}>
        <div>Name: {this.props.name}</div>
        <div>Weekly salary: ${this.props.salary.toLocaleString()}</div>
        <div>Profession: {this.props.profession}</div>
        <button onClick={() => this.fireEmployee()}>Fire me</button>
      </div>
    );
  }
}
