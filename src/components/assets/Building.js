import React from "react";
import RealEstate from "./RealEstate";

function Building(props) {
  return (
    <div style={{ position: "relative", float: "right" }}>
      <div>
        You have filled {props.employeesHired}/{props.buildingSpots}
      </div>
      <RealEstate setBuildingSpots={props.setBuildingSpots} />
    </div>
  );
}

export default Building;
