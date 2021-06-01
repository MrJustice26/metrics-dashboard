import React from 'react'
import './Nav.scss';
import {BrowserRouter, Link} from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const NavBar: React.FC = () => {


    return (
        <BrowserRouter>
            <AppBar className="nav" position="static">
                <Toolbar>
                    <div className="nav__container">
                        <div>
                            <Typography variant="h6">
                                <Link to="/" className="link nav__link">Metrics Dashboard</Link>
                            </Typography>
                        </div>
                        <Button color="inherit">
                            <Link to="/login" className="nav__btn">Zaloguj</Link>
                        </Button>
                            
                    </div>
                </Toolbar>
            </AppBar>
        </BrowserRouter>
        
        
    )
}

export default NavBar;