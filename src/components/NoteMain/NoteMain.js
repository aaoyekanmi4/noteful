import React from 'react';
import { NoteContextConsumer } from '../../noteContext';
import { convertDate, getNote } from '../../noteHelpers';
const NoteMain = (props) => {
    return ( 
        <NoteContextConsumer>
      {context => 
      <main className="main">
        <div className="note-title-date">
        <h2>{getNote(props.note_id, context).name}</h2>
        <h4>{convertDate(getNote(props.note_id, context).modified)}</h4>
        
        </div>
        <p className="note-body">{getNote(props.note_id, context).content}</p>
    </main>}
    </NoteContextConsumer>
    )
       
    
}

export default NoteMain;