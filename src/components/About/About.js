import React, { Component } from "react";
import Team from "./team-bg.jpg";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <section className="section">
            <h1 className="title">About</h1>
            <img src={Team} alt="Team work" />
            <div className="about">
              <h4>Lorem ipsum dolor sit amet</h4>
              <p>
                Blanditiis fugit natus asperiores vel, quaerat vitae molestias
                quisquam doloribus placeat veritatis temporibus aliquid officiis
                nulla ratione pariatur commodi eos enim totam.
              </p>
            </div>
            <a className="button is-primary">
              <span>Book an appointment</span>
            </a>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
