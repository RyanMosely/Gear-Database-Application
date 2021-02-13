import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TopNavbar from './components/Navbar'
import LandingPage from "./Pages/LandingPage";
import AlaCartePage from "./Pages/AlaCarte"

import './App.css';

function App() {
  return (
    <React.Fragment>
    <Router>
      <TopNavbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/alacarte" component={AlaCartePage} />
        </Switch>
    </Router>
  </React.Fragment>
  );
}

export default App;
