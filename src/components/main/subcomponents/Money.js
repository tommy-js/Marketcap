import React, { Component } from "react";
import Income from "./Income";
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

  function restart() {
    window.location.reload();
  }
  let mon = money.toLocaleString();
  if (money > 0) {
    return (
      <div>
        Your total money: ${mon}
        {identifier}
        <Income
          income={props.income}
          loanPayment={props.loanPayment}
          salary={props.salary}
          monthlyPaybackValue={props.monthlyPaybackValue}
        />
      </div>
    );
  } else {
    return (
      <div>
        <p>You are bankrupt!</p>
        <button onClick={restart}>Start Over</button>
      </div>
    );
  }
}

export default Money;
