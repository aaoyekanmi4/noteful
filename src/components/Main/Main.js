import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { NoteContext } from '../../noteContext';
import { getNotesByFolder, convertDate } from '../../noteHelpers';
import PropTypes from 'prop-types';

const Main = (props) => {
    
    const context = useContext(NoteContext);
    const notesByFolder = getNotesByFolder(props.folder_id, context);
    console.log(context.notes)
    function createNotes (notes) {
        return notes.map(note =>
           <li key={note.id} 
               className="note-title-date" > 
               <Link 
                   to={`/note/${note.id}`}>
                       <h2>{note.title}</h2>
                </Link>
               <p>Date Modified: {convertDate(note.modified)}
                  
                </p>
                <button onClick={()=> context.delete(note.id)}
                        className="delete-button"
                >
                    Delete
                </button>
           </li>
        )
    }

    return (
        <main className="main">
            <button className="main-button">
                <Link to="/add-note"> Add Note</Link>  
            </button>
            <ul>  
                { props.folder_id ? 
                   createNotes(notesByFolder): 
                   createNotes(context.notes)
                } 
            </ul> 
        </main>
    ) 
}

export default Main;

Main.propTypes = {
    folder_id:PropTypes.string
}