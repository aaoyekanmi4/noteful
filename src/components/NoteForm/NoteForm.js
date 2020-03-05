import React from 'react';
import {NoteContext} from '../../noteContext';
import PropTypes from 'prop-types';
import ValidationError from '../ValidationError/ValidationError';
import './NoteForm.css'

class NoteForm extends React.Component {
    
    static contextType = NoteContext;

    state = {
        title:{
            name:'',
            touched:false
        },
        content:'',
        folderId:this.context.folders[0].id   
    }

    validateName = () => {
        const name = this.state.title.name.trim();
        if (name.length === 0 && this.state.title.touched === true) {
           return 'Please enter a name for your note'
       }
    }

    handleAddNote = (event) => {
        event.preventDefault();

        fetch(`https://secret-sierra-73971.herokuapp.com/notes`, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            title: this.state.title.name,
            content: this.state.content,
            modified: new Date().toISOString(),
            folderid: this.state.folderId
          })
        })
          .then(response => {
            if (!response.ok) {
              throw new Error("Can't reach API to add note");
            }
            return response.json();
          })
          .then(response => {
            this.context.addNote(response);
            this.props.history.push("/");
          })
          .catch(err => {
            console.log(err);
          });
        
    }
  
    render() {
        return (   
            <div style={{margin: '0px auto', width:500}}>
                <form onSubmit={this.handleAddNote}>
                <div>
                    <label htmlFor="title">Title: </label>
                <input 
                    type="text" 
                    className="title" 
                    onChange={e => this.setState({title:{name: e.target.value, touched:true}})}
                    value={this.state.title.name} 
                    name="title" 
                />
                <ValidationError message={this.validateName()}/>
                </div>
                <div>
                    <label htmlFor="content">Content: </label>
                    <textarea 
                        onChange={e => this.setState({content: e.target.value})} 
                        value={this.state.content} 
                        name="content">
                    </textarea>
            </div>
            <div>   
                <label htmlFor="selectFolder">Select Folder</label>   
                <select 
                    name="selectFolder" 
                    value={this.state.folderid}
                    onChange={e => this.setState({folderId: e.target.value})}
                >
                    {this.context.folders
                        .map(folder => 
                            <option key={folder.id} value={folder.id}>{folder.title}</option>
                    )}
                </select>
                
                </div>
        
                <input type="submit" value="Add Note" disabled={this.validateName() || !this.state.title.name}/>
            </form>
            </div> 
        )

    }
}
export default NoteForm;

NoteForm.propTypes= {
    history: PropTypes.object
}