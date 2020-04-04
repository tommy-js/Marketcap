import React, { Component } from "react";
import "../../../main.css";

function Money(props) {
  let money = props.money;
  money = Math.round(money * 100) / 100;
  return <div>Your total money: ${money}</div>;
}

export default Money;
