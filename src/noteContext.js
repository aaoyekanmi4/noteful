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
    componentDidUpdate() {
        console.log(this.state.folders)
        console.log(this.state.notes)
    }

    
    
 
    fetchDataFromAPI = () => {
        Promise.all([   fetch('http://localhost:9090/folders'), fetch('http://localhost:9090/notes')])
        .then(async ([fds, nts]) =>{
            const f = await fds.json();
           const n = await nts.json();
           return [f, n]
         } )
        .then(responsesJSON =>{
            this.setState({folders: responsesJSON[0]})
            this.setState({notes:responsesJSON[1]})
        } )
        

    }
    
    handleDelete = (id) => {
     
        fetch(`http://localhost:9090/notes/${id}`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json'
            },
          }).then(res =>  res.json())
          .then(data => {
            
            let notesWithDeletion = this.state.notes.filter(note => note.id !== id);
            this.setState({notes:notesWithDeletion});
          })
        
      }
        
    
    getNotesByFolder = (folderId) => {
        return this.state.notes.filter(note => note.folderId === folderId);
    }
    getFolder = (folderId) => {
    return this.state.folders.find(folder => folder.id === folderId);
    }
    getNote = (noteId) => {
    return this.state.notes.find(note =>note.id === noteId)
    }
    getFolderFromNote = (noteId) => {
    let folderId = this.getNote(noteId).folderId;
    return this.getFolder(folderId);
    }
        
    

    render() {
        return (
            <Provider value={{folders:this.state.folders,
                              notes:this.state.notes,
                              getNotesByFolder: this.getNotesByFolder,
                              getFolder:this.getFolder,
                              getNote:this.getNote,
                              getFolderFromNote:this.getFolderFromNote,
                              delete:this.handleDelete}}>
                {this.props.children}
            </Provider>
        )
    }

}

export {NoteContextProvider, Consumer as NoteContextConsumer};

