import React, { useState } from "react";

import "./Calculator.css";

import Button from "../components/Button";
import Display from "../components/Display";

export default () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperation] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);

  const clearMemory = () => {
    setDisplayValue("0");
    setClearDisplay(false);
    setOperation(null);
    setValues([0, 0]);
    setCurrent(0);
  };

  const changeOperation = operation => {
    console.log(operation);
  };

  const addDigit = n => {
    if (n == "." && displayValue.includes(".")) {
      console.log("have a point");
      return;
    }

    if (n == "." && displayValue === "0") {
      return;
    }

    const isClearDisplay = displayValue === "0" || clearDisplay;
    const currentValue = isClearDisplay ? "" : displayValue;
    setDisplayValue(currentValue + n);
    setClearDisplay(false);

    console.log(isClearDisplay, currentValue);
  };

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <Button label="AC" click={() => clearMemory()} triple />
      <Button label="/" click={() => changeOperation("/")} operation />
      <Button label="7" click={() => addDigit("7")} />
      <Button label="8" click={() => addDigit("8")} />
      <Button label="9" click={() => addDigit("9")} />
      <Button label="*" click={() => changeOperation("*")} operation />
      <Button label="4" click={() => addDigit("4")} />
      <Button label="5" click={() => addDigit("5")} />
      <Button label="6" click={() => addDigit("6")} />
      <Button label="-" click={() => changeOperation("-")} operation />
      <Button label="1" click={() => addDigit("1")} />
      <Button label="2" click={() => addDigit("2")} />
      <Button label="3" click={() => addDigit("3")} />
      <Button label="+" click={() => changeOperation("+")} operation />
      <Button label="0" click={() => addDigit("0")} double />
      <Button label="." click={() => addDigit(".")} />
      <Button label="=" click={() => changeOperation("=")} operation />
    </div>
  );
};
