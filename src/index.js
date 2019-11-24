import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import { NoteContextProvider } from './noteContext';



ReactDOM.render(
 
    <BrowserRouter>
    <NoteContextProvider>
     <App />
     </NoteContextProvider>
</BrowserRouter>

, document.getElementById('root'));

