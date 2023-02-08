import React from 'react'

function Item({item}) {
  const edit = (note) =>{

  }
  return (
    <>
    <p onClick={() => edit(item)}>{item.title}</p>
    <p>{item.description}</p>
    </>
    
  )
}

export default Item