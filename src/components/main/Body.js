import React, { Component, prevState } from "react";
import "../../main.css";
import Assets from "./subcomponents/Assets";
import Income from "./subcomponents/Income";
import Expenses from "./subcomponents/Expenses";
import Money from "./subcomponents/Money";
import Credit from "./subcomponents/Credit";
import Hireables from "./subcomponents/Hireables";
import Calendar from "../calculations/Calendar";
import Building from "../assets/Building";
import Bankrupt from "./subcomponents/Bankrupt";
import Goods from "../assets/Goods";
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
      money: 100000000,
      expenses: 0,
      salary: 0,
      income: 0,
      productivity: 1,
      loans: 0,
      loanPayment: 0,
      monthlyPaybackValue: 0,
      credit: 5000,
      days: 0,
      buildingSpots: 5,
      employeesHired: 0,
      glassPrice: 4,
      aluminumPrice: 7,
      plasticPrice: 2.5,
      totalGlass: 0,
      totalAluminum: 0,
      totalPlastic: 0,
      termComplete: false,
      loanDefer: false,
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
    this.submitPaybackAmount = this.submitPaybackAmount.bind(this);
    this.updateCredit = this.updateCredit.bind(this);
    this.fireEmployee = this.fireEmployee.bind(this);
    this.deferLoanPayment = this.deferLoanPayment.bind(this);
    this.emergencyCash = this.emergencyCash.bind(this);
    this.addMoney = this.addMoney.bind(this);
    this.setBuildingSpots = this.setBuildingSpots.bind(this);
    this.addPlastic = this.addPlastic.bind(this);
    this.addAluminum = this.addAluminum.bind(this);
    this.addGlass = this.addGlass.bind(this);
    this.removeGlass = this.removeGlass.bind(this);
    this.removeAluminum = this.removeAluminum.bind(this);
    this.removePlastic = this.removePlastic.bind(this);
    this.setBuilding = this.setBuilding.bind(this);
  }

  componentDidMount() {
    setInterval(this.updateMoney, 100);
    setInterval(this.salaryPayment, 14000);
    setInterval(this.loanPay, 10000);
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

  loanPay() {
    if (this.state.loanDefer == false) {
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

  deferLoanPayment() {
    this.setState({ loanDefer: true, dateOfDeferment: this.state.days });
    this.setState(prevState => ({
      credit: prevState.credit - 1000
    }));
    setTimeout(() => {
      this.setState({ loanDefer: false });
    }, 180000);
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
      money: prevState.money + addAmount
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

  addPlastic(passedMat) {
    let material = Number(passedMat);
    let purchaseTotal = material * this.state.plasticPrice;
    if (this.state.money > purchaseTotal) {
      this.setState(prevState => ({
        money: prevState.money - purchaseTotal,
        totalPlastic: prevState.totalPlastic + material
      }));
    }
  }

  addAluminum(passedMat) {
    let material = Number(passedMat);
    let purchaseTotal = material * this.state.aluminumPrice;
    if (this.state.money > purchaseTotal) {
      this.setState(prevState => ({
        money: prevState.money - purchaseTotal,
        totalAluminum: prevState.totalAluminum + material
      }));
    }
  }

  addGlass(passedMat) {
    let material = Number(passedMat);
    let purchaseTotal = material * this.state.glassPrice;
    if (this.state.money > purchaseTotal) {
      this.setState(prevState => ({
        money: prevState.money - purchaseTotal,
        totalGlass: prevState.totalGlass + material
      }));
    }
  }

  removePlastic(passedMat) {
    let material = Number(passedMat);
    this.setState(prevState => ({
      totalPlastic: prevState.totalPlastic - material
    }));
  }

  removeAluminum(passedMat) {
    let material = Number(passedMat);
    this.setState(prevState => ({
      totalAluminum: prevState.totalAluminum - material
    }));
  }

  removeGlass(passedMat) {
    let material = Number(passedMat);
    this.setState(prevState => ({
      totalGlass: prevState.totalGlass - material
    }));
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
          <Money money={this.state.money} />
          <Income
            income={this.state.income}
            loanPayment={this.state.loanPayment}
            salary={this.state.salary}
          />
        </div>
        <Hireables employees={employees} purchaseMe={this.purchaseMe} />
        <div className="left_block">
          <Bankrupt
            money={this.state.money}
            emergencyCash={this.emergencyCash}
          />
          <OwnedEstate ownedBuildings={this.state.ownedBuildings} />
          <Goods
            totalGlass={this.state.totalGlass}
            totalAluminum={this.state.totalAluminum}
            totalPlastic={this.state.totalPlastic}
            removeGlass={this.removeGlass}
            removeAluminum={this.removeAluminum}
            removePlastic={this.removePlastic}
            addMoney={this.addMoney}
            productivity={this.state.productivity}
          />
          <Notification
            money={this.state.money}
            notificationMessage={this.state.notificationMessage}
          />
        </div>
        <div className="materials">
          <Materials
            addGlass={this.addGlass}
            addAluminum={this.addAluminum}
            addPlastic={this.addPlastic}
          />
        </div>
      </div>
    );
  }
}
