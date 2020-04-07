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
    this.autoSell = this.autoSell.bind(this);
    this.sellAll = this.sellAll.bind(this);
  }

  setMobilePhone(checkPhones) {
    if (checkPhones == true) {
      let newvar = setInterval(
        this.MobilePhone,
        5000 / this.props.productivity
      );
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

  autoSell() {
    if (this.state.phones > 0) {
      let phoneVal = this.state.phones;
      this.setState({
        phones: 0
      });
      this.props.phonesPayment(phoneVal);
    }
  }

  sellAll() {
    let phoneVal = this.state.phones;
    this.setState({ phones: 0 });
    this.props.phonesPayment(phoneVal);
  }

  render() {
    return (
      <div>
        <MobilePhone
          phonePrice={this.props.phonePrice}
          phones={this.state.phones}
          setMobilePhone={this.setMobilePhone}
          sellMobilePhone={this.sellMobilePhone}
          autoSell={this.autoSell}
          sellAll={this.sellAll}
        />
      </div>
    );
  }
}
