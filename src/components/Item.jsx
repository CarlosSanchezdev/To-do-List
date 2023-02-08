import React from 'react'

function Item({item, setEdit, setNoteEdit}) {
  const edit = (note) =>{
    setNoteEdit(note)
    setEdit(true)

    console.info(note)

  }
  return (
    <div key={item.id} className="note">
    <p className="title" onClick={() => edit(item)} style={{cursor:"pointer"}}>{item.title}</p>
    <p className="description">{item.description}</p>
    </div>
    
  )
}

export default Item