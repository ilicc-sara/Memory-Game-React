import React, { useState } from "react";

function Character(props) {
  // prettier-ignore
  const { image, name, id, setCharacters, characters, gameOver, shuffle, setIsWrongGuess } = props;

  function checkIfClicked(id) {
    if (characters.find((character) => character.id === id).isClicked) {
      setIsWrongGuess(true);
    }
  }

  return (
    <article
      class="character"
      onClick={() => {
        checkIfClicked(id);
        setCharacters((prev) => {
          const newCharacters = shuffle(prev);
          // shuffle(prev);
          return newCharacters.map((character) =>
            character.id === id ? { ...character, isClicked: true } : character
          );
        });
        gameOver(id);
      }}
    >
      <span class="character-img-cont">
        <img class="character-img" src={image} alt="character-image" />
      </span>
      <h5>{name}</h5>
    </article>
  );
}

export default Character;
