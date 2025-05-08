import React, { useState } from "react";

function Character(props) {
  // prettier-ignore
  const { image, name, id, setCharacters, characters, gameOver, shuffle } = props;

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
