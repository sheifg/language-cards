import { languages } from "../helpers/data";
import Card from "./Card";
import React from 'react'

export default function MenuCards() {
  return (
    <div className="bottom-menu">
        {languages.map((item, index) => (
            <Card {...item} key={index} />
          ))}
          </div>
  )
}
