import React from 'react';
import NoteSideBar from './NoteSideBar';
import NoteMain from './NoteMain'
const Note = (props) => {
    return (
        <div>
            <NoteMain />
            <NoteSideBar />
        </div> 
    )
}

export default Note;