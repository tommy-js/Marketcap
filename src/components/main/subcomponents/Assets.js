import React, { prevState, useState, useEffect, useRef } from "react";
import PurchaseFunction from "../../functions/PurchaseFunction";
import EmployeeList from "./EmployeeList";
import Loans from "../../assets/Loans.js";
import Credit from "./Credit";
import "../../../main.scss";

function Assets(props) {
  const [money, setMoney] = useState(0);
  const [loans, setLoans] = useState(0);
  const loanRef = useRef(loans);
  loanRef.current = loans;

  const [loanPayment, setLoanPayment] = useState(0);
  const [credit, setCredit] = useState(props.credit);
  const [loanDefer, setLoanDefer] = useState(false);
  const [dateOfDeferment, setDateOfDeferment] = useState(null);

  useEffect(() => {
    setInterval(() => loanPay(loanRef.current), 10000);
  }, []);

  function loanPay(e) {
    console.log(e);
    if (loanDefer == false) {
      setMoney(props.money - loanPayment);

      let bulletin = {
        thisMoney: props.money - loanPayment,
        thisLoans: e - loanPayment,
        thisLoanPayment: e * 0.05
      };

      console.log("bulletin loan payment:" + bulletin.thisLoanPayment);
      props.loanPay(bulletin);
    }
  }

  function deferLoanPayment() {
    setLoanDefer(true);
    setDateOfDeferment(props.days);
    setCredit(credit - 1000);
    setTimeout(() => {
      setLoanDefer(false);
    }, 180000);
    props.deferLoanPayment(credit);
  }

  function lTakeout(e) {
    const addedLoans = Number(e);
    const totalLoans = addedLoans * 0.05;
    let var1 = loans;
    let var2 = money;
    let var3 = loanPayment;

    setMoney(var2 + var1);
    setLoans(loans => loans + e);
    setLoanPayment(var3 + totalLoans);

    let bulletin = {
      thisMoney: var2 + var1,
      thisLoans: var1 + addedLoans,
      thisLoanPayment: var3 + totalLoans
    };

    props.loanTakeout(bulletin);
  }

  function submitPaybackAmount(loanPaybackAmount) {
    setLoanPayment(loanPaybackAmount);
  }

  return (
    <div>
      <div className="loans">
        <Credit credit={props.credit} />
        <div>
          Note that you can defer payment for 3 months so long as your credit is
          above 10,000. Your credit is currently {props.credit}. Reduces credit
          by 1,000 points.
        </div>

        <Loans
          lTakeout={lTakeout}
          submitPaybackAmount={submitPaybackAmount}
          credit={credit}
          termComplete={props.termComplete}
          updateCredit={props.updateCredit}
          deferLoanPayment={deferLoanPayment}
          loans={loans}
        />
        <div className="employee_list">
          <EmployeeList
            assets={props.assets}
            fireEmployee={props.fireEmployee}
          />
        </div>
      </div>
    </div>
  );
}

export default Assets;
