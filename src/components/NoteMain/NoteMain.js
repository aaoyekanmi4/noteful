import React, {useContext} from 'react';
import { NoteContext } from '../../noteContext';
import { convertDate, getNote } from '../../noteHelpers';
import PropTypes from 'prop-types';


const NoteMain = (props) => {

  const context = useContext(NoteContext);
  const note = getNote(props.note_id, context);
  const dayMonthYearDate = convertDate(note.modified);
  
  return(        
      <main className="main">
        <div className="note-title-date">
          <h2>{note.name}</h2>
          <h4>Date Modified: {dayMonthYearDate}</h4>
        </div>
        <p className="note-body">{note.content}</p>
      </main>
  )
              
    
}

export default NoteMain;

NoteMain.propTypes = {
  note_id: PropTypes.string
}