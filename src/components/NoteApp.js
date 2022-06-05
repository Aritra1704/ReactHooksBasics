import React, { useEffect, useReducer } from "react";

import notesReduer from '../reducers/notes';
import AddNoteForm from "./AddNoteForm";
import NoteList from "./NoteList";
import NotesContext from "../context/notes-context";

const NoteApp = () => {
    const [notes, dispatch] = useReducer(notesReduer, [])
  
    useEffect(() => {
      const notes = JSON.parse(localStorage.getItem('notes'))
      console.log('only once useEffect')
      if(notes) {
        console.log(notes)
        dispatch({type: 'POPULATE_NOTES', notes})
      }
    }, [])
  
    useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes))
      console.log('only for notes useEffect')
    }, [notes])
  
    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            <h1>Notes</h1>
            <NoteList />
            <AddNoteForm />
        </NotesContext.Provider>
    );
}

export {NoteApp as default};