import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'



const Header = (props) => {
    return (<header>
        <h1><Link to='/' className="title">Noteful</Link></h1>
    
    </header>)
}

export default Header;