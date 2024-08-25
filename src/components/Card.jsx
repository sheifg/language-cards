import React, { useState } from "react";
import "./Card.scss";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

export default function Card({ name, img, options }) {
  const [frontside, setFrontSide] = useState(true);
  
  const handleChange = () => {
    // This updates the front to its opposite value (true to false or false to true).
    setFrontSide((prev) => !prev);
    // When you click the card, the back will be shown, but after some time it returns to the front automatically. For that reason we are using setTimeout to flip out the card
    setTimeout(() => {
        setFrontSide((prev) => !prev);
      }, 2000);
  };
  return (
    <section className="cards-container" onClick={handleChange}>
      {frontside ? 
       ( <FrontCard img={img} name={name}/>)
        : ( <BackCard options={options} />)
      }
    </section>
  );
}




