import React from 'react';
import './App.css';
import Homepage from './containers/Homepage/homepage';
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom'
import Outreach from './pages/outreach/outreach';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        
          <Route exact path="/" component={Homepage} />
          <Route path="/outreach" component={Outreach} />
        
      </div>
    </HashRouter>
  );
}

export default App;
