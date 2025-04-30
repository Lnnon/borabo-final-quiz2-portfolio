import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import './App.css'; 

function AnimatedRoutes() {
  const location = useLocation();
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setShowPage(false);
    const timeout = setTimeout(() => setShowPage(true), 10);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className={`page-transition ${showPage ? 'show' : ''}`}>
      <div className="content">
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
