import React from 'react';
import './SideBar.css'
import { NavLink } from 'react-router-dom';
import { NoteContextConsumer } from '../../noteContext';

const SideBar = () => {
 
        

return (<div>
          <h2 className="folder-heading">folders</h2>
          <nav className="sidebar">
          <NoteContextConsumer>
    {context => context.folders.map(folder =>
        (<NavLink 
            key={folder.id} 
            to={`/folder/${folder.id}`} 
            className="folder"
        > 
          {folder.name}
       
        </NavLink>))}
        </NoteContextConsumer>
          <button className="sidebar-button">Add Folder</button>
          </nav>
         
        </div>) 
}

export default SideBar;