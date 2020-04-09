import React, { Component, prevState } from "react";
import MapBlock from "./MapBlock";
import buildings from "../subcomponents/realEstate";
import "../../../main.scss";

export default class MapSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initPosition: {
        x: 0,
        y: 0
      },
      position: {
        x: 0,
        y: 0
      },
      calcPos: {
        x: 0,
        y: 0
      },
      dragging: false
    };
  }

  componentDidMount() {
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
  }

  onMouseDown = e => {
    let rect = document.getElementById("mapId").getBoundingClientRect();
    this.setState({
      dragging: true,
      position: {
        x: e.pageX - rect.left,
        y: e.pageY - rect.top
      }
    });
    e.preventDefault();
  };

  onMouseMove = e => {
    if (this.state.dragging) {
      this.setState({
        initPosition: {
          x: e.pageX - this.state.position.x,
          y: e.pageY - this.state.position.y
        }
      });
    }
  };

  onMouseUp = e => {
    this.setState({
      dragging: false
    });
  };

  onMouseUp() {}

  render() {
    return (
      <div
        id="mapId"
        className="map"
        style={{
          top: this.state.initPosition.y,
          left: this.state.initPosition.x
        }}
        onMouseDown={this.onMouseDown}
      >
        {buildings.map(el => (
          <MapBlock
            setBuilding={this.props.setBuilding}
            name={el.name}
            space={el.space}
            capacity={el.capacity}
            price={el.price}
          />
        ))}
      </div>
    );
  }
}
