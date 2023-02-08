import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {Button} from '../style/component.style'
import { useForm } from "react-hook-form";

export default function MyModal({isOpen, setIsOpen, noteEdit, setEdit, allNotes, setNotes}) {
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

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

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
        </Dialog>
      </Transition>
    </>
  )
}