import React, { useState } from "react";

function Project() {
  const categories = [
    "design",
    "development",
    "animation",
    "tv advertisement",
    "marketing",
  ];

  return (
    <div className="project" id="project">
      <div className="project-txt">
        <h1>Making Ideas Come to Life !</h1>
        <p>
          Year after year, RedQ Inc has been recognized as one of the top design
          and development firms in New York City. It’s nice to feel appreciated!
        </p>
      </div>
      <div className="project-category">
        {categories.map((category, key) => (
          <h3 key={key}>{category}</h3>
        ))}
      </div>
    </div>
  );
}

export default Project;
