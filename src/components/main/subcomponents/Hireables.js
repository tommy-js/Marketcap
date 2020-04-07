import React, { useState } from "react";
import HireEmployee from "../../assets/HireEmployee";
import employees from "./employees";

function Hireables(props) {
  const [mapper, setMapper] = useState(employees.slice(0, 4));
  function setNewEmployees() {
    console.log("set");
    setMapper([]);
    for (let x = 0; x < 3; x++) {
      let p = Math.floor(Math.random() * 6);
      // mapper.push(employees[p]);
      setMapper([...mapper, employees[p]]);
    }
  }

  return (
    <div>
      {mapper.map(el => (
        <HireEmployee
          name={el.name}
          salary={el.salary}
          value={el.value}
          key={el.id}
          profession={el.profession}
          purchaseMe={props.purchaseMe}
          setNewEmployees={setNewEmployees}
        />
      ))}
    </div>
  );
}

export default Hireables;
