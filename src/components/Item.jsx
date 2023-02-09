import React from 'react'

function Item({item, setNoteEdit, setIsOpen}) {
  const edit = (note) =>{
    setNoteEdit(note)
    setIsOpen(true)

  }
  
  return (
    <li key={item.id} className="note">
        <div>
          <input id="default-checkbox" type="checkbox" value="" />
        </div>
        <div>
          <p className="title" onClick={() => edit(item)} style={{cursor:"pointer"}}>{item.title}</p>
          <p className="description">{item.description}</p>
        </div>
        
      
    
    </li>
    
  )
}

export default Item