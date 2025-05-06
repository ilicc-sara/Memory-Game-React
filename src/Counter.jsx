import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // // componentDidMount
  // useEffect(() => {
  //   console.log("The use effect ran");
  // }, []);

  // // componentDidUpdate
  // useEffect(() => {
  //   console.log("The use effect ran");
  // }, [count, count2]);

  // // componentWillUnmount
  // useEffect(() => {
  //   console.log("The use effect ran");
  //   return () => {
  //     console.log("the return is being run");
  //   };
  // }, []);

  useEffect(() => {
    console.log("The use effect ran");
  });

  return (
    <div>
      <h6> Counter </h6>
      <p> current count: {count} </p>
      {/* <p> current count: {count2} </p> */}
      <button onClick={() => setCount(count + 1)}> increment the count</button>
      {/* <button onClick={() => setCount2(count2 + 1)}>
        {" "}
        increment the count2
      </button> */}
    </div>
  );
};

export default Counter;
