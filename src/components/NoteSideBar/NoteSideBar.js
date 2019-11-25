import React, { useContext} from 'react';
import { getFolderFromNote } from '../../noteHelpers';
import { NoteContext} from '../../noteContext';
import { Link } from 'react-router-dom';

const NoteSideBar = (props) => {

    const context = useContext(NoteContext);

        const folder= getFolderFromNote(props.note_id, context)
        console.log(folder.id);

    return (<div>
        <h4 style={{textAlign:'center'}} className="note-sidebar">{folder.name}</h4>
        <button className="sidebar-button"><Link to={`/folder/${folder.id}`}>Go Back</Link></button>
        </div>)
}

export default NoteSideBar;