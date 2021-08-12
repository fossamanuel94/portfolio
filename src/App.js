import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/projects" component={Projects}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
