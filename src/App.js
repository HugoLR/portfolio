import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./components/Home.js"
import About from "./components/About.js"

class App extends Component {
  state = {
    showCircles:false
  }

  showCirclesToggle = e => this.setState({
    showCircles: !this.state.showCircles
  });

  render() {
    return (
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} showCirclesToggle={this.showCirclesToggle} showCircles={this.state.showCircles}/>} />
        <Route exact path="/about" component={About} />
      </Switch>
    );
  }
}

export default App;
