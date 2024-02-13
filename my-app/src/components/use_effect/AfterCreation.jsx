import { useEffect, useState } from "react";

export default function AfterCreation() {
  let [firstName, setFirstName] = useState("");
  let [count, setCount] = useState(0);
  let [increment, setIncrement] = useState(1); // Default increment value is 1

  function handlePlusBTN() {
    setCount(count + increment); // Increment count by the specified increment value
  }

  function handleMinusBTN() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0); // Reset count to zero
    setIncrement(1);
  }

  function handleIncrementChange(event) {
    setIncrement(parseInt(event.target.value) || 1); // Parse input value as integer or default to 1
  }

  const setTitle = (e) => {
    setFirstName(e.target.value);
    console.log("Title Used");
  };
  // function effectCode() {
  //   console.log("I will Run after the Render");
  // }
  // useEffect(effectCode, []);
  // console.log("I was Rendered");
  const updateTitle = () => {
    console.log("Use Effect Runs");
    document.title = `Title : ${firstName}`;
  };

  useEffect(updateTitle, [firstName]);
  console.log("Render");

  return (
    <>
      <h1>Input Example</h1>
      <input type="text" onChange={setTitle} value={firstName} />
      <div className="counterClass">
        <h1>Counter : {count}</h1>
        <input
          type="number"
          value={increment}
          onChange={handleIncrementChange}
        />
        <button className="btn" onClick={handlePlusBTN}>
          +
        </button>
        <button className="btn" onClick={handleMinusBTN}>
          -
        </button>
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
}
