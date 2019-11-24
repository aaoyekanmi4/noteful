import React from 'react';
import { Link } from 'react-router-dom'
import { NoteContextConsumer } from '../../noteContext'

const Main = (props) => {
    
    const convertDate = (isoDate) =>{
       let date = new Date(isoDate);
       return date.toDateString();
       
    }
   
    return (
    <main className="main">
    <button className="main-button">Add Note</button>
   <ul>  <NoteContextConsumer>


         {context => {if (!props.folder_id){ 
             return (context.notes.map(note =><li  className="note-title-date" > 
                <Link to={`/note/${note.id}`}><h2>{note.name}</h2></Link>
                <p>Date Modified: {convertDate(note.modified)}<button onClick={()=>context.delete(note.id)}className="delete-button">Delete</button></p>
                </li>  )) }
                else {
                    return (context.getNotesByFolder(props.folder_id).map(note =><li  className="note-title-date" > 
                    <Link to={`/note/${note.id}`}><h2>{note.name}</h2></Link>
                    <p>Date Modified: {convertDate(note.modified)}<button onClick={()=>context.delete(note.id)} className="delete-button">Delete</button></p>
                    </li>  )) }
                }

                }
                </NoteContextConsumer> 
</ul> </main>
    ) 
}

export default Main;