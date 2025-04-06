import React from 'react'
import Card from './Card';
const list = [
    {
        name: "Ahmad",
        id : "0",
    },
    {
        name: "Ali",
        id : "1",
    },
    {
        name: "Usman",
        id : "2",
    },
];
const Cards = () => {
  return (
    <div>  {list.map((li) => {
        return <Card {...li} key={li.id} />; //{...li} is a spread operator
      })}</div>
  )
}

export default Cards