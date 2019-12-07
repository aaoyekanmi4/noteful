import React from 'react';
import { NoteContext } from '../../noteContext'
import PropTypes from 'prop-types';
import './FolderForm.css'
import ValidationError from '../ValidationError/ValidationError';

class FolderForm extends React.Component {
    static contextType = NoteContext;


    state = {
        name:'',
        touched:false
    }

    validateName = () => {
        const name = this.state.name.trim();
        if (name.length === 0 && this.state.touched === true) {
           return 'Please enter a name for your folder'
       }
    }

    handleAddFolder = (event) => {
        event.preventDefault();
        this.props.hide();
      
        fetch(`http://localhost:9090/folders`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name
            })
          }).then(response => {
              if (!response.ok){
                  throw new Error("Folder post request failed")
              }
          return response.json()})
          .then(response =>
           this.context.addFolder(response)
           
           )
          .catch(err => {
              console.log(err)
          })
        
    }

    render() {
        return (   
        <>
            <form className='folder-form' onSubmit={this.handleAddFolder}>
            <button onClick={()=>this.props.hide()} style={{backgroundColor:'transparent'}}>X</button>
                <label htmlFor="name"> Folder Name: </label>
            <input className='folder-input' type="text" onChange={e => this.setState({name: e.target.value, touched:true})}value={this.state.name} name="name" />
        
            <ValidationError message={this.validateName()}/>
            <input type="submit" value="Add folder" disabled={this.validateName() || !this.state.name}/>
           
        </form>
        </> 
        )

    }
}
FolderForm.propTypes = {
    hide: PropTypes.func
}
export default FolderForm

