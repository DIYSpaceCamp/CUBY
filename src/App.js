import React from 'react';
import './App.css';
import Homepage from './containers/Homepage/homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Outreach from './pages/outreach/outreach';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Homepage} />
        <Route path="/outreach" component={Outreach} />
      </Router>
    </div>
  );
}

export default App;
