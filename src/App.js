import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutPage from "./components/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <Router>
      <Menu></Menu>
      <Hero></Hero>
      <div className="mainContainer">
        <Switch>
          <Route path="/about">
            <AboutPage></AboutPage>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
