import React, { useContext} from 'react';
import { getFolderFromNote } from '../../noteHelpers';
import { NoteContext} from '../../noteContext';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NoteSideBar = (props) => {
    const context = useContext(NoteContext);
    const folder= getFolderFromNote(props.note_id, context)
    console.log(folder)
    return (
        <div>
            <h4 style={{textAlign:'center'}} 
                className="note-sidebar">
                    {folder.title}
            </h4>
            <button className="sidebar-button">
                <Link to="/">Go Back</Link>
            </button>
        </div>
    )
}



NoteSideBar.propTypes = {
    note_id: PropTypes.string
}
export default NoteSideBar;