import React from "react";
import { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createNote } from "../actions/notes.js";

function Notes() {
    const notes = useSelector((state) => state.notes);
    const [viewNotes, setNotes] = useState([]);
    const dispatch = useDispatch();
    console.log(notes);

    function addNote(newNote) {
        // event.preventDefault();
        // dispatch(createNote(newNote));
        setNotes(prevNotes => {
          return [...prevNotes, newNote];
        });
        // setNotes(() => [...notes, newNote])
        // dispatch(createNote(newNote));
      }
    
    function deleteNote(id) {
        setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
            return index !== id;
      });
    });
  }

  return(
    <div>
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
            return (
                <Note
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                    />
            );
        })}
    </div>
  );
}

export default Notes;