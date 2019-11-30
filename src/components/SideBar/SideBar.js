import React, { useContext, useState } from 'react';
import './SideBar.css'
import { NavLink } from 'react-router-dom';
import { NoteContext} from '../../noteContext';
import AddFolder from '../AddFolder'

const SideBar = () => {
    
  const [showAddFolder, setShowAddFolder] = useState(false);

  const hideAddFolder = () => {
    setShowAddFolder(false);
  }
        const context = useContext(NoteContext);

       return (<div>
          <h2 className="folder-heading">folders</h2>
          <nav className="sidebar">
          {showAddFolder ? <AddFolder hide={hideAddFolder}/> : null}
          <button onClick={()=>setShowAddFolder(true)} className="sidebar-button">Add Folder</button>
    {context.folders.map(folder =>
        (<NavLink 
            key={folder.id} 
            to={`/folder/${folder.id}`} 
            className="folder"
        > 
          {folder.name}
       
        </NavLink>))}
         
          </nav>
        
        </div>) 
}

export default SideBar;