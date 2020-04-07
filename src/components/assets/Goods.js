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
    sellAmount = Number(sellAmount);
    this.setState(prevState => ({
      chipsSold: prevState.chipsSold + sellAmount
    }));
    let incomeValue = 165 - Math.log(this.state.chipsSold + 1) * 10;
    if (incomeValue < 25) {
      incomeValue = 25;
    }
    let passVal = incomeValue * sellAmount;
    this.props.addMoney(passVal);
    console.log(incomeValue);
    console.log(this.state.chipsSold);
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
