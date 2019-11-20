import React from 'react';

const Main = (props) => {
    return <div>
        {props.notes.map(note => note.name)}
    </div>
}

export default Main;