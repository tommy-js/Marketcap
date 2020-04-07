import React, { Component, prevState } from "react";
import MobilePhone from "./MobilePhone";

export default class BuildMobilePhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: 0
    };
    this.MobilePhone = this.MobilePhone.bind(this);
    this.setMobilePhone = this.setMobilePhone.bind(this);
    this.sellMobilePhone = this.sellMobilePhone.bind(this);
  }

  setMobilePhone(checkPhones) {
    if (checkPhones == true) {
      let newvar = setInterval(this.MobilePhone, 2000);
      this.setState({ newvar: newvar });
    }
    if (checkPhones == false) {
      clearInterval(this.state.newvar);
      console.log("not passing");
    }
  }

  MobilePhone() {
    this.setState(prevState => ({
      phones: prevState.phones + 1
    }));
    console.log("working");
  }

  sellMobilePhone(sellAmount) {
    if (this.state.phones >= sellAmount) {
      this.setState(prevState => ({
        phones: prevState.phones - sellAmount
      }));
      this.props.phonesPayment(sellAmount);
    }
  }

  render() {
    return (
      <div>
        <MobilePhone
          phones={this.state.phones}
          setMobilePhone={this.setMobilePhone}
          sellMobilePhone={this.sellMobilePhone}
          phonePrice={this.props.phonePrice}
        />
      </div>
    );
  }
}
