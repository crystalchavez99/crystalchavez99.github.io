import React from 'react';
import './About.css';
function About() {
    return (
        <div id="about">
            <div id="header">
                <h1>Hello, my name is Crystal Chavez
                    <br />
                    <span>Software engineer</span>
                </h1>
                <div>
                    <img alt="profile-pic" />
                </div>
                <div id="about-me">
                    <p>Hey there welcome to my portfolio!</p>
                    <p>If you read above this text then you know my name! You can call me either Crystal or Chavez,
                        your preference but I'll respond to either one!
                    </p>
                    <p>I got introduced into the world of STEM from middle school where I took a summer class on video game development
                        as I am a huge fun of video games. In that moment I knew programming was my calling, and was inspired to pursue it.
                        From there I began to take computer science classes in high school, primarly AP Computer Science: Intro to Computer Science Principles and
                        Intro to Java. After engaging and understanding the concepts of computer science fundamentals, it was an eye opener for me that technology can
                        impact our world and set my career on software engineering.
                    </p>
                    <p>
                        From there I went to community college where I obtained my Associate in Science for Transfer degree in Computer Science, but did
                        not finish my Bachelor's due to COVID and the lack of resources from the university I transfered to so I had to postpone my
                        education. This lead me to enroll to <a>App Academy</a> in their 24 week immersive software engineer online program. I have built
                        four full stack applications with the technologies I learned such as React, Redux, Javascript, Flask, and many other technologies.
                    </p>
                    <p>I'm now at the end of my coding bootcamp quest and am seeking the first step to my software engineering career! I'm excited to begin
                        my career as a software engineer and use my skills that this career demands.
                    </p>
                </div>
            </div>
            {/* <div>
                <button>Resume</button>
            </div> */}
            {/* <div id="info">
                <div>
                    <a href="#contact">Work With Me</a>
                </div>
                <div>
                    <a href="#projects">See My Previous Projects</a>
                </div>
                <div>
                    <a href="#skills">Skills and Technologies</a>
                </div>
            </div> */}
        </div>
    )
}
export default About;
