import React from 'react';


const NoteMain = (props) => {
    
    const convertDate = (isoDate) =>{
        let date = new Date(isoDate);
        return date.toDateString();
        
     }
  
       

    return   <main className="main">
        <div className="note-title-date">
        <h2>{props.note.name}</h2>
        <h4>{convertDate(props.note.modified)}</h4>
        
        </div>
        <p className="note-body">{props.note.content}</p>
    </main>
}

export default NoteMain;