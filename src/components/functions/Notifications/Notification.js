import React, { Component } from "react";
import NotificationSystem from "./NotificationSystem";

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NotificationSystem money={this.props.money} />
      </div>
    );
  }
}
