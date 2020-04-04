import React, { Component } from "react";
import "../../../main.css";

export default class Company extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="company_body">
        <input type="text" placeholder="Company name" />
      </div>
    );
  }
}
