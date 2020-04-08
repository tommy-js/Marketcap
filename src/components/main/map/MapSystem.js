import React, { Component } from "react";
import MapBlock from "./MapBlock";
import buildings from "../subcomponents/realEstate";
import "../../../main.scss";

export default class MapSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="map">
        {buildings.map(el => (
          <MapBlock />
        ))}
      </div>
    );
  }
}
