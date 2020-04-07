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
  }

  setCPUChips(checkCPU) {
    if (checkCPU == true) {
      this.setState({ buildChips: true });
      let newvar = setInterval(this.CPUChips, 2000);
      this.setState({ newvar: newvar });
    }
    if (checkCPU == false) {
      clearInterval(this.state.newvar);
      console.log("not passing");
      this.setState({ buildChips: false });
    }
  }

  CPUChips() {
    this.setState(prevState => ({
      chips: prevState.chips + 1
    }));
    console.log("working");
  }

  sellCPUChip(sellAmount) {
    if (this.state.chips >= sellAmount) {
      this.setState(prevState => ({
        chips: prevState.chips - sellAmount
      }));
      this.props.chipsPayment(sellAmount);
    }
  }

  render() {
    return (
      <div>
        <ComputerChip
          chips={this.state.chips}
          setCPUChips={this.setCPUChips}
          stopCPUChips={this.stopCPUChips}
          sellCPUChip={this.sellCPUChip}
          chipPrice={this.props.chipPrice}
        />
      </div>
    );
  }
}
