import React, { Component, prevState } from "react";
import ComputerChip from "./items/ComputerChip";

export default class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chips: 0
    };
  }

  CPUChips(submitChip) {
    this.setState(prevState => ({
      chips: prevState.chips + submitChip
    }));
  }

  render() {
    return (
      <div>
        <div>Manufacture goods</div>
        <ComputerChip CPUChips={this.CPUChips} />
      </div>
    );
  }
}
