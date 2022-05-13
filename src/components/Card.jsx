import './Card.css';
import dayjs from 'dayjs';
import { useState } from 'react';

const Card = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const displayTime = (dateString) => {
    let newDate = dayjs(dateString).format('DD.MM.YYYY, h:mm a');
    return newDate;
  };

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card-container ">
      <div
        id="heart"
        className={isFavorite ? 'isFavorite' : 'notFavorite'}
        onClick={handleClickFavorite}
      ></div>
      <a
        className="url-rapper"
        href={props.url}
        target="_blank"
        rel="noreferrer"
      >
        <div className="title ">{props.title}</div>

        <div className="img-container ">
          <img className="card-img " src={props.image.url} alt={props.title} />
        </div>
        <div className="details ">
          <div className="description ">
            {props.description.slice(0, 137)}...
          </div>
          <div className="source">Source: {props.provider.name}</div>
          <div className="date">{displayTime(props.datePublished)}</div>
        </div>
        {/* <button className="btn">Click</button> */}
      </a>
    </div>
  );
};

export default Card;
