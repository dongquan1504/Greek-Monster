import React from "react";
import Card from "./card";
// import Post from "./posts/[id]"

const CardList = ({ monsters }) => {
  // if(true){
  //   throw new Error('NOOOO!!');
  // }
  return (
    <div>
      {monsters.map((item, index) => (
        <Card key={`${item.name}-${index}`} {...item} />
      ))}
      {/* <Post/> */}
    </div>
  );
};

export default CardList;



