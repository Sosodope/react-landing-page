import React from "react";
import "./Footer.css";

const Footer = props => {
  return (
    <footer className="footer">
      <p>
        Made with{" "}
        <span>
          <i class="fa fa-heart" />
        </span>{" "}
        by {props.author}
      </p>
    </footer>
  );
};

export default Footer;
