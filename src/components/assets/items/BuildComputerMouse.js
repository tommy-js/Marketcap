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
    this.autoSell = this.autoSell.bind(this);
    this.sellAll = this.sellAll.bind(this);
  }

  setComputerMouse(checkMouse) {
    if (checkMouse == true) {
      let newvar = setInterval(
        this.ComputerMouse,
        1500 / this.props.productivity
      );
      this.setState({ newvar: newvar });
    }
    if (checkMouse == false) {
      clearInterval(this.state.newvar);
      console.log("not passing");
    }
  }

  ComputerMouse() {
    if (
      this.props.totalGlass >= 1 &&
      this.props.totalAluminum >= 2 &&
      this.props.totalPlastic >= 4
    ) {
      this.props.removeGlass(1);
      this.props.removePlastic(4);
      this.props.removeAluminum(2);
      this.setState(prevState => ({
        mice: prevState.mice + 1
      }));
      console.log("working");
    } else {
      clearInterval(this.state.newvar);
    }
  }

  sellComputerMouse(sellAmount) {
    if (this.state.mice >= sellAmount) {
      this.setState(prevState => ({
        mice: prevState.mice - sellAmount
      }));
      this.props.micePayment(sellAmount);
    }
  }

  autoSell() {
    if (this.state.mice > 0) {
      let miceVal = this.state.mice;
      this.setState({
        mice: 0
      });
      this.props.micePayment(miceVal);
    }
  }

  sellAll() {
    let miceVal = this.state.mice;
    this.setState({ mice: 0 });
    this.props.micePayment(miceVal);
  }

  render() {
    return (
      <div>
        <ComputerMouse
          totalGlass={this.props.totalGlass}
          totalPlastic={this.props.totalPlastic}
          totalAluminum={this.props.totalAluminum}
          mousePrice={this.props.mousePrice}
          mice={this.state.mice}
          setComputerMouse={this.setComputerMouse}
          sellComputerMouse={this.sellComputerMouse}
          autoSell={this.autoSell}
          sellAll={this.sellAll}
        />
      </div>
    );
  }
}
