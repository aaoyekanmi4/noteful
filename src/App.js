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
  
  
  
  
  render () {
    console.log(STORE);
    return (
      <div className="App">
        <Header />
     <Switch>
        <Route exact path="/" component ={Home}/>
        <Route exact path="/folder/:folder_id" component ={Folder}/>
        <Route exact path="/note/:note_id" component={Note} />
        <Route component={PageNotFound} />
      </Switch>
  
      </div>
    );
  }
}

export default App;
