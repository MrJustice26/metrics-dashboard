import React from 'react'
import './Nav.scss';
import {BrowserRouter, Link} from 'react-router-dom';

const NavBar: React.FC = () => {


    return (
        <BrowserRouter>
            <nav className="nav">
                <div className="nav__container">
                    <div>
                        <Link to="/" className="link nav__link">Metrics Dashboard</Link>
                    </div>
                    <div>
                        <Link to="/login" className="link nav__link">Zaloguj</Link>
                    </div>
                </div>
                    
            </nav>
        </BrowserRouter>
        
        
    )
}

export default NavBar;