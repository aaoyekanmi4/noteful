import React from 'react';
import {NoteContext} from '../../noteContext';
import ValidationError from '../ValidationError';

class AddNote extends React.Component {
    
    static contextType = NoteContext;

    

    state = {
        title:{
            name:'',
            touched:false
        },
        content:'',
        folderId:''
        
    }

    validateName =() => {
        const name = this.state.title.name.trim();
       if (name.length === 0 && this.state.title.touched === true) {
           return 'Please enter a name for your note'
       }
    }

    handleAddNote = (event) => {
        event.preventDefault();
      
      
        fetch(`http://localhost:9090/notes`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.title.name,
                content:this.state.content,
                modified: new Date().toISOString(), 
                folderId: this.state.folderId
            })
          }).then(response => {
              if (!response.ok){
                  throw new Error("Adding note failed")
              }
          return response.json()})
          .then(response =>{
            this.context.addNote(response)
            this.props.history.push('/')
          }
         
           

           )
          .catch(err => {
              console.log(err)
          })
        
    }

    render() {
    return (   
    <div style={{margin: '0px auto', width:500}}>
        <form onSubmit={this.handleAddNote}>
        <div>
            <label htmlFor="title">Title: </label>
        <input type="text" onChange={e => {
            this.setState({title:{name: e.target.value, touched:true}})}}value={this.state.title.name} name="title" />
        <ValidationError message={this.validateName()}/>
        </div>
        <div>
            <label htmlFor="content">Content: </label>
       <textarea onChange={e => this.setState({content: e.target.value})} value={this.state.content} name="content"></textarea>
       </div>
    <div>   
        <label htmlFor="selectFolder">Select Folder</label>   
           <select name="selectFolder" value={this.state.folderId} onChange={e => this.setState({folderId: e.target.value})}>
       {this.context.folders.map(folder => <option key={folder.id} value={folder.id}>{folder.name}</option>)}
           </select>
           
           </div>
   
        <input type="submit" disabled={this.validateName()}/>
    </form>
    </div> 
    )

    }
}
export default AddNote;