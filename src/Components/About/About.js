import React from 'react';
import './About.css';
function About() {
    return (
        <div id="about">
            <div id="header">
                <h1>Hello, my name is Crystal Chavez
                    <br />
                    <span>A software engineer who loves to build apps.</span>
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                    laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                    Laborum, voluptas natus?</p>
            </div>
            <div id="info">
                <div>
                    <a href="#contact">Work With Me</a>
                </div>
                <div>
                    <a href="#projects">See My Previous Projects</a>
                </div>
                <div>
                    <img alt="profile-pic" />
                </div>
            </div>
        </div>
    )
}
export default About;
