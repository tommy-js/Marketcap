import React from "react";
import "../../../main.css";

function Income(props) {
  let incomeVar =
    props.income * 7 - props.salary - props.monthlyPaybackValue / 4;
  let totalIncome = Math.abs(Math.floor(incomeVar * 100) / 100);

  return <div>Weekly payments: ${totalIncome}</div>;
}

export default Income;
