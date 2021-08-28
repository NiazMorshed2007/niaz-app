import React from "react";

function HelpBox({ src, head, des, per }) {
  return (
    <div className="box">
      <div className="box1">
        <div className="left">
          <img src={src} alt="" />
        </div>
        <div className="right">
          <h4>{head}</h4>
          <p>{des}</p>
        </div>
      </div>
      <div className="box2">
        <div className="box2-1">
          <i className="material-icons">thumb_up</i>
          <span>{per}</span>
        </div>
        <div className="box2-2"></div>
      </div>
    </div>
  );
}

export default HelpBox;
