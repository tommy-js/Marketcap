import React, { Component, prevState } from "react";
import Assets from "./subcomponents/Assets";
import Income from "./subcomponents/Income";
import Expenses from "./subcomponents/Expenses";
import Money from "./subcomponents/Money";
import Credit from "./subcomponents/Credit";
import Hireables from "./subcomponents/Hireables";
import employees from "./subcomponents/employees";

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
      credit: 5000,
      termComplete: false,
      assets: []
    };
    this.purchaseMe = this.purchaseMe.bind(this);
    this.updateMoney = this.updateMoney.bind(this);
    this.salaryPayment = this.salaryPayment.bind(this);
    this.loanTakeout = this.loanTakeout.bind(this);
    this.loanPay = this.loanPay.bind(this);
    this.submitPaybackAmount = this.submitPaybackAmount.bind(this);
    this.updateCredit = this.updateCredit.bind(this);
    this.fireEmployee = this.fireEmployee.bind(this);
  }

  componentDidMount() {
    setInterval(this.updateMoney, 1000);
    setInterval(this.salaryPayment, 7000);
    setInterval(this.loanPay, 7000);
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

  purchaseMe(individual) {
    const salaryArray = {
      name: individual.name,
      salary: individual.salary,
      id: Math.random() * 100000,
      value: individual.value
    };
    if (this.state.money >= 0) {
      this.setState(prevState => ({
        money: prevState.money - individual.salary
      }));
      this.setState(prevState => ({
        assets: [...prevState.assets, salaryArray]
      }));
      this.setState(prevState => ({
        salary: prevState.salary + individual.salary
      }));
      this.setState(prevState => ({
        income: prevState.income + individual.value
      }));
      console.log(this.state.assets);
    } else {
      console.log("too expensive!");
    }
  }

  loanTakeout(e) {
    const loans = Number(e);
    const totalLoans = e * 0.05;
    this.setState(prevState => ({
      money: prevState.money + loans
    }));
    this.setState(prevState => ({ loans: prevState.loans + loans }));
    this.setState(prevState => ({
      loanPayment: prevState.loanPayment + totalLoans
    }));
    // console.log(this.state.loanPayment);
  }

  submitPaybackAmount(loanPaybackAmount) {
    const monthlyValue = loanPaybackAmount;
    this.setState({ monthlyPaybackValue: monthlyValue });
  }

  updateCredit(creditPayoff) {
    this.setState(prevState => ({ credit: prevState.credit + creditPayoff }));
  }

  fireEmployee(status) {
    let prelimArray = [...this.state.assets];
    const totalVal = status.value;
    prelimArray.splice(prelimArray.find(el => el.id == status.id), 1);
    {
      prelimArray.length == 0
        ? this.setState({ income: 0 })
        : this.setState(prevState => ({ income: prevState.income - totalVal }));
    }
    {
      prelimArray.length == 0
        ? this.setState({ salary: 0 })
        : this.setState(prevState => ({
            salary: prevState.salary - status.salary
          }));
    }
    console.log(prelimArray);
    this.setState({ assets: prelimArray });
  }

  render() {
    return (
      <div>
        <Assets
          assets={this.state.assets}
          purchaseMe={this.purchaseMe}
          loanTakeout={this.loanTakeout}
          loans={this.state.loans}
          credit={this.state.credit}
          submitPaybackAmount={this.submitPaybackAmount}
          termComplete={this.state.termComplete}
          updateCredit={this.updateCredit}
          fireEmployee={this.fireEmployee}
        />
        <Money money={this.state.money} />
        <Expenses expenses={this.state.expenses} />
        <Income
          income={this.state.income}
          loanPayment={this.state.loanPayment}
          salary={this.state.salary}
        />
        <Credit credit={this.state.credit} />
        <Hireables employees={employees} purchaseMe={this.purchaseMe} />
      </div>
    );
  }
}
