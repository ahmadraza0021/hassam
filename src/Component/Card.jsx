import React from 'react'

const Card = ({name, id, address}) => {
  return (

    <>   
     <div>{name}</div>
     <div>{id}</div>
     <div>{address}</div>
    </>

  )
}
export default Card