import React from 'react';





const { Provider, Consumer } = React.createContext();

class NoteContextProvider extends React.Component{
    state = {
     folders:null,
     notes:null
    }
        

    componentDidMount() {
       
       this.fetchDataFromAPI();
 
    
    }
 
 
    fetchDataFromAPI = () => {
        Promise.all([   fetch('http://localhost:9090/folders'), fetch('http://localhost:9090/notes')])
        .then(responses => {
            if(!(responses.every(response => response.ok))) {
                throw new Error('Fetch failed');
            }
            else {
                return responses;
            }
        })
        .then(async ([folders, notes]) =>{
            folders = await folders.json();
            notes = await notes.json();
           return [folders, notes]
         } )
        .then(responsesJSON =>{
            this.setState({folders: responsesJSON[0]})
            this.setState({notes:responsesJSON[1]})
        } ).catch(err => {
           
            console.log(err);
          });
      }
        

    
    
    handleDelete = (id) => {
     
        fetch(`http://localhost:9090/notes/${id}`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json'
            },
          }).then(response => {
              if (!response.ok){
                  throw new Error("Delete request failed")
              }
          return response.json()})
          .then(() => {
            let notesWithDeletion = this.state.notes.filter(note => note.id !== id);
            this.setState({notes:notesWithDeletion});
          }).catch(err => {
              console.log(err)
          })
        
      }
        
    
        
    

    render(){
        return (
            <Provider value={{folders:this.state.folders,
                              notes:this.state.notes,
                              delete:this.handleDelete}}>
                {this.props.children}
            </Provider>
        )
    }
}



export {NoteContextProvider, Consumer as NoteContextConsumer};

