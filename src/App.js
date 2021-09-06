import React, { createContext, useState } from 'react';
import './App.css';
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

export const themeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState(false)

  return (
    <themeContext.Provider value={{theme, setTheme}}>
    <div className={theme ? "light" : "dark"}>
      <div className="portfolio">
        <NavBar/>
        <div className="about-all">
          <About/>
        </div>
        <div className="projects-all">
          <Projects/>
        </div>
        <div className="skills-all">
          <Skills/>
        </div>
        {/*<div className="contact-all">
          <Contact/>
        </div> */}
      </div>
    </div>
    </themeContext.Provider>
  );
}

export default App;
