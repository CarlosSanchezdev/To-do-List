import React from 'react'
import {Button} from '../style/component.style'
import {useState} from 'react'


function CreateElement({allNotes, setNotes, setCreate}) {
const [note, setNote] = useState("");
  const handleChange = (event) => {
    setNote(event.target.value);
  }

  const handleSubmit = () => {
    setNotes([...allNotes, note]);
  }
  console.info(allNotes)
  return (
    <div>CreateElement
      <form onSubmit={handleSubmit}>

        <div>
          <input type="test" onChange={handleChange}></input>
        </div>
        <div>
          <Button onClick={() => setCreate(false)}>Cancelar</Button>
          <Button primary>Añadir</Button>
        </div>

      </form>
        
    </div>
    
  )
}

export default CreateElement