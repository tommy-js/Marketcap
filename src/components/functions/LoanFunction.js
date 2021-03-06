import React, { useState, useEffect } from "react";
import DeferPayment from "./DeferPayment";

function LoanFunction(props) {
  const [loanCounter, setLoanCounter] = useState(0);
  const [disabledController, setDisabledController] = useState(false);
  const [loanMonthly, setLoanMonthly] = useState(0);
  const [loanCheck, setLoanCheck] = useState(0);
  const [identifier, setIdentifier] = useState("");
  const [checkChanger, setCheckChanger] = useState(true);
  const [creditCheck, setCreditCheck] = useState(props.credit);
  const [newDisplay, setDisplay] = useState("block");
  const [showDefer, setDefer] = useState(true);
  const [letUpdate, setLetUpdate] = useState(true);
  const [showDeferButton, setDeferButton] = useState("block");

  function updateInput(e) {
    setLoanCounter(e.target.value);
  }
  function submitInput() {
    if (loanCounter <= creditCheck) {
      props.lTakeout(loanCounter);
      setLoanMonthly(0.05 * loanCounter);
    } else {
      props.lTakeout(creditCheck);
      setLoanMonthly(0.05 * creditCheck);
      setLoanCounter(creditCheck);
      console.log(loanCounter);
    }
  }

  function changePaybackAmount(e) {
    setLoanCheck(e.target.value);
    console.log(props.totalLoans);
  }

  function submitPaybackAmount() {
    const checker = 0.05 * creditCheck;
    if (loanCheck <= loanCounter && loanCheck > checker) {
      props.submitPaybackAmount(loanCheck);
      setLoanMonthly(loanCheck);
    } else if (loanCheck < checker) {
      props.submitPaybackAmount(checker);
      setLoanMonthly(checker);
    } else {
      props.submitPaybackAmount(loanCounter);
      setLoanMonthly(loanCounter);
    }
    setCheckChanger(true);
  }

  function deferPayment() {
    setDeferButton("none");
    props.deferLoanPayment();
  }

  let x;
  if (props.totalLoans == 0) {
    x = true;
  } else {
    x = false;
  }

  function closeLoan(x) {
    if (props.totalLoans == 0) {
      setDisplay("none");
      let passCredit = creditCheck * 0.3 + 2000;
      props.updateCredit(passCredit);
      console.log(passCredit);
      props.dropLoan();
    } else {
      setDisplay("block");
    }
  }

  if (checkChanger === true) {
    if (loanMonthly > 1000000) {
      if (loanMonthly > 1000000000) {
        setLoanMonthly(loanMonthly / 1000000000);
        setIdentifier("B");
      } else {
        setLoanMonthly(loanMonthly / 1000000);
        setIdentifier("M");
      }
    } else if (loanMonthly < 10000000) {
      setIdentifier("");
    }
    setCheckChanger(false);
  }

  if (props.termComplete == true) {
    setDisabledController(false);
  }

  return (
    <div style={{ display: newDisplay }}>
      <p>Take out loan</p>
      <input
        type="text"
        disabled={disabledController}
        onChange={e => updateInput(e)}
      />
      <button disabled={disabledController} onClick={submitInput}>
        Submit
      </button>
      <p>
        Your loan rate is 5%. Your monthly payment is $
        {loanMonthly.toLocaleString()}
        {identifier}
      </p>
      <input type="text" onChange={e => changePaybackAmount(e)} />
      <button type="text" onClick={submitPaybackAmount}>
        Set loan payback amount
      </button>
      <button onClick={x => closeLoan(x)}>Close Loan</button>
      <DeferPayment
        deferPayment={deferPayment}
        showDefer={showDefer}
        showDeferButton={showDeferButton}
        credit={props.credit}
      />
    </div>
  );
}

export default LoanFunction;
