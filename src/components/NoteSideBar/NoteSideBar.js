import React from 'react';
import { getFolderFromNote } from '../../noteHelpers';
import { NoteContextConsumer } from '../../noteContext';
//data.getFolderFromNote(match.params.note_id)
const NoteSideBar = (props) => {
return (<NoteContextConsumer>
    {context => 
<div>
    <h4 style={{textAlign:'center'}} className="note-sidebar">{getFolderFromNote(props.note_id, context)}</h4>
    <button className="sidebar-button">Go Back</button>
    </div>
}
    </NoteContextConsumer>
    )


}

export default NoteSideBar;