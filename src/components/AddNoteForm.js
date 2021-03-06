import React, { useContext, useState } from "react";
import NotesContext from '../context/notes-context';
import useMousePosition from "../hooks/useMousePosition";

const AddNoteFormm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const position = useMousePosition();

    const { dispatch } = useContext(NotesContext);

    const addNote = (e) => {
        e.preventDefault();
        dispatch({
          type: 'ADD_NOTE', 
          title,
          body
        })
        setTitle('')
        setBody('')
      }

    return (
        <>
            <p>Add Note {position.x} - {position.y}</p>
            <form onSubmit={addNote}>
                <input 
                    value={title} 
                    placeholder='Title' 
                    onChange={(e) => setTitle(e.target.value)} />
                <textarea 
                    value={body} 
                    placeholder='Body'
                    onChange={(e) => setBody(e.target.value)} />
                <button>Add note</button>
            </form>
        </>
    )
}

export { AddNoteFormm as default }