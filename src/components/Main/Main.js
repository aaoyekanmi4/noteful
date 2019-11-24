import React from 'react';
import { Link } from 'react-router-dom'
import { NoteContextConsumer } from '../../noteContext'

const Main = () => {
    
    const convertDate = (isoDate) =>{
       let date = new Date(isoDate);
       return date.toDateString();
       
    }
   
    return (
    <main className="main">
    <button className="main-button">Add Note</button>
   <ul>  <NoteContextConsumer>
         {context => (context.notes.map(note =><li  className="note-title-date" > 
                <Link to={`/note/${note.id}`}><h2>{note.name}</h2></Link>
                <p>Date Modified: {convertDate(note.modified)}</p>
                </li>  ))}
                </NoteContextConsumer> 
</ul> </main>
    ) 
}

export default Main;