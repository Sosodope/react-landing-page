import React, { Component } from "react";
import "./Features.css";

class Features extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <section className="section">
            <h1 className="title">Features</h1>
            <h2 className="subtitle is-4">Lorum ipsum and all of that jazz.</h2>
            <ul className="features-list">
              <li>
                <i class="fa fa-trophy" />
                <div className="feature">
                  <h4>Feature 1</h4>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione et culpa tempora libero vel aliquid necessitatibus
                    officiis porro odio quam neque ducimus dicta, assumenda
                    voluptas deserunt, minus sequi dolore eius.
                  </p>
                </div>
              </li>
              <li>
                <i class="fa fa-wpexplorer" />
                <div>
                  <h4>Feature 2</h4>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione et culpa tempora libero vel aliquid necessitatibus
                    officiis porro odio quam neque ducimus dicta, assumenda
                    voluptas deserunt, minus sequi dolore eius.
                  </p>
                </div>
              </li>
              <li>
                <i class="fa fa-users" />
                <div>
                  <h4>Feature 3</h4>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione et culpa tempora libero vel aliquid necessitatibus
                    officiis porro odio quam neque ducimus dicta, assumenda
                    voluptas deserunt, minus sequi dolore eius.
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default Features;
