import React from 'react'
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
    const toLocalStorage = [...allNotes, data]
    localStorage.setItem('Notes', JSON.stringify(toLocalStorage))
    e.target.reset()
  };

  

  return (
    <div className="w-5/6 rounded overflow-hidden shadow-lg h-40 pt-5 pr-5 pb-5 pl-5  md:w-3/5 lg:w-2/5  ">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between h-full" >
        
        <div className="formInputs">
          
          <input placeholder="title" 
            {...register("title", {
              required: true,
              maxLength: 40,
            })}
          />

          <input placeholder="description" {...register("description")} />
              

        </div>

        <div className="flex flex-row-reverse space-x-4 space-x-reverse">
          <button className="bg-transparent hover:bg-cyan-600 text-cyan-600 font-semibold hover:text-white py-2 px-4 border border-cyan-600 hover:border-transparent rounded">Añadir</button>
          <button onClick={() => setCreate(false)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Cancelar</button>
          <select {...register("project")}>
            <option value="project 1">project 1</option>
            <option value="project 2">project 2</option>
            <option value="new project">new project +</option>
          </select>
        </div>

      </form>
        
    </div>
    
  )
}

export default CreateElement