import React from "react";
import Card from "./card";

const CardList = ({ monsters }) => {
  return (
    <div>
      {monsters.map((item, index) => (
        <Card key={`${item.name}-${index}`} {...item} />
      ))}
    </div>
  );
};

export default CardList;
