import React from 'react';
import './NavBar.css';
import resume from './Resume.pdf';

function NavBar() {
    return (
        <div id="navbar" className="content">
            <nav>
                <a href="#about">
                    Crystal Chavez
                </a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
                <a href={resume} title="Resume" download>Resume</a>
            </nav>
        </div>
    )
}

export default NavBar;
