import React from "react";
interface CardProps {
  text: string;
}
function Card({ text }: CardProps) {
  return (
    <>
      <div className="card rounded-lg bg-cardBackGround text-cardTextColor pt-2 px-3 pb-1 text-sm cursor-pointer box-border  hover:outline-2 hover:outline hover:outline-cardHoverColor">
        {text}
      </div>
    </>
  );
}

export default Card;
