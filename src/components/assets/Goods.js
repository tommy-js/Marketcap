import React, { Component, prevState } from "react";
import BuildComputerChip from "./items/BuildComputerChip";
import BuildComputerMouse from "./items/BuildComputerMouse";
import BuildMobilePhone from "./items/BuildMobilePhone";

export default class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chipsSold: 0,
      miceSold: 0,
      phonesSold: 0,
      chipPrice: 165,
      mousePrice: 50,
      phonesPrice: 400
    };
    this.chipsPayment = this.chipsPayment.bind(this);
    this.micePayment = this.micePayment.bind(this);
    this.phonesPayment = this.phonesPayment.bind(this);
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
    this.setState({ chipPrice: incomeValue });
    let passVal = incomeValue * sellAmount;
    this.props.addMoney(passVal);
    console.log(incomeValue);
    console.log(this.state.chipsSold);
  }

  micePayment(sellAmount) {
    sellAmount = Number(sellAmount);
    this.setState(prevState => ({
      miceSold: prevState.miceSold + sellAmount
    }));
    let incomeValue = 50 - Math.log(this.state.miceSold + 1) * 10;
    if (incomeValue < 5) {
      incomeValue = 5;
    }
    this.setState({ mousePrice: incomeValue });
    let passVal = incomeValue * sellAmount;
    this.props.addMoney(passVal);
    console.log(incomeValue);
    console.log(this.state.miceSold);
  }

  phonesPayment(sellAmount) {
    sellAmount = Number(sellAmount);
    this.setState(prevState => ({
      phonesSold: prevState.phonesSold + sellAmount
    }));
    let incomeValue = 400 - Math.log(this.state.phonesSold + 1) * 10;
    if (incomeValue < 5) {
      incomeValue = 5;
    }
    this.setState({ phonePrice: incomeValue });
    let passVal = incomeValue * sellAmount;
    this.props.addMoney(passVal);
    console.log(incomeValue);
    console.log(this.state.phonesSold);
  }

  render() {
    return (
      <div>
        <div>Manufacture goods</div>
        <BuildComputerChip
          chipsPayment={this.chipsPayment}
          chipPrice={this.state.chipPrice}
        />
        <BuildComputerMouse
          micePayment={this.micePayment}
          mousePrice={this.state.mousePrice}
        />
        <BuildMobilePhone
          phonesPayment={this.phonesPayment}
          phonePrice={this.state.phonePrice}
        />
      </div>
    );
  }
}
