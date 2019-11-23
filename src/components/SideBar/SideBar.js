import React from 'react';
import './SideBar.css'
import { NavLink } from 'react-router-dom';

const SideBar = (props) => {
    const folders = props.folders.map(folder =>
        <NavLink 
            key={folder.id} 
            to={`/folder/${folder.id}`} 
            className="folder"
        > 
          {folder.name}
       
        </NavLink>);
        

return (<div>
          <h2 className="folder-heading">folders</h2>
          <nav className="sidebar">
            {folders}
          <button className="sidebar-button">Add Folder</button>
          </nav>
         
        </div>) 
}

export default SideBar;