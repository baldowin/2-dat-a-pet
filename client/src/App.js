import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'
import Home from './pages/homepage'
import Dash from './pages/dashboard'
import AdminDash from './pages/admindashboard'
import Signup from './pages/signuppage'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/dashboard" component={Dash} />
            <Route exact path="/admin" component={AdminDash} />
            <Route exact path="/signup" component={Signup} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
