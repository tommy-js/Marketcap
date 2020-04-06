import React, { useState } from "react";

function HireEmployee(props) {
  const [display, setDisplay] = useState("block");
  const individual = {
    name: props.name,
    salary: props.salary,
    value: props.value
  };

  function passToHireables(individual) {
    props.purchaseMe(individual);
    props.setNewEmployees();
    setDisplay("none");
  }

  return (
    <div style={{ display: display }}>
      <div>Name: {individual.name}</div>
      <div>Salary: {individual.salary}</div>
      <div>Value: {individual.value}</div>
      <button onClick={() => passToHireables(individual)}>Hire</button>
    </div>
  );
}

export default HireEmployee;
