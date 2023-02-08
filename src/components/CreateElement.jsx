import React from 'react'
import {Button} from '../style/component.style'
//import {useState} from 'react'
import { useForm } from "react-hook-form";
import {v4 as uuidv4} from 'uuid'



function CreateElement({allNotes, setNotes, setCreate}) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
// const [note, setNote] = useState("");
//   const handleChange = (event) => {
//     setNote(event.target.value);
//   }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setNotes([...allNotes, note]);
  //   setNote("");
  // }
  const onSubmit = (data, e) => {
    data.id = uuidv4()
    setNotes([...allNotes, data]);
    e.target.reset()
  };

  

  return (
    <div >
      <form onSubmit={handleSubmit(onSubmit)} >
        
        <div className="form">
          
          
      <input placeholder="title" 
        {...register("title", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i
        })}
      />
      {errors?.firstName?.type === "required" && <p>This field is required</p>}
      {errors?.firstName?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}
      {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}

      
        <textarea placeholder="description" {...register("description", { pattern: /^[A-Za-z]+$/i })} />
                {errors?.lastName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
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