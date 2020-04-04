import React, { Component, prevState } from "react";
import Assets from "./subcomponents/Assets";
import Income from "./subcomponents/Income";
import Expenses from "./subcomponents/Expenses";
import Money from "./subcomponents/Money";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: Math.random() * 5000,
      expenses: 0,
      income: 0,
      assets: []
    };
    this.purchaseMe = this.purchaseMe.bind(this);
    this.updateMoney = this.updateMoney.bind(this);
    this.salaryPayment = this.salaryPayment.bind(this);
  }

  componentDidMount() {
    setInterval(this.updateMoney, 1000);
    setInterval(this.salaryPayment, 7000);
  }

  updateMoney() {
    this.setState(prevState => ({
      money: prevState.money + this.state.income
    }));
  }

  salaryPayment() {
    this.setState(prevState => ({
      money: prevState.money - this.state.assets.length * 800
    }));
  }

  purchaseMe(cost) {
    let totalVal = 300;
    console.log(cost);
    if (this.state.money >= cost) {
      this.setState(prevState => ({
        money: prevState.money - cost
      }));
      let newarray: {
        title: "company"
      };
      this.setState(prevState => ({
        assets: [...prevState.assets, newarray]
      }));
      this.setState({ income: (this.state.assets.length + 1) * totalVal });
    } else {
      console.log("too expensive!");
    }
  }

  render() {
    return (
      <div>
        <Assets assets={this.state.assets} purchaseMe={this.purchaseMe} />
        <Money money={this.state.money} />
        <Expenses expenses={this.state.expenses} />
        <Income income={this.state.income} />
      </div>
    );
  }
}
