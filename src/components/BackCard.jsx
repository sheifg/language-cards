import React from 'react'

export default function BackCard({options}) {
  return (

    <div className="inner">
      <ul className="unordered_list">
        {options.map((term, index) => (
          <li className="list_item" key={index}>
            {term}
          </li>
        ))}
      </ul>
    </div>
  )
}
