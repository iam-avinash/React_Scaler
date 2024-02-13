// import { useState } from "react";

// export default function Counter() {
//   //   let IncrementValue = 0;
//   let [count, setCount] = useState(0);

//   function handlePlusBTN() {
//     console.log("plus BTN Click");
//     setCount(count + 1);
//   }

//   function handleMinusBTN() {
//     console.log("Minus BTN Click");
//     setCount(count - 1);
//   }

//   function handleReset() {
//     console.log("Counter is Reseted to Zero");
//     setCount(0);
//   }

//   return (
//     <div>
//       <h1>Counter : {count}</h1>
//       {/* <textarea name="Increment" id=""></textarea> */}
//       <button onClick={handlePlusBTN}>+</button>
//       <button onClick={handleMinusBTN}>-</button>
//       <button onClick={handleReset}>Reset</button>
//       {/* <button onClick={handleReset}>Reset</button> */}
//     </div>
//   );
// }

import { useState } from "react";

export default function Counter() {
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

  return (
    <div className="counterClass">
      <h1>Counter : {count}</h1>
      <input type="number" value={increment} onChange={handleIncrementChange} />
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
  );
}
