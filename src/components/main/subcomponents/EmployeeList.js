import React from "react";
import Employee from "../../assets/Employee.js";

function CompanyList(props) {
  return (
    <div>
      {props.assets.map(el => (
        <Employee
          id={el.id}
          salary={el.salary}
          fireEmployee={props.fireEmployee}
        />
      ))}
    </div>
  );
}

export default CompanyList;
