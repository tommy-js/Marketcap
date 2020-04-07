import React from "react";

function GetRealEstate(props) {
  const building = {
    name: props.name,
    space: props.space,
    capacity: props.capacity,
    price: props.price
  };
  return (
    <div>
      <p>Location: {building.name}</p>
      <p>Square feet: {building.space}</p>
      <p>Capacity: {building.capacity}</p>
      <p>Cost: {building.price}</p>
      <button onClick={() => props.setBuildingSpots(building)}>Buy</button>
      <button>Rent</button>
    </div>
  );
}

export default GetRealEstate;
