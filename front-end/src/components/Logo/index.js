import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';

const Logo = props => {
    return (
        <Link to="/">
            <div className="Logo" >
            <img src={require('./Logo-Renaison-02.png')} alt='ParaShop' width='350' />
        </div>
        </Link>
        
    );
}

export default Logo;