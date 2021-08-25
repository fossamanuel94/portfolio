import './App.css';
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {

  document.body.style.backgroundColor="#fff"

  return (
    <>
    <NavBar/>
    <div className="about-all">
      <About/>
    </div>
    <div className="skills-all">
      <Skills/>
    </div>
    <div className="projects-all">
      <Projects/>
    </div>
    <div className="contact-all">
      <Contact/>
    </div>
    </>
  );
}

export default App;
