import React from 'react';
import { NoteContext } from '../noteContext'

class AddFolder extends React.Component {
    static contextType = NoteContext;

    

    state = {
        name:'',        
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
        <div>
            <form onSubmit={this.handleAddFolder}>
       
                <label htmlFor="name"> Folder Name: </label>
            <input type="text" onChange={e => this.setState({name: e.target.value})}value={this.state.name} name="name" />
        
    
            <input type="submit" />
        </form>
        </div> 
        )

    }
}

export default AddFolder