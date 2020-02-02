
    export const getNotesByFolder = (folderId,data) => {
        return data.notes.filter(note => note.folderid == folderId);
    }
    export const getFolder = (folderId, data) => {
        return data.folders.find(folder => folder.id == folderId);
    }
    export const getNote = (noteId,data) => {
        return data.notes.find(note =>note.id == noteId)
    }
    export const getFolderFromNote = (noteId, data) => {
        noteId = Number(noteId);
        let note = data.notes.find(note => note.id == noteId)
        console.log(note);
        let folderId = note.folderid;
        console.log(folderId);
        return data.folders.find(folder => folder.id == folderId);
     
    }
    export const convertDate = (isoDate) =>{
        let date = new Date(isoDate);
        return date.toDateString();
    }
   