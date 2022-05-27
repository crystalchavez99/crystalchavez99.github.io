import React from 'react';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
function App() {
  return (
    <div>
      <NavBar/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
