import React from 'react'
import { ContainerModal, Overlay, Button } from '../style/component.style'

import { useForm } from "react-hook-form";

function Edit({isOpen, setIsOpen, noteEdit, allNotes, setNotes}) {
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
        closeModal()
  };

  const deleteNote = () => {
    const newArrayNotes = allNotes.filter((item) => item.id !== noteEdit.id)

    setNotes(newArrayNotes)
    localStorage.setItem('Notes', JSON.stringify(newArrayNotes))
    console.info(newArrayNotes)
    
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <>
      
        <Overlay>
          <ContainerModal>
          <>
                    <form onSubmit={handleSubmit(editSubmit)} className="flex flex-col justify-between h-full" >
                      
                      <div className="formInputs">
                        
                        <input placeholder="title" defaultValue={noteEdit.title}
                          {...register("title", {
                            required: true,
                            maxLength: 40,
                          })}
                          />

                        <input placeholder="description" defaultValue={noteEdit.description} {...register("description")} />
                                  
                      </div>

                      <div className="flex space-x-4 space-x justify-end">
                          <button  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => deleteNote()}>Borrar</button>
                          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => closeModal()}>Cancelar</button>
                          <button className="bg-transparent hover:bg-cyan-600 text-cyan-600 font-semibold hover:text-white py-2 px-4 border border-cyan-600 hover:border-transparent rounded">Editar</button>
                      </div>

                    </form>
                      
                  </>
          </ContainerModal>
        </Overlay>
      
    </>
  )
}

export default Edit