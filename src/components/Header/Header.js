import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    let menuActive = this.state.isToggleOn ? "is-active" : "";

    return (
      <div className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">MyCompany</a>
          </div>

          <span
            className={"nav-toggle " + menuActive}
            onClick={this.handleClick}
          >
            <span />
            <span />
            <span />
          </span>

          <div className={"nav-right nav-menu " + menuActive}>
            <a href="/" className="nav-item r-item">
              Home
            </a>
            <a href="/faq" className="nav-item r-item">
              Features
            </a>
            <a href="/faq" className="nav-item r-item">
              About
            </a>
            <a href="/faq" className="nav-item r-item">
              FAQ
            </a>

            <div className="nav-item">
              <p className="control">
                <a className="button is-primary is-outlined">
                  <span>Join Now</span>
                  <span className="icon">
                    <i className="fa fa-plus" />
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
