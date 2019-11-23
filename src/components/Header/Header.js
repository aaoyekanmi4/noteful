import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'



const Header = (props) => {
    return (<header>
        <h1 style={{fontSize:'45px'}}><Link to='/' className="title">Noteful</Link></h1>
    
    </header>)
}

export default Header;