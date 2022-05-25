import React from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
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
