import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import RedirectHandler from './components/RedirectHandler';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignUp} />
        <Route path="/auth/callback" element={<RedirectHandler />} />
      </Switch>
    </Router>
  );
}

export default App;
