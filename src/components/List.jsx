import React, {useState} from 'react'
import {Button} from '../style/component.style'
import CreateElement from './CreateElement'
import EditElement from './EditElement';
import Item from './Item';
import Example from './newcomponent';

function List({isOpen, setIsOpen}) {
  const [create, setCreate] = useState(false);
  const [allNotes, setNotes] = useState([]);
  const [edit, setEdit] = useState(false);
  const [noteEdit, setNoteEdit] = useState("");

  // const editar = (nota) =>{

  // }

  return (
    <>
      <ul className="list">
      {
      allNotes != null &&

        allNotes.map((item) =>
          <Item isOpen={isOpen} setIsOpen={setIsOpen} item={item} setEdit={setEdit} setNoteEdit={setNoteEdit}/>
        )
          
      }
      </ul>

      <div className="buttons">
      {
        create ?
        <CreateElement allNotes={allNotes} setNotes={setNotes} create={create} setCreate={setCreate} />
        :
        <Button primary onClick={() => setCreate(true)}>Crear</Button>
      }
      </div>
      
      {
      edit === true &&
        <EditElement allNotes={allNotes} setNotes={setNotes} setEdit={setEdit} noteEdit={noteEdit}/>
      }
      <Example isOpen={isOpen} setIsOpen={setIsOpen} allNotes={allNotes} setNotes={setNotes} setEdit={setEdit} noteEdit={noteEdit}/>
    </>

  )
}

export default List