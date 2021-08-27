import React from "react";
import "../assets/css/card.css";

const Card = (props, { allPostsData }) => {
  const { image, name, email } = props;

  return (
    <div className="bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img src={image} alt={name} height="200px" width="200px" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
export default Card;
