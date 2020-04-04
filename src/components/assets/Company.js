import React, { Component } from "react";
import "../../main.css";
import employees from "../main/subcomponents/employees";

export default class Company extends Component {
  constructor() {
    super();
    this.state = {
      individual: {
        name: "me",
        salary: 10
      }
    };
  }

  componentDidMount() {
    const individualIndex = Math.floor(Math.random() * 5);
    this.setState({ individual: employees[individualIndex] });
  }

  render() {
    return (
      <div className="company_body">
        <p>{this.state.individual.name}</p>
        <p>{this.state.individual.salary}</p>
      </div>
    );
  }
}
