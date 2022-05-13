import React, { useState } from 'react';

import './Card.css';

const CardInfluencer = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="card-container inf ">
      <div
        id="heart"
        className={isFavorite ? 'isFavorite' : 'notFavorite'}
        onClick={handleClickFavorite}
      ></div>
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        className="url-rapper inf"
      >
        <div className="title inf"> {props.title}</div>
        <div className="img-container inf">
          <img
            className="card-img inf"
            src={props.img}
            alt="profile of the influencer"
            border="0"
          />
        </div>
      </a>
    </div>
  );
};

export default CardInfluencer;
