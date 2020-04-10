import React, { Component, prevState } from "react";
import BuildComputerChip from "./items/BuildComputerChip";
import BuildComputerMouse from "./items/BuildComputerMouse";
import BuildMobilePhone from "./items/BuildMobilePhone";
import "../../main.scss";

export default class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chipsSold: 0,
      miceSold: 0,
      phonesSold: 0,
      chipPrice: 225,
      mousePrice: 65,
      phonePrice: 550
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
    let incomeValue = 225 - Math.log(this.state.chipsSold + 1) * 10;
    if (incomeValue < 110) {
      incomeValue = 110;
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
    let incomeValue = 65 - Math.log(this.state.miceSold + 1) * 10;
    if (incomeValue < 40) {
      incomeValue = 40;
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
    let incomeValue = 550 - Math.log(this.state.phonesSold + 1) * 10;
    if (incomeValue < 260) {
      incomeValue = 260;
    }
    this.setState({ phonePrice: incomeValue });
    let passVal = incomeValue * sellAmount;
    this.props.addMoney(passVal);
    console.log(incomeValue);
    console.log(this.state.phonesSold);
  }

  render() {
    return (
      <div className="goods_block">
        <div>Manufacture goods</div>
        <BuildComputerChip
          totalGlass={this.props.totalGlass}
          totalPlastic={this.props.totalPlastic}
          totalAluminum={this.props.totalAluminum}
          removeGlass={this.props.removeGlass}
          removePlastic={this.props.removePlastic}
          removeAluminum={this.props.removeAluminum}
          chipsPayment={this.chipsPayment}
          chipPrice={this.state.chipPrice}
          productivity={this.props.productivity}
        />
        <BuildComputerMouse
          totalGlass={this.props.totalGlass}
          totalPlastic={this.props.totalPlastic}
          totalAluminum={this.props.totalAluminum}
          removeGlass={this.props.removeGlass}
          removePlastic={this.props.removePlastic}
          removeAluminum={this.props.removeAluminum}
          micePayment={this.micePayment}
          mousePrice={this.state.mousePrice}
          productivity={this.props.productivity}
        />
        <BuildMobilePhone
          totalGlass={this.props.totalGlass}
          totalPlastic={this.props.totalPlastic}
          totalAluminum={this.props.totalAluminum}
          removeGlass={this.props.removeGlass}
          removePlastic={this.props.removePlastic}
          removeAluminum={this.props.removeAluminum}
          phonesPayment={this.phonesPayment}
          phonePrice={this.state.phonePrice}
          productivity={this.props.productivity}
        />
      </div>
    );
  }
}
