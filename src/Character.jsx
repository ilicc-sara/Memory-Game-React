import React, { useState, useEffect } from "react";

function Character(props) {
  const { image, name } = props;
  return (
    <article class="character">
      <span class="character-img-cont">
        <img class="character-img" src={image} alt="character-image" />
      </span>
      <h5>{name}</h5>
    </article>
  );
}

export default Character;
