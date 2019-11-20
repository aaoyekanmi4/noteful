import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import STORE from './dummy-store';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound'
import Home from './components/Home';
import NoteMain from './components/NoteMain';
import NoteSideBar from './components/NoteSideBar';

import Folder from './components/Folder';

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
            <Home data={this.state.data}/>}/>
        <Route exact path="/folder/:folder_id" 
          render ={({ match }) => 
            <Folder 
                selectedFolder={this.getFolder(match.params.folder_id)} 
                notes={this.getNotesByFolder(match.params.folder_id)}
                folders={this.state.data.folders}/>}/>

        <Route exact path="/note/:note_id" 
               render ={({ match }) => 
               <>
               <NoteMain note={this.getNote(match.params.note_id)}/>
               <NoteSideBar folder ={this.getFolderFromNote(match.params.note_id)}/>
               </>
               }/>
        <Route component={PageNotFound} />
      </Switch>
  
      </div>
    );
  }
}

export default App;
