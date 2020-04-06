import React from "react";
import "../../../main.css";

function Income(props) {
  let incomeVar = props.income * 7 - props.salary - props.loanPayment;
  let totalIncome = incomeVar;

  return <div>Income per week: ${totalIncome}</div>;
}

export default Income;
