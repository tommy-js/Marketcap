import React, { Component, prevState } from "react";
import Assets from "./subcomponents/Assets";
import Income from "./subcomponents/Income";
import Expenses from "./subcomponents/Expenses";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 1000,
      expenses: 0,
      assets: [
        {
          title: null
        }
      ],
      gamestate: true
    };
    this.purchaseMe = this.purchaseMe.bind(this);
  }

  purchaseMe(cost) {
    console.log(cost);
    if (this.state.money >= cost) {
      this.setState(prevState => ({
        money: prevState.money - cost
      }));
      this.setState({ assets: { title: "company" } });
    } else {
      console.log("too expensive!");
    }
  }

  render() {
    return (
      <div>
        <Assets assets={this.state.assets.title} purchaseMe={this.purchaseMe} />
        <Income money={this.state.money} />
        <Expenses expenses={this.state.expenses} />
      </div>
    );
  }
}
