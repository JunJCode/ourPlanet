import './Card.css';
import React, { useState } from 'react';

const CardBook = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="card-container books">
      <div
        id="heart"
        className={isFavorite ? 'isFavorite' : 'notFavorite'}
        onClick={handleClickFavorite}
      ></div>
      <div className="title books">{props.title}</div>
      <div className="img-container books">
        <img
          className="card-img books"
          src={`https://picsum.photos/200/300?random=${props.random}`}
          alt="random"
        />
      </div>
      <div className="description">Author: {props.author_name[0]}</div>
      {/* <div>Pages: {props.number_of_pages_median}</div> */}
      {/* <div>First edition published: {props.first_publish_year}</div>
      <div>{props.isbn[0]}</div> */}
      {/* <button className="btn">Click</button> */}
    </div>
  );
};

export default CardBook;
