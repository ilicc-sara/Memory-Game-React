import React, { useState, useEffect } from "react";
import "./App.css";
// import Counter from "./Counter";
// import ToDoList from "./ToDoList";
import Character from "./Character.jsx";

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
  const [characters, setCharacters] = useState(info);

  const [highScore, setHighScore] = useState(0);

  // const [showModal, setShowModal] = useState(false);

  const [isWrongGuess, setIsWrongGuess] = useState(false);

  function showNumberOfClicked() {
    return characters.filter((character) => character.isClicked === true)
      .length;
  }

  const currentScore = showNumberOfClicked();

  // if (currentScore === characters.length) {
  //   setShowModal(true);
  // }

  const isGameOver =
    characters.every((character) => character.isClicked === true) ||
    isWrongGuess;

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    return () => {
      if (currentScore > highScore) setHighScore(currentScore);
    };
  }, [currentScore]);

  if (isGameOver)
    return (
      (<div className="overlay"></div>),
      (
        <div className="modal">
          <h3>
            {currentScore === characters.length ? "You Won!" : "Game Over!"}
          </h3>
          <p>Your Score: {currentScore}</p>
          <button
            className="play-again-btn"
            onClick={() => {
              setIsWrongGuess(false);
              return setCharacters((prev) => {
                return prev.map((character) => {
                  return { ...character, isClicked: false };
                });
              });
            }}
          >
            Play Again?
          </button>
        </div>
      )
    );

  return (
    <>
      <h1>Rick and Morty memory game</h1>

      <div className="section">
        <div className="btns-cont">
          <button className="btn btn-current">
            Current score: <span>{currentScore}</span>
          </button>{" "}
          <button className="btn btn-high">
            High score: <span>{highScore}</span>
          </button>
        </div>
        <div className="characters-cont">
          {characters.map((character, index) => (
            <Character
              key={index}
              {...character}
              characters={characters}
              setCharacters={setCharacters}
              shuffle={shuffle}
              setIsWrongGuess={setIsWrongGuess}
            />
          ))}
        </div>
      </div>

      {/* {showModal && <div className="overlay"></div>} */}
    </>
  );
}

export default App;
