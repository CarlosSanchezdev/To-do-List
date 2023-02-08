import React from 'react'
import {Button} from '../style/component.style'
//import {useState} from 'react'
import { useForm } from "react-hook-form";
import {v4 as uuidv4} from 'uuid'



function CreateElement({allNotes, setNotes, setCreate}) {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    data.id = uuidv4()
    setNotes([...allNotes, data]);
    e.target.reset()
  };

  

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)} >
        
        <div className="formInputs">
          
          <input placeholder="title" 
            {...register("title", {
              required: true,
              maxLength: 40,
            })}
          />

          <input placeholder="description" {...register("description")} />
              

        </div>

        <div className="formButtons">
          <Button onClick={() => setCreate(false)}>Cancelar</Button>
          <Button primary>Añadir</Button>
        </div>

      </form>
        
    </div>
    
  )
}

export default CreateElement