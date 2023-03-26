import React from "react";
import { Link, Outlet } from "react-router-dom";
// Styles
import  './navigation.styles.scss';

const Navigation = () => {
    return (
        <>
            <div className='navigation-bar'>
                <Link to='/' style={{color: 'black'}}><p className="link">Home</p></Link>
                <Link to='/projects-page' style={{color: 'black'}}><p className="link">Projects</p></Link>
                <Link to='/' style={{color: 'black'}}><p className="link">About Me</p></Link>
                <Link to='/' style={{color: 'black'}}><p className="link">Contact</p></Link>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;