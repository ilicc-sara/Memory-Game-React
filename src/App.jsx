import React, { useState, useEffect } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <>
      <h1>Our Counter</h1>
      <button onClick={() => setShowCounter((prev) => !prev)}>
        Show Counter
      </button>
      {showCounter && <Counter />}
    </>
  );
}

export default App;
