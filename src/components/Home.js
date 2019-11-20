import React from 'react';
import Main from './Main';
import SideBar from './SideBar';

const Home = (props) => {
    

    

    console.log("Home", props.data)
    return (
        <div>
          <Main notes = {props.data.notes}/>
          <SideBar folders = {props.data.folders}/>
        </div>
    )
}

export default Home;