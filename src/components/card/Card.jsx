import React, { useState } from 'react';

import '../card/card.scss';

const Card = () => {
  const [showinput, setShowinput] = useState(false);
  const handleShowMenu = () => {
    // Toggle show menu in phone devices
    setShowinput(!showinput);
  };

  return (
    <div className="card vertical-center">
      <div className="card__header" onClick={() => handleShowMenu()}>
        <span className="card__nickname">Nickname</span>
        <span>Fecha de publicacion</span>
      </div>
      <div className="card__body" onClick={() => handleShowMenu()}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quo
        quaerat distinctio, eum nihil unde esse neque voluptates dolor
        architecto? Dolore, et excepturi. Officia, dicta nesciunt vitae labore
        suscipit odit?
      </div>
      {showinput ? (
        <div className="card__input-field horizontal-center">
          {/* <button className="button">gipthy</button> */}
          <input
            className="card__input"
            type="text"
            placeholder="escribe un comentario"
          ></input>
          <button className="button">Enviar</button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Card;
