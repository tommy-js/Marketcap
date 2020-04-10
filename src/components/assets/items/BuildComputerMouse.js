import React, { useState, useEffect } from "react";
import ComputerMouse from "./ComputerMouse";

function BuildComputerMouse(props) {
  const [mice, setMice] = useState(0);
  const [productivity, setProductivity] = useState(1500 / props.productivity);
  const [newvar, setNewvar] = useState(null);
  const [checkState, setCheckState] = useState(false);

  useEffect(() => {
    setComputerMouse(true);
  }, [props.productivity]);

  function setComputerMouse(checkMouse) {
    if (checkMouse == true) {
      let newvar = setInterval(ComputerMice, productivity);
      setNewvar(newvar);
    }
    if (checkMouse == false) {
      clearInterval(newvar);
      console.log("not passing");
    }
  }

  function ComputerMice() {
    if (
      props.totalGlass >= 1 &&
      props.totalAluminum >= 2 &&
      props.totalPlastic >= 4
    ) {
      props.removeGlass(1);
      props.removePlastic(4);
      props.removeAluminum(2);
      setMice(prev => prev + 1);
      console.log("working");
    } else {
      clearInterval(newvar);
    }
  }

  function sellComputerMouse(sellAmount) {
    if (mice >= sellAmount) {
      setMice(prev => prev - sellAmount);
      props.micePayment(sellAmount);
    }
  }

  function autoSell() {
    if (mice > 0) {
      props.micePayment(mice);
      setMice(0);
    }
  }

  function sellAll() {
    props.micePayment(mice);
    setMice(0);
  }

  return (
    <div>
      <ComputerMouse
        totalGlass={props.totalGlass}
        totalPlastic={props.totalPlastic}
        totalAluminum={props.totalAluminum}
        mousePrice={props.mousePrice}
        mice={mice}
        setComputerMouse={setComputerMouse}
        sellComputerMouse={sellComputerMouse}
        autoSell={autoSell}
        sellAll={sellAll}
      />
    </div>
  );
}

export default BuildComputerMouse;
