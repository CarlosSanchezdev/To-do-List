import React, { useState } from "react";
import CreateElement from "./CreateElement";
import Item from "./Item";
import Edit from "./Edit";

function List({ create, setCreate }) {
  const [allNotes, setNotes] = useState(
    JSON.parse(localStorage.getItem("Notes")) || []
  );
  const [noteEdit, setNoteEdit] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ul className="list w-5/6 md:w-3/5 lg:w-2/5">
        {allNotes != null &&
          allNotes.map((item) => (
            <Item
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              item={item}
              setNoteEdit={setNoteEdit}
            />
          ))}
      </ul>

      {create && (
        <CreateElement
          allNotes={allNotes}
          setNotes={setNotes}
          create={create}
          setCreate={setCreate}
        />
      )}

      {isOpen && (
        <Edit
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          allNotes={allNotes}
          setNotes={setNotes}
          noteEdit={noteEdit}
        />
      )}
    </>
  );
}

export default List;
