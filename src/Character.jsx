import React, { useState } from "react";

function Character(props) {
  const { image, name, id, setCharacters, characters } = props;

  function gameOver(id) {
    characters.find((character) => character.id === id).isClicked === true
      ? alert(
          "Game Over!",
          setCharacters((prev) => {
            return prev.map((character) => {
              return { ...character, isClicked: false };
            });
          })
        )
      : "";

    // setCharacters((prev) => {
    //   return prev.map((character) => {
    //     return { ...character, isClicked: false };
    //   });
    // });
  }

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <article
      class="character"
      onClick={() => {
        setCharacters((prev) => {
          shuffle(prev);

          return prev.map((character) =>
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
