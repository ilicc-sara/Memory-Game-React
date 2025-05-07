import React, { useState, useEffect } from "react";

function Character(props) {
  const { image, name } = props;
  return (
    <article class="character">
      <img class="character-img" src={image} alt="character-image" />
      <h6>{name}</h6>
    </article>
  );
}

export default Character;
