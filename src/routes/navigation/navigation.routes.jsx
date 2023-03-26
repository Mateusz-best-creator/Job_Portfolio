import React from "react";
import { Link, Outlet } from "react-router-dom";
// Styles
import  './navigation.styles.scss';

const Navigation = () => {
    return (
        <>
            <div className='navigation-bar'>
                <div className="nav-link">
                    <Link to='/' style={{color: 'black'}}><p className="link">Home</p></Link>
                    <div className='underline'></div>
                </div>
                <div className="nav-link">
                    <Link to='/projects-page' style={{color: 'black'}}><p className="link">Projects</p></Link>
                    <div className='underline'></div>
                </div>
                <div className="nav-link">
                    <Link to='/' style={{color: 'black'}}><p className="link">About Me</p></Link>
                    <div className='underline'></div>
                </div>
                <div className="nav-link">
                    <Link to='/' style={{color: 'black'}}><p className="link">Contact</p></Link>
                    <div className='underline'></div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;