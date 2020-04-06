import React, { Component } from "react";
import "../../../main.css";

function Money(props) {
  let money = props.money;
  let identifier = "";
  money = Math.round(money * 100) / 100;
  if (money > 1000000) {
    if (money > 1000000000) {
      money = money / 1000000000;
      identifier = "B";
    } else {
      money = money / 1000000;
      identifier = "M";
    }
  }
  let mon = money.toLocaleString();
  return (
    <div>
      Your total money: ${mon}
      {identifier}
    </div>
  );
}

export default Money;
