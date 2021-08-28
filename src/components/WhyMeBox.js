import React from "react";

function WhyMeBox({ img, head, p }) {
  return (
    <div className="why-me-box">
      <img src={img} alt="" />
      <h2>{head}</h2>
      <p>{p}</p>
    </div>
  );
}

export default WhyMeBox;
