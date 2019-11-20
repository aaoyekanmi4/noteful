import React from 'react';

const SideBar = (props) => {
return <div>{props.folders.map(folder => folder.name)}</div>
}

export default SideBar;