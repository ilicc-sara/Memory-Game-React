import React, { useState, useEffect } from "react";
import "./App.css";
// import Counter from "./Counter";
// import ToDoList from "./ToDoList";

const info = [
  {
    name: "Gear Head",
    id: 1,
    image: "./images/gearHead.png",
    isClicked: false,
  },
  {
    name: "Snuffles",
    id: 2,
    image: "./images/snuffles.png",
    isClicked: false,
  },
  {
    name: "Abrodolph Lincoler",
    id: 3,
    image: "./images/abrodolphLincoler.png",
    isClicked: false,
  },
  {
    name: "Bird Person",
    id: 4,
    image: "./images/birdPerson.png",
    isClicked: false,
  },
  {
    name: "Coach Feratu",
    id: 5,
    image: "./images/coachFeratu.png",
    isClicked: false,
  },
  {
    name: "Doofus Rick",
    id: 6,
    image: "./images/doofusRick.png",
    isClicked: false,
  },
  {
    name: "Krombopulos Michael",
    id: 7,
    image: "./images/krombopulosMichael.png",
    isClicked: false,
  },
  {
    name: "President Curtis",
    id: 8,
    image: "./images/presidentCurtis.png",
    isClicked: false,
  },
  {
    name: "Prince Nebulon",
    id: 9,
    image: "./images/princeNebulon.png",
    isClicked: false,
  },
  {
    name: "Rick Sanchez",
    id: 10,
    image: "./images/rickSanchez.png",
    isClicked: false,
  },
  {
    name: "Scarry Terry",
    id: 11,
    image: "./images/scarryTerry.png",
    isClicked: false,
  },
  {
    name: "Squanchy",
    id: 12,
    image: "./images/squanchy.png",
    isClicked: false,
  },
];

function App() {
  // const [showCounter, setShowCounter] = useState(false);
  return (
    <>
      {/* <h1>Our Counter</h1>
      <button onClick={() => setShowCounter((prev) => !prev)}>
        Show Counter
      </button>
      {showCounter && <Counter />}
      <ToDoList /> */}
    </>
  );
}

export default App;
