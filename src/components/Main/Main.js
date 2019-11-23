import React from 'react';
import { Link } from 'react-router-dom'

const Main = (props) => {
    
    const convertDate = (isoDate) =>{
       let date = new Date(isoDate);
       return date.toDateString();
       
    }
      
    const notes = props.notes
    .map(note =><li  className="note-title-date" > 
                <Link to={`/note/${note.id}`}><h2>{note.name}</h2></Link>
                <p>Date Modified: {convertDate(note.modified)}</p>
                </li>  )

    return (
    <main className="main">
   <ul>{notes}</ul> </main>
    ) 
}

export default Main;