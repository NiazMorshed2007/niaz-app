import React from "react";

function Project() {
  const categories = [
    "design",
    "development",
    "animation",
    "tv advertisement",
    "marketing",
  ];

  const vlf = [
    {
      num: "4.5K",
      txt: "View",
    },
    {
      num: "1.5K",
      txt: "Love",
    },
    {
      num: "1.2K",
      txt: "Feedback",
    },
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
      <div className="project-slider">
        <div className="project-slider1">
          <div className="left">
            <img
              src="https://superprops-gatsby.vercel.app/static/fd7f70fdb223cdef31fb791bfaaf951d/c3638/portfolio-1.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <h4>VISIT LIVE SITE</h4>
            <h1>American Media Site</h1>
            <p>
              An effective and immersive user experience is what catches the
              attention and spreads a clear message. That's why we attach great
              importance to the fact that ergonomics serves the design, and that
              this design is innovative and neat.
            </p>
          </div>
        </div>
      </div>
      <div className="project-footer">
        <div className="project-footer1">
          <h4>
            FEATURED IN <span>AWWWARDS</span>
          </h4>
          {vlf.map((item, index) => (
            <p key={index}>
              {item.num}
              <span>{item.txt}</span>
            </p>
          ))}
        </div>

        <div className="project-footer2">
          <div className="left-btn-wrap">
            <div className="left-btn-clone"></div>
            <div className="left-btn"></div>
          </div>
          <div className="right-btn-wrap">
            <div className="right-btn-clone"></div>
            <div className="right-btn"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
