import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Faq from "./components/Faq/Faq";
import Features from "./components/Features/Features";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/feature" component={Features} />
        <Route path="/faq" component={Faq} />
        <Footer author="@sosodope" />
      </div>
    );
  }
}

export default App;
