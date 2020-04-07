import React, { Component, prevState } from "react";
import ComputerChip from "./items/ComputerChip";

export default class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chips: 0,
      buildChips: false
    };
    this.CPUChips = this.CPUChips.bind(this);
    this.setCPUChips = this.setCPUChips.bind(this);
    this.stopCPUChips = this.stopCPUChips.bind(this);
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

  stopCPUChips() {
    clearInterval(this.CPUChips);
  }

  CPUChips() {
    this.setState(prevState => ({
      chips: prevState.chips + 1
    }));
    console.log("working");
  }

  render() {
    return (
      <div>
        <div>Manufacture goods</div>
        <ComputerChip
          chips={this.state.chips}
          setCPUChips={this.setCPUChips}
          stopCPUChips={this.stopCPUChips}
        />
      </div>
    );
  }
}
