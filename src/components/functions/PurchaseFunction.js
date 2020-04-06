import React from "react";
import "../../main.css";
import employees from "../main/subcomponents/employees";

function PurchaseFunction(props) {
  let individualIndex = Math.floor(Math.random() * 5);
  let individual = employees[individualIndex];
  let salary = individual.salary;
  return (
    <div className="purchase_button">
      <button onClick={() => props.purchaseMe(individual)}>
        Hire employee
      </button>
    </div>
  );
}

export default PurchaseFunction;
