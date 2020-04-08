import React, { Component } from "react";
import MillIncomeNotification from "./specific_notifications/MillIncomeNotification";
import IncomeNotification from "./specific_notifications/IncomeNotification";
import GeneralNotification from "./specific_notifications/GeneralNotification";

export default class NotificationSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calledMillionaire: false,
      millFunc: {
        changeMillionaireStat: this.changeMillionaireStat
      }
    };
    this.changeMillionaireStat = this.changeMillionaireStat.bind(this);
  }

  changeMillionaireStat(boolVar) {
    this.setState({ calledMillionaire: true });
  }

  render() {
    const { money } = this.props;
    if (money > 1000000 && this.state.calledMillionaire == false) {
      return (
        <div>
          <MillIncomeNotification
            message="You are now a millionaire!"
            changeMillionaireStat={this.changeMillionaireStat}
          />
        </div>
      );
    } else if (money <= 0) {
      return (
        <div>
          <IncomeNotification message="You are bankrupt!" />
        </div>
      );
    } else if (this.props.notificationMessage != "") {
      return (
        <div>
          <GeneralNotification message={this.props.notificationMessage} />
        </div>
      );
    } else {
      return null;
    }
  }
}
