import React from "react";
import HelpBox from "./HelpBox";

function Help() {
  return (
    <div className="help">
      <h1>Ways I can help you</h1>
      <p className="help-des">
        Have a look, some could be interesting to help you achieve your business
        goals or start that
        <br />
        project you always wanted to do... Yes, that one!
      </p>
      <div className="help-box-wrapper">
        <HelpBox />
      </div>
    </div>
  );
}

export default Help;
