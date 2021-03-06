import React, { Component, prevState } from "react";
import "../../main.css";
import Assets from "./subcomponents/Assets";
import Money from "./subcomponents/Money";
import Hireables from "./subcomponents/Hireables";
import Calendar from "../calculations/Calendar";
import Building from "../assets/Building";
import Bankrupt from "./subcomponents/Bankrupt";
import OwnedEstate from "../assets/OwnedEstate";
import Notification from "../functions/Notifications/Notification";
import Materials from "../assets/Materials";
import MapSystem from "./map/MapSystem";
import employees from "./subcomponents/employees";

// money: Math.random() * 5000;

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 20000,
      expenses: 0,
      salary: 0,
      income: 0,
      productivity: 1,
      monthlyPaybackValue: 0,
      credit: 5000,
      days: 0,
      buildingSpots: 5,
      employeesHired: 0,
      totalEarnings: 0,
      notificationMessage: "",
      building: {
        name: "",
        space: "",
        capacity: "",
        price: "",
        id: ""
      },
      assets: [],
      ownedBuildings: []
    };
    this.purchaseMe = this.purchaseMe.bind(this);
    this.updateMoney = this.updateMoney.bind(this);
    this.salaryPayment = this.salaryPayment.bind(this);
    this.loanTakeout = this.loanTakeout.bind(this);
    this.loanPay = this.loanPay.bind(this);
    this.updateCredit = this.updateCredit.bind(this);
    this.fireEmployee = this.fireEmployee.bind(this);
    this.emergencyCash = this.emergencyCash.bind(this);
    this.addMoney = this.addMoney.bind(this);
    this.setBuildingSpots = this.setBuildingSpots.bind(this);
    this.setBuilding = this.setBuilding.bind(this);
  }

  componentDidMount() {
    setInterval(this.updateMoney, 100);
    setInterval(this.salaryPayment, 14000);
  }

  updateMoney() {
    this.setState(prevState => ({
      money: prevState.money + this.state.income / 20,
      days: prevState.days + 1 / 20
    }));
  }

  salaryPayment() {
    this.setState(prevState => ({
      money: prevState.money - this.state.salary
    }));
  }

  purchaseMe(individual) {
    if (this.state.employeesHired < this.state.buildingSpots) {
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
          productivity: prevState.productivity + individual.value
        }));
        this.setState(prevState => ({
          employeesHired: prevState.employeesHired + 1
        }));
        console.log(this.state.assets);
      } else {
        console.log("too expensive!");
      }
    } else {
      return console.log("Too many people");
    }
    const salaryArray = {
      name: individual.name,
      salary: individual.salary,
      id: Math.random() * 100000,
      profession: individual.profession,
      value: individual.value
    };
  }

  loanTakeout(e) {
    this.setState(prevState => ({
      money: prevState.money + e.thisLoans,
      monthlyPaybackValue: e.thisLoanPayment
    }));
  }

  loanPay(e) {
    this.setState(prevState => ({
      money: prevState.money - e.thisLoanPayment,
      monthlyPaybackValue: prevState.monthlyPaybackValue - e.thisLoanPayment
    }));
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
    this.setState(prevState => ({
      employeesHired: prevState.employeesHired - 1
    }));
    console.log(prelimArray);
    this.setState({ assets: prelimArray });
  }

  emergencyCash() {
    this.setState({ money: 50000, credit: 500, assets: [] });
  }

  addMoney(addAmount) {
    this.setState(prevState => ({
      money: prevState.money + addAmount,
      totalEarnings: prevState.totalEarnings + addAmount
    }));
  }

  setBuildingSpots(building) {
    if (this.state.money > building.price) {
      this.setState(prevState => ({
        buildingSpots: prevState.buildingSpots + building.capacity,
        money: prevState.money - building.price,
        ownedBuildings: [...prevState.ownedBuildings, building]
      }));
      console.log(this.state.ownedBuildings);
    } else {
      this.setState({ notificationMessage: "Can't Afford!" });
      setTimeout(() => this.setState({ notificationMessage: "" }), 3000);
    }
  }

  setBuilding(buildingInfo) {
    this.setState({
      building: {
        name: buildingInfo.name,
        price: buildingInfo.price,
        capacity: buildingInfo.capacity,
        space: buildingInfo.space,
        id: buildingInfo.id
      }
    });
  }

  loseMoney(purchaseTotal) {
    this.setState(prevState => ({
      money: prevState.money - purchaseTotal
    }));
  }

  render() {
    return (
      <div>
        <MapSystem
          setBuilding={this.setBuilding}
          building={this.state.building}
          ownedBuildings={this.state.ownedBuildings}
        />
        <div className="right_block">
          <Calendar days={this.state.days} />
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
            deferLoanPayment={this.deferLoanPayment}
            credit={this.state.credit}
            money={this.state.money}
            loanPay={this.loanPay}
            days={this.state.days}
            loanPayment={this.state.loanPayment}
          />
        </div>
        <Building
          buildingSpots={this.state.buildingSpots}
          employeesHired={this.state.employeesHired}
          setBuildingSpots={this.setBuildingSpots}
          name={this.state.building.name}
          space={this.state.building.space}
          capacity={this.state.building.capacity}
          price={this.state.building.price}
          id={this.state.building.id}
        />
        <div className="business_assets">
          <Money
            money={this.state.money}
            income={this.state.income}
            loanPayment={this.state.loanPayment}
            salary={this.state.salary}
            monthlyPaybackValue={this.state.monthlyPaybackValue}
            days={this.state.days}
            totalEarnings={this.state.totalEarnings}
          />
        </div>
        <Hireables employees={employees} purchaseMe={this.purchaseMe} />
        <div className="left_block">
          <Bankrupt
            money={this.state.money}
            emergencyCash={this.emergencyCash}
          />
          <OwnedEstate ownedBuildings={this.state.ownedBuildings} />
          <Notification
            money={this.state.money}
            notificationMessage={this.state.notificationMessage}
          />
        </div>
        <div className="materials">
          <Materials
            addMoney={this.addMoney}
            loseMoney={ptotal => this.loseMoney(ptotal)}
            money={this.state.money}
            productivity={this.state.productivity}
          />
        </div>
      </div>
    );
  }
}
