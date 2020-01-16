import React, { Component } from "react";
import Content from "../Component/Content";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomeS from "../Container/Welcome/Welcome";
import AboutmeTag from "../Container/Aboutme/Aboutme";

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <Content />
        <Route exact path="/" component={WelcomeS} />
        <Route  path="/profile" component={AboutmeTag} />
      </Router>
    );
  }
}
