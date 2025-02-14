import React from "react";
interface CardProps {
  text: string;
}
function Card({ text }: CardProps) {
  return (
    <>
      <div className="card rounded-lg bg-custom-cardBg text-custom-cardText py-2 px-3  text-sm cursor-pointer box-border  hover:outline-2 hover:outline hover:outline-custom-cardHover">
        {text}
      </div>
    </>
  );
}

export default Card;
