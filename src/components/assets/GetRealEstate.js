import React from "react";
import "../../main.scss";
import group from "../images/icons/group.png";
import cost from "../images/icons/money.png";

function GetRealEstate(props) {
  const building = {
    name: props.name,
    price: props.price,
    capacity: props.capacity,
    space: props.space,
    id: props.id
  };

  function setBuildingSpots() {
    props.setBuildingSpots(building);
  }

  return (
    <div>
      <p>{building.name}</p>
      <p className="info_container">
        <img className="small_icon" src={group} />
        {building.capacity}
      </p>

      <p className="info_container">
        <img className="small_icon" src={cost} />
        {building.price.toLocaleString()}
      </p>
      <button onClick={() => props.setBuildingSpots(building)}>Buy</button>
      <button>Rent</button>
    </div>
  );
}

export default GetRealEstate;
