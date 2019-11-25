import React from 'react';
import { getFolderFromNote } from '../../noteHelpers';
import { NoteContextConsumer } from '../../noteContext';
import { Link } from 'react-router-dom';

const NoteSideBar = (props) => {
return (<NoteContextConsumer>
    {context => {
        const folder= getFolderFromNote(props.note_id, context)
        console.log(folder.id);

    return (<div>
        <h4 style={{textAlign:'center'}} className="note-sidebar">{folder.name}</h4>
        <button className="sidebar-button"><Link to={`/folder/${folder.id}`}>Go Back</Link></button>
        </div>)
    }

}
    </NoteContextConsumer>
    )


}

export default NoteSideBar;