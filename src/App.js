import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBarW from './components/NavBarW';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About'

function App() {
  return (
    <div className="App">
     <Router>
       <NavBarW />
       <Hero />
       <About />
       <Projects />
       <Footer />
       <Switch>
         <Route path='/' exact/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
