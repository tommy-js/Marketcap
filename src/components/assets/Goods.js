import React, { Component, prevState } from "react";
import BuildComputerChip from "./items/BuildComputerChip";

export default class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chipsSold: 0
    };
    this.chipsPayment = this.chipsPayment.bind(this);
  }

  chipsPayment(sellAmount) {
    let incomeValue = 50 / Math.log(this.state.chipsSold / 1000000 + 3) + 100;
    this.setState(prevState => ({
      chipsSold: prevState.chipsSold + sellAmount
    }));
    this.props.addMoney(incomeValue);
    console.log(incomeValue);
  }

  render() {
    return (
      <div>
        <div>Manufacture goods</div>
        <BuildComputerChip chipsPayment={this.chipsPayment} />
      </div>
    );
  }
}
