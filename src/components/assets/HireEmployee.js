import React, { useState } from "react";

function HireEmployee(props) {
  const [display, setDisplay] = useState("block");
  const individual = {
    name: props.name,
    salary: Math.floor(props.salary * 100) / 100,
    value: props.value,
    profession: props.profession
  };

  function passToHireables(individual) {
    props.purchaseMe(individual);
    props.setNewEmployees();
    setDisplay("none");
  }

  return (
    <div style={{ display: display }}>
      <div>
        Name: {individual.name}, {individual.profession}
      </div>
      <div>Salary: ${individual.salary}</div>
      <button onClick={() => passToHireables(individual)}>Hire</button>
    </div>
  );
}

export default HireEmployee;
