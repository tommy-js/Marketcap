import React, { useRef, useState, useEffect } from "react";
import ComputerChip from "./ComputerChip";

function BuildComputerChip(props) {
  const [chips, setChips] = useState(0);
  const [productivity, setProductivity] = useState(6000 / props.productivity);
  const prod = useRef(productivity);
  prod.current = productivity;
  const [newvar, setNewvar] = useState(null);
  const [checkState, setCheckState] = useState(false);

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      console.log("logged first");
      return;
    } else {
      clearInterval(newvar);
      console.log("logged second");
      setCPUChips(true, prod.current);
    }
  }, [props.productivity]);

  function setCPUChips(checkCPU, refs) {
    if (checkCPU == true) {
      let newvar = setInterval(CPUChips, refs);
      setNewvar(newvar);
      setCheckState(true);
    }
    if (checkCPU == false) {
      clearInterval(newvar);
      console.log("not passing");
    }
  }

  function CPUChips() {
    console.log(newvar);
    if (
      props.totalGlass >= 1 &&
      props.totalAluminum >= 5 &&
      props.totalPlastic >= 2
    ) {
      props.removeGlass(1);
      props.removePlastic(2);
      props.removeAluminum(5);
      setChips(prev => prev + 1);
      console.log("working");
    } else {
      clearInterval(newvar);
    }
  }

  function sellCPUChip(sellAmount) {
    if (chips >= sellAmount) {
      setChips(prev => prev - sellAmount);
      props.chipsPayment(sellAmount);
    }
  }

  function autoSell() {
    if (chips > 0) {
      let chipVal = chips;
      setChips(0);
      props.chipsPayment(chipVal);
    }
  }

  function sellAll() {
    let chipVal = chips;
    setChips(0);
    props.chipsPayment(chipVal);
  }

  return (
    <div>
      <ComputerChip
        totalGlass={props.totalGlass}
        totalAluminum={props.totalAluminum}
        totalPlastic={props.totalPlastic}
        chipPrice={props.chipPrice}
        chips={chips}
        setCPUChips={setCPUChips}
        sellCPUChip={sellCPUChip}
        autoSell={autoSell}
        sellAll={sellAll}
      />
    </div>
  );
}

export default BuildComputerChip;
