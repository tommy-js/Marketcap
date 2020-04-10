import React, { Component, prevState } from "react";
import Glass from "./materials/Glass";
import Aluminum from "./materials/Aluminum";
import Plastic from "./materials/Plastic";
import Goods from "./Goods";
import "../../main.scss";

export default class Materials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glassPrice: 1.5,
      aluminumPrice: 2.5,
      plasticPrice: 0.5,
      totalGlass: 0,
      totalAluminum: 0,
      totalPlastic: 0
    };
  }

  addPlastic(passedMat) {
    console.log(passedMat);
    let material = Number(passedMat);
    let purchaseTotal = material * this.state.plasticPrice;
    if (this.props.money > purchaseTotal) {
      this.setState(prevState => ({
        totalPlastic: prevState.totalPlastic + material
      }));
      this.props.loseMoney(purchaseTotal);
    }
  }

  addAluminum(passedMat) {
    console.log(passedMat);
    let material = Number(passedMat);
    let purchaseTotal = material * this.state.aluminumPrice;
    if (this.props.money > purchaseTotal) {
      this.setState(prevState => ({
        totalAluminum: prevState.totalAluminum + material
      }));
      this.props.loseMoney(purchaseTotal);
    }
  }

  addGlass(passedMat) {
    let material = Number(passedMat);
    let purchaseTotal = material * this.state.glassPrice;
    if (this.props.money > purchaseTotal) {
      this.setState(prevState => ({
        totalGlass: prevState.totalGlass + material
      }));
      this.props.loseMoney(purchaseTotal);
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

  render() {
    return (
      <div>
        <div className="materials_block">
          <Plastic addPlastic={mat => this.addPlastic(mat)} />
          <Aluminum addAluminum={mat => this.addAluminum(mat)} />
          <Glass addGlass={mat => this.addGlass(mat)} />
        </div>
        <Goods
          totalGlass={this.state.totalGlass}
          totalAluminum={this.state.totalAluminum}
          totalPlastic={this.state.totalPlastic}
          removeGlass={mat => this.removeGlass(mat)}
          removeAluminum={mat => this.removeAluminum(mat)}
          removePlastic={mat => this.removePlastic(mat)}
          addMoney={this.props.addMoney}
          productivity={this.props.productivity}
        />
      </div>
    );
  }
}
