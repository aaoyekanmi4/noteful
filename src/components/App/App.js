import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import STORE from '../../dummy-store';
import Header from '../Header/Header';
import PageNotFound from '../PageNotFound/PageNotFound'
import NoteMain from '../NoteMain/NoteMain';
import NoteSideBar from '../NoteSideBar/NoteSideBar';
import Main from '../Main/Main';
import SideBar from '../SideBar/SideBar';

class App extends React.Component {
  state= {data:STORE};
  
  getNotesByFolder = (folderId) => {
      return this.state.data.notes.filter(note => note.folderId === folderId);
  }
  getFolder = (folderId) => {
    return this.state.data.folders.find(folder => folder.id === folderId);
  }
  getNote = (noteId) => {
    return this.state.data.notes.find(note =>note.id === noteId)
  }
  getFolderFromNote = (noteId) => {
    let folderId = this.getNote(noteId).folderId;
    return this.getFolder(folderId);
  }
  
  render () {

    return (
      <div className="App">
        <Header />
     <Switch>
        <Route exact path="/" 
          render ={() => 
            <div className="content">
            <SideBar folders ={this.state.data.folders} />  
            <Main notes={this.state.data.notes} />
       
            </div>
          }/>
        <Route exact path="/folder/:folder_id" 
          render ={({ match }) => 
              <div className="content">
              <SideBar folders={this.state.data.folders}/>
              <Main notes={this.getNotesByFolder(match.params.folder_id)}/>
          
             </div>
            }/>
        <Route exact path="/note/:note_id" 
               render ={({ match }) => 
               <div className="content">
               <NoteSideBar folder ={this.getFolderFromNote(match.params.note_id)}/>  
               <NoteMain note={this.getNote(match.params.note_id)}/>
           
               </div>
               }/>
        <Route component={PageNotFound} />
      </Switch>
  
      </div>
    );
  }
}

export default App;
