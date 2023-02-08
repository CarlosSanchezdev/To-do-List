import React, {useState} from 'react'
import {Button} from '../style/component.style'
import CreateElement from './CreateElement'
import EditElement from './EditElement';
import Item from './Item';

function List() {
  const [create, setCreate] = useState(false);
  const [allNotes, setNotes] = useState([]);
  const [edit, setEdit] = useState(false);
  const [noteEdit, setNoteEdit] = useState("");

  // const editar = (nota) =>{

  // }

  return (
    <>
      <div className="list">
      {
      allNotes != null &&

        allNotes.map((item) =>
          <Item item={item} setEdit={setEdit} setNoteEdit={setNoteEdit}/>
        )
          
      }
      </div>

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
    </>

  )
}

export default List