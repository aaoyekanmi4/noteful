import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import STORE from './dummy-store';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound'
import Home from './components/Home';
import Note from './components/Note';

import Folder from './components/Folder';

class App extends React.Component {
  state= {data:STORE};
  
  getNotesByFolder = (id) => {
      return this.state.data.notes.filter(note => note.folderId === id);
  }
  getFolder = (id) => {
    return this.state.data.folders.filter(folder => folder.id === id);
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

        <Route exact path="/note/:note_id" render ={() => <Note data={this.state.data}/>}/>
        <Route component={PageNotFound} />
      </Switch>
  
      </div>
    );
  }
}

export default App;
