import React, {useState} from 'react'
import {Button} from '../style/component.style'
import CreateElement from './CreateElement'
import Item from './Item';

function List() {
  const [create, setCreate] = useState(false);
  const [allNotes, setNotes] = useState([]);

  return (
    <>
      <div>
      {
      allNotes != null &&

        allNotes.map((item) =>
          <Item item={item}/>
        )
          
      }
      </div>
      <div>
      {
        create ?
        <CreateElement allNotes={allNotes} setNotes={setNotes} create={create} setCreate={setCreate} />
        :
        <Button primary onClick={() => setCreate(true)}>Crear</Button>
      }
      </div>    
    </>
  )
}

export default List