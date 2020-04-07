import React from "react";

function Building(props) {
  return (
    <div>
      <div>
        You have filled {props.employeesHired}/{props.buildingSpots}
      </div>
    </div>
  );
}

export default Building;
