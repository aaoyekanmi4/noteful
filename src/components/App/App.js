import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header';
import PageNotFound from '../PageNotFound/PageNotFound'
import NoteMain from '../NoteMain/NoteMain';
import NoteSideBar from '../NoteSideBar/NoteSideBar';
import NoteForm from '../NoteForm/NoteForm';
import Main from '../Main/Main';
import SideBar from '../SideBar/SideBar';
import NotesError from '../NotesError/NotesError';




const App = () => {
   
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route className="content" exact path="/"
        render ={({ history }) =>   
            <div className="content">
              <SideBar/>  
              <NotesError>
              <Main history={history}/>
              </NotesError>
            </div>
        }
        />
        <Route exact path="/folder/:folder_id" 
          render ={({ match }) => 
            <div className="content">
              <SideBar />
              <Main folder_id={match.params.folder_id}/>
            </div>
          }
        />
        <Route exact path="/note/:note_id" 
          render ={({ match, history }) => 
            <div className="content">
              <NoteSideBar note_id ={match.params.note_id} history={history}/>  
              <NoteMain note_id={match.params.note_id}/>
            </div>
          }
        />
        <Route exact path="/add-note"
          render ={({ history }) =>
            <NoteForm history={history}/> 
          }
        />    
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}


export default App;
