import React from "react";
import Employee from "../../assets/Employee.js";

function CompanyList(props) {
  return (
    <div>
      {props.assets.map(el => (
        <Employee
          id={el.id}
          name={el.name}
          salary={el.salary}
          value={el.value}
          fireEmployee={props.fireEmployee}
        />
      ))}
    </div>
  );
}

export default CompanyList;
