import React, { Component } from "react";
import Glass from "./materials/Glass";
import Aluminum from "./materials/Aluminum";
import Plastic from "./materials/Plastic";
import "../../main.scss";

export default class Materials extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="materials_block">
        <Plastic addPlastic={this.props.addPlastic} />
        <Aluminum addAluminum={this.props.addAluminum} />
        <Glass addGlass={this.props.addGlass} />
      </div>
    );
  }
}
