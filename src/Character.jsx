import React, { useState } from "react";

function Character(props) {
  // prettier-ignore
  const { image, name, id, setCharacters, characters, gameOver, shuffle } = props;
  // naClick :
  // proverim je li trenutna kartica kliknuta
  //  ako jeste:
  // proveri je li current score veci od high score
  // ako jeste ostavi da je high score current score
  //  game over u suprotnom stavi da je kliknuta i onda shuffle

  // osim toga imam useEffect koji se pokrece kad god se stanje kartica promeni
  // on proverava score
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
