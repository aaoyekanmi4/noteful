import React from 'react';

const NoteSideBar = (props) => {
return (<div>
    <h4 style={{textAlign:'center'}} className="note-sidebar">{props.folder.name}</h4>
    <button className="sidebar-button">Go Back</button>
    </div>) 
}

export default NoteSideBar;