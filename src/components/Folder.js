import React from 'react';
import Main from './Main'
import SideBar from './SideBar'
import { NavLink, Link } from 'react-router-dom'


const Folder = (props) => {

    const folders = props.folders.map(folder =>
    <NavLink 
        key={folder.id} 
        to={`/folder/${folder.id}`} 
        className={folder.id === props.selectedFolder.id ? "active": null}
    > 
      {folder.name}
   
    </NavLink>);
  
    const notes = props.notes.map(note =><Link to={`/note/${note.id}`}>{note.name}</Link>  )
    return <div>
        <Main notes={notes} />
        <SideBar folders={folders} />
    </div>
}

export default Folder;