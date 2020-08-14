import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/navbar/Navbar';
// routes Components
import Home from './views/home/Home';
import About from './views/about/About';
import Login from './views/login/Login';
import Profile from './views/profile/Profile';
// Components
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        {/* A <Switch looks through its children <Routes> and renders the first one that matches the current url */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
