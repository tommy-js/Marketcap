import React, { Component, prevState } from "react";
import ComputerChip from "./ComputerChip";

export default class BuildComputerChip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chips: 0
    };
    this.CPUChips = this.CPUChips.bind(this);
    this.setCPUChips = this.setCPUChips.bind(this);
    this.sellCPUChip = this.sellCPUChip.bind(this);
    this.autoSell = this.autoSell.bind(this);
    this.sellAll = this.sellAll.bind(this);
  }

  setCPUChips(checkCPU) {
    if (checkCPU == true) {
      let newvar = setInterval(this.CPUChips, 6000 / this.props.productivity);
      this.setState({ newvar: newvar });
    }
    if (checkCPU == false) {
      clearInterval(this.state.newvar);
      console.log("not passing");
    }
  }

  CPUChips() {
    if (
      this.props.totalGlass >= 1 &&
      this.props.totalAluminum >= 5 &&
      this.props.totalPlastic >= 2
    ) {
      this.props.removeGlass(1);
      this.props.removePlastic(2);
      this.props.removeAluminum(5);
      this.setState(prevState => ({
        chips: prevState.chips + 1
      }));
      console.log("working");
    } else {
      clearInterval(this.state.newvar);
    }
  }

  sellCPUChip(sellAmount) {
    if (this.state.chips >= sellAmount) {
      this.setState(prevState => ({
        chips: prevState.chips - sellAmount
      }));
      this.props.chipsPayment(sellAmount);
    }
  }

  autoSell() {
    if (this.state.chips > 0) {
      let chipVal = this.state.chips;
      this.setState({
        chips: 0
      });
      this.props.chipsPayment(chipVal);
    }
  }

  sellAll() {
    let chipVal = this.state.chips;
    this.setState({ chips: 0 });
    this.props.chipsPayment(chipVal);
  }

  render() {
    return (
      <div>
        <ComputerChip
          totalGlass={this.props.totalGlass}
          totalAluminum={this.props.totalAluminum}
          totalPlastic={this.props.totalPlastic}
          chipPrice={this.props.chipPrice}
          chips={this.state.chips}
          setCPUChips={this.setCPUChips}
          stopCPUChips={this.stopCPUChips}
          sellCPUChip={this.sellCPUChip}
          autoSell={this.autoSell}
          sellAll={this.sellAll}
        />
      </div>
    );
  }
}
