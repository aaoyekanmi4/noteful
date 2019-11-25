import React, { useContext } from 'react';
import './SideBar.css'
import { NavLink } from 'react-router-dom';
import { NoteContext} from '../../noteContext';

const SideBar = () => {
 
        const context = useContext(NoteContext);

return (<div>
          <h2 className="folder-heading">folders</h2>
          <nav className="sidebar">
      
    {context.folders.map(folder =>
        (<NavLink 
            key={folder.id} 
            to={`/folder/${folder.id}`} 
            className="folder"
        > 
          {folder.name}
       
        </NavLink>))}
          <button className="sidebar-button">Add Folder</button>
          </nav>
         
        </div>) 
}

export default SideBar;