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
      salary: 0,
      income: 0,
      loans: 0,
      loanPayment: 0,
      monthlyPaybackValue: 0,
      assets: [
        {
          salary: 0
        }
      ]
    };
    this.purchaseMe = this.purchaseMe.bind(this);
    this.updateMoney = this.updateMoney.bind(this);
    this.salaryPayment = this.salaryPayment.bind(this);
    this.loanTakeout = this.loanTakeout.bind(this);
    this.loanPay = this.loanPay.bind(this);
    this.submitPaybackAmount = this.submitPaybackAmount.bind(this);
  }

  componentDidMount() {
    setInterval(this.updateMoney, 1000);
    setInterval(this.salaryPayment, 7000);
    setInterval(this.loanPay, 30000);
  }

  updateMoney() {
    this.setState(prevState => ({
      money: prevState.money + this.state.income
    }));
  }

  salaryPayment() {
    this.setState(prevState => ({
      money: prevState.money - this.state.salary
    }));
  }

  loanPay() {
    if (this.state.loans >= 0) {
      let testingVal = this.state.loans - this.state.monthlyPaybackValue;
      if (testingVal >= 0) {
        this.setState(prevState => ({
          money:
            prevState.money -
            this.state.loanPayment -
            this.state.monthlyPaybackValue,
          loans: prevState.loans - this.state.monthlyPaybackValue,
          loanPayment: (prevState.loans - this.state.monthlyPaybackValue) * 0.05
        }));
      }
    }
  }

  purchaseMe(employeeSalary) {
    const totalVal = 0.1 * employeeSalary * this.state.assets.length;
    const salaryArray = {
      salary: employeeSalary
    };
    if (this.state.money >= 0) {
      this.setState(prevState => ({
        money: prevState.money - employeeSalary
      }));
      this.setState(prevState => ({
        assets: [...prevState.assets, salaryArray]
      }));
      this.setState(prevState => ({
        salary: prevState.salary + employeeSalary
      }));
      this.setState({ income: (this.state.assets.length + 1) * totalVal });
    } else {
      console.log("too expensive!");
    }
  }

  loanTakeout(e) {
    const loans = Number(e);
    const totalLoans = e * 0.05;
    console.log(typeof loans);
    this.setState(prevState => ({
      money: prevState.money + loans
    }));
    this.setState({ loans: loans });
    this.setState({ loanPayment: totalLoans });
    // console.log(this.state.loanPayment);
  }

  submitPaybackAmount(loanPaybackAmount) {
    const monthlyValue = loanPaybackAmount;
    this.setState({ monthlyPaybackValue: monthlyValue });
  }

  render() {
    return (
      <div>
        <Assets
          assets={this.state.assets}
          purchaseMe={this.purchaseMe}
          loanTakeout={this.loanTakeout}
          loans={this.state.loans}
          submitPaybackAmount={this.submitPaybackAmount}
        />
        <Money money={this.state.money} />
        <Expenses expenses={this.state.expenses} />
        <Income income={this.state.income} />
      </div>
    );
  }
}
