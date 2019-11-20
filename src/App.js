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
  
  
  
  render () {

    return (
      <div className="App">
        <Header />
     <Switch>
        <Route exact path="/" render ={() => <Home data={this.state.data}/>}/>
        <Route exact path="/folder/:folder_id" render ={() => <Folder data={this.state.data}/>}/>
        <Route exact path="/note/:note_id" render ={() => <Note data={this.state.data}/>}/>
        <Route component={PageNotFound} />
      </Switch>
  
      </div>
    );
  }
}

export default App;
