import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import Header from '../Header/Header';
import PageNotFound from '../PageNotFound/PageNotFound'
import NoteMain from '../NoteMain/NoteMain';
import NoteSideBar from '../NoteSideBar/NoteSideBar';
import AddNote from '../AddNote/AddNote';
import Main from '../Main/Main';
import SideBar from '../SideBar/SideBar';
import { NoteContext } from '../../noteContext';



class App extends React.Component {
   static contextType = NoteContext;
   
  appJSX = (<Switch>
      
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
         <NoteSideBar note_id ={match.params.note_id}/>  
         <NoteMain note_id={match.params.note_id}/>
     
         </div>
         }/>
   <Route exact path="/add-note"
   render ={({ history }) =>
   <AddNote history={history}/> }/>    
  <Route component={PageNotFound} />
</Switch>)

  dataLoaded = (data) => {
    if (data.notes && data.folders) {  
      return this.appJSX               
    } 
    else {
      return <h1>Loading....</h1>
    }
  }
  

  
  render () {
   
    return (
      <div className="App">
        <Header />
     {this.dataLoaded(this.context)}
  
      </div>
    );
  }
}

export default App;
