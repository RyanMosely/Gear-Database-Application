import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TopNavbar from './components/Navbar'
import LandingPage from "./Pages/LandingPage";
import AlaCartePage from "./Pages/AlaCarte"
import SignInSignUp from "./Pages/SignInSignUp"
import Register from "./Pages/Register"

import './App.css';

function App() {
  return (
    <React.Fragment>
    <Router>
      <TopNavbar />
        <Switch>
          <Route exact path="/landing-page" component={LandingPage} />
          <Route path="/alacarte" component={AlaCartePage} />
          <Route path="/register" component={Register} />
          <Route path="/" component={SignInSignUp} />
        </Switch>
    </Router>
  </React.Fragment>
  );
}

export default App;
