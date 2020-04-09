import React, { Component, prevState } from "react";
import MapBlock from "./MapBlock";
import buildings from "../subcomponents/realEstate";
import map from "../../images/map.jpg";
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
      size: 1,
      scrollPos: 0,
      rectangle: null,
      dragging: false
    };
  }

  componentDidMount() {
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
    document.addEventListener("wheel", this.onScroll);
    this.setState({
      rectangle: document.getElementById("mapId").getBoundingClientRect()
    });
  }

  onMouseDown = e => {
    this.setState({
      dragging: true,
      position: {
        x: e.pageX - this.state.rectangle.left,
        y: e.pageY - this.state.rectangle.top
      }
    });
    e.preventDefault();
  };

  onMouseMove = e => {
    if (this.state.dragging) {
      this.setState({
        initPosition: {
          x: e.pageX - this.state.position.x / this.state.size,
          y: e.pageY - this.state.position.y / this.state.size
        }
      });
    }
  };

  onMouseUp = e => {
    this.setState({
      dragging: false,
      rectangle: document.getElementById("mapId").getBoundingClientRect()
    });
  };

  onScroll = e => {
    if (this.state.size <= 2 && this.state.size >= 0.5) {
      const ef = document.getElementById("mapId");
      ef.style.transform = `scale(${this.state.size})`;
      console.log(e.deltaY);
      this.setState(prevState => ({
        size: prevState.size - e.deltaY / 100
      }));
      this.setState({
        rectangle: ef.getBoundingClientRect()
      });
    } else if (this.state.size > 2) {
      this.setState({ size: 2 });
    } else if (this.state.size < 0.5) {
      this.setState({ size: 0.5 });
    }
  };

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
        <img src={map} className="map_image_background" />
        {buildings.map(el => (
          <MapBlock
            setBuilding={this.props.setBuilding}
            name={el.name}
            space={el.space}
            capacity={el.capacity}
            price={el.price}
            id={el.id}
            buildingId={this.props.building.id}
            ownedBuildings={this.props.ownedBuildings}
          />
        ))}
      </div>
    );
  }
}
