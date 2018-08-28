import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">GoodWeb</a>
          </div>

          <span className="nav-toggle">
            <span />
            <span />
            <span />
          </span>

          <div className="nav-right nav-menu">
            <div className="nav-item">
              <p className="control">
                <a className="button is-primary is-outlined">
                  <span className="icon">
                    <i class="fas fa-comment-alt" />
                    <span>Contact Us</span>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
