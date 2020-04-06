import React, { Component } from "react";
import "../../main.css";

export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="company_body">Weekly salary: {this.props.salary}</div>
    );
  }
}
