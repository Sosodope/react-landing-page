import React, { Component } from "react";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <section className="section">
            <Hero />
            <HowItWorks />
            <Features />
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
