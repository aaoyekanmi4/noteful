import React from 'react';
import { NoteContextConsumer } from '../../noteContext';
import { convertDate, getNote } from '../../noteHelpers';


const NoteMain = (props) => {
  return(
        <NoteContextConsumer>
      {context => {
          const note = getNote(props.note_id, context);
          const dayMonthYearDate = convertDate(note);
         return ( <main className="main">
         <div className="note-title-date">
         <h2>{note.name}</h2>
         <h4>Date Modified: {dayMonthYearDate}</h4>
         
         </div>
         <p className="note-body">{note.content}</p>
       </main>)
           
      }
    }
    </NoteContextConsumer>)
    
       
    
}

export default NoteMain;