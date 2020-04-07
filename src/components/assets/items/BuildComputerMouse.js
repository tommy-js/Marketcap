import React, { Component, prevState } from "react";
import ComputerMouse from "./ComputerMouse";

export default class BuildComputerMouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mice: 0
    };
    this.ComputerMouse = this.ComputerMouse.bind(this);
    this.setComputerMouse = this.setComputerMouse.bind(this);
    this.sellComputerMouse = this.sellComputerMouse.bind(this);
  }

  setComputerMouse(checkMouse) {
    if (checkMouse == true) {
      let newvar = setInterval(this.ComputerMouse, 1000);
      this.setState({ newvar: newvar });
    }
    if (checkMouse == false) {
      clearInterval(this.state.newvar);
      console.log("not passing");
    }
  }

  ComputerMouse() {
    this.setState(prevState => ({
      mice: prevState.mice + 1
    }));
    console.log("working");
  }

  sellComputerMouse(sellAmount) {
    if (this.state.mice >= sellAmount) {
      this.setState(prevState => ({
        mice: prevState.mice - sellAmount
      }));
      this.props.micePayment(sellAmount);
    }
  }

  render() {
    return (
      <div>
        <ComputerMouse
          mice={this.state.mice}
          setComputerMouse={this.setComputerMouse}
          sellComputerMouse={this.sellComputerMouse}
          mousePrice={this.props.mousePrice}
        />
      </div>
    );
  }
}
