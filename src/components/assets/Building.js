import React from "react";
import RealEstate from "./RealEstate";
import "../../main.scss";

function Building(props) {
  return (
    <div className="building_block">
      <div>
        You have filled {props.employeesHired}/{props.buildingSpots}
      </div>
      <RealEstate setBuildingSpots={props.setBuildingSpots} />
    </div>
  );
}

export default Building;
