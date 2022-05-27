import React from 'react';
// import {CodeIcon} from "@heroicons/react/solid"
import './Projects.css';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
function Projects() {
    return (
        <div id="projects">
            <h1>Projects I've Built</h1>
            {/* <CodeIcon/> */}
            <div id='project-list'>
                <Box >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                        <Grid xs={5} >
                            <div className='project'>
                                <h3>Gamingcloud</h3>
                                <img src='https://res.cloudinary.com/dreambssd/image/upload/v1653501119/CLOUD_sskb9u.png'/>
                                <p className='project-description'>GamingCloud is a SoundCloud clone that focuses on both the listeners and the artists to embrace a gaming music
                                    platform</p>
                                <p>Technologies: React, Redux, Express.js, Sequelize, PostgreSQL, Javascript, React Audio Player</p>
                            </div>
                        </Grid>

                        <Grid xs={5}>
                            <div className='project'>
                                <h3>Boss-Shots</h3>
                                <img src='https://res.cloudinary.com/dreambssd/image/upload/v1653500499/BOSS_k1uqas.png'/>
                                <p className='project-description'>Boss-Shots is a Flicker clone for sharing images of your epic boss battles from all your favorite video games.</p>
                                <p>Technologies: React, Redux, JavaScript, PostgreSQL, Flask, SQLAlchemy, Alembic, AWS S3, Python</p>
                            </div>
                        </Grid>
                        <Grid xs={5}>
                            <div className='project'>
                                <h3>Pokezon</h3>
                                <img src="https://res.cloudinary.com/dreambssd/image/upload/v1653506909/POKE_iphzvu.png"/>
                                <p className='project-description'>Pokezon is a digital store application that sells supplies necessary for Pokémon training and lifestyle.</p>
                                <p>Technologies: React, Redux, JavaScript, PostgreSQL, Flask, SQLAlchemy, Alembic, AWS S3, Python</p>
                            </div>
                        </Grid>
                        <Grid xs={5}>
                            <div className='project'>
                                <h3>Meme Overflow</h3>
                                <img src="https://res.cloudinary.com/dreambssd/image/upload/v1653689198/MEME_hfwysy.png"/>
                                <p className='project-description'>Meme Overflow is a platform for users to ask questions, answer with memes, and comment on memes!</p>
                                <p>Technologies: Pug.js, Express.js, JavaScript, PostgreSQL, Node.js, Sequelize, HTML,CSS, Heroku, Bcrypt</p>
                            </div>
                        </Grid>
                        <Grid xs={5}>
                            <div className='project'>
                                <h3>LengthConverter.net</h3>
                                <img src='https://res.cloudinary.com/dreambssd/image/upload/v1653689194/length_tmv33e.png'/>
                                <p className='project-description'>A Metric Converter site that focuses on Length Conversion.</p>
                                <p>Technologies: Javascript, HTML, CSS, Netlify</p>
                            </div>
                        </Grid>
                    </Grid>
                </Box>



            </div>
        </div>
    )
}
export default Projects;
