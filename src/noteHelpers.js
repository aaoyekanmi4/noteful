
    export const getNotesByFolder = (folderId,data) => {
        return data.notes.filter(note => note.folderId === folderId);
    }
    export const getFolder = (folderId, data) => {
        return data.folders.find(folder => folder.id === folderId);
    }
    export const getNote = (noteId,data) => {
        return data.notes.find(note =>note.id === noteId)
    }
    export const getFolderFromNote = (noteId, data) => {
        let folderId = data.notes.find(note =>note.id === noteId).folderId;
        return data.folders.find(folder => folder.id === folderId);
    }
    export const convertDate = (isoDate) =>{
        let date = new Date(isoDate);
        return date.toDateString();
    }
   