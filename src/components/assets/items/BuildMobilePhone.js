import React, { useState, useEffect } from "react";
import MobilePhone from "./MobilePhone";

function BuildMobilePhone(props) {
  const [phones, setPhones] = useState(0);
  const [productivity, setProductivity] = useState(3000 / props.productivity);
  const [newvar, setNewvar] = useState(null);
  const [checkState, setCheckState] = useState(false);

  useEffect(() => {
    setMobilePhone(true);
  }, [props.productivity]);

  function setMobilePhone(checkPhones) {
    if (checkPhones == true) {
      let newvar = setInterval(MobilePhones, productivity);
      setNewvar(newvar);
    }
    if (checkPhones == false) {
      clearInterval(newvar);
      console.log("not passing");
    }
  }

  function MobilePhones() {
    if (
      props.totalGlass >= 5 &&
      props.totalAluminum >= 3 &&
      props.totalPlastic >= 2
    ) {
      props.removeGlass(5);
      props.removePlastic(2);
      props.removeAluminum(3);
      setPhones(prev => prev + 1);
      console.log("working");
    } else {
      clearInterval(newvar);
    }
  }

  function sellMobilePhone(sellAmount) {
    if (phones >= sellAmount) {
      setPhones(prev => prev - sellAmount);
      props.phonesPayment(sellAmount);
    }
  }

  function autoSell() {
    if (phones > 0) {
      let phoneVal = phones;
      setPhones(0);
      props.phonesPayment(phoneVal);
    }
  }

  function sellAll() {
    this.props.phonesPayment(phones);
    setPhones(0);
  }

  return (
    <div>
      <MobilePhone
        totalGlass={props.totalGlass}
        totalAluminum={props.totalAluminum}
        totalPlastic={props.totalPlastic}
        phonePrice={props.phonePrice}
        phones={phones}
        setMobilePhone={setMobilePhone}
        sellMobilePhone={sellMobilePhone}
        autoSell={autoSell}
        sellAll={sellAll}
      />
    </div>
  );
}

export default BuildMobilePhone;
