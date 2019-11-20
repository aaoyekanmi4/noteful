import React from 'react';
import Main from './Main';
import SideBar from './SideBar';
import { Link } from 'react-router-dom'

const Home = (props) => {
    
    
  const notes = props.data.notes.map(note =><Link to={`/note/${note.id}`}>{note.name}</Link>  )
    const folders = props.data.folders.map(folder =><Link to={`/folder/${folder.id}`}>{folder.name}</Link>);
    return (
        <div>
          <Main notes = {notes}/>
          <SideBar folders ={folders}/>
        </div>
    )
}

export default Home;