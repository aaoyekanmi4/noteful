import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import Header from '../Header/Header';
import PageNotFound from '../PageNotFound/PageNotFound'
import NoteMain from '../NoteMain/NoteMain';
import NoteSideBar from '../NoteSideBar/NoteSideBar';
import Main from '../Main/Main';
import SideBar from '../SideBar/SideBar';
import { NoteContextConsumer } from '../../noteContext';



class App extends React.Component {
  

  dataLoaded = (data) => {
    if (data.notes && data.folders) {
      console.log(data);
      return (
       
        <Switch>
      
           <Route exact path="/">
                <div className="content">
                  <SideBar/>  
                  <Main />
               </div>
             </Route >
           <Route exact path="/folder/:folder_id" 
             render ={({ match }) => 
                 <div className="content">
                 <SideBar />
                 <Main folder_id={match.params.folder_id}/>
             
                </div>
               }/>
           <Route exact path="/note/:note_id" 
                  render ={({ match }) => 
                  <div className="content">
                  <NoteSideBar folder ={data.getFolderFromNote(match.params.note_id)}/>  
                  <NoteMain note={data.getNote(match.params.note_id)}/>
              
                  </div>
                  }/>
                
           <Route component={PageNotFound} />
         </Switch>
          )
    } 
    else {
      return <h1>Loading....</h1>
    }
  }

  
  render () {

    return (
      <div className="App">
        <Header />
        <NoteContextConsumer>
        
         {context => (this.dataLoaded(context))}
       </NoteContextConsumer>
  
      </div>
    );
  }
}

export default App;
