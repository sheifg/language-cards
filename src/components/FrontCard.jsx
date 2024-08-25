import React from "react";

export default function FrontCard({ img, name }) {
  return (
    <div className="top-image">
      <img className="card-img" src={img} alt={name} />
    </div>
  );
}
