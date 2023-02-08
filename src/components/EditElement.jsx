import React from 'react'
import {Button} from '../style/component.style'
import { useForm } from "react-hook-form";


function EditElement({noteEdit, setEdit, allNotes, setNotes}) {
    const {
        register,
        handleSubmit,
      } = useForm();

      console.info(noteEdit)

      const editSubmit = (data) => {

        allNotes.map((item)=> {
          
            if(item.id === noteEdit.id){
              item.title = data.title;
              item.description = data.description;
              }
            })
        
        setEdit(false)
      };

      const deleteNote = () => {
        const newArrayNotes = allNotes.filter((item) => item.id !== noteEdit.id)

        setNotes(newArrayNotes)

        console.info(newArrayNotes)
      }


  return (
    <div className="form">
      <form onSubmit={handleSubmit(editSubmit)} >
        
        <div className="formInputs">
          
          <input placeholder="title" defaultValue={noteEdit.title}
            {...register("title", {
              required: true,
              maxLength: 40,
            })}
            />

          <input placeholder="description" defaultValue={noteEdit.description} {...register("description")} />
                    
        </div>

        <div className="formButtons">
            <Button onClick={() => deleteNote()}>Borrar</Button>
            <Button onClick={() => setEdit(false)}>Cancelar</Button>
            <Button primary>Editar</Button>
        </div>

      </form>
        
    </div>
  )
}

export default EditElement