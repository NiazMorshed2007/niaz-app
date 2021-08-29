import React from "react";

function Footer() {
  const icons = [
    "fab fa-facebook-f",
    "fab fa-twitter",
    "fab fa-instagram",
    "fab fa-dribbble",
  ];
  return (
    <div className="footer">
      <div className="left">
        <h3>So, do we work together?</h3>
        <h1>LET'S TALK!</h1>
        <div className="icons">
          {icons.map((e, i) => (
            <i key={i} className={e}></i>
          ))}
        </div>
        <h5>© 2018 All rights reserved. RedQ, Inc.</h5>
        <p>
          Built & designed with <i className="material-icons">favorite</i>
        </p>
      </div>
      <div className="right">
        <h5>A treat for your inbox</h5>
        <label>
          <input type="text" placeholder="Email address" />
          <span>Subscribe</span>
        </label>
        <div className="info">
          <div>
            <p>Need help?</p>
            <h5>redq.io</h5>
          </div>
          <div>
            <p>Feel like talking</p>
            <h5>+12 34 56789</h5>
          </div>
        </div>
        <div className="three">
          <p>Contact</p>
          <p>Privacy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
