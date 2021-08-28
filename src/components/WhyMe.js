import React from "react";
import WhyMeBox from "./WhyMeBox";
import WhyMeList from "./WhyMeList";

function WhyMe() {
  return (
    <div id="why me" className="why-me">
      <h1 className="why-me-head">
        From Lean Design Sprints to Agile Development
      </h1>
      <p className="why-me-p">
        Our process is designed to give you the best shot at success.
      </p>
      <div className="why-me-box-wrapper">
        <WhyMeBox
          img="https://superprops-gatsby.vercel.app/static/a990b93dcfd0b517918e4004c1dd95d8/step-1.png"
          head="1. Research"
          p="We work with you to understand user’s stories and validate your idea with real users using lean design sprints."
        />
        <WhyMeBox
          img="https://superprops-gatsby.vercel.app/static/0204b77df2c71288c9f44a8d6e54e92e/step-2.png"
          head="2. Design"
          p="Expanding on the insights gained, you’ll work closely with our design team to create an elegant design"
        />
        <WhyMeBox
          img="https://superprops-gatsby.vercel.app/static/fe0b605330a667e1fdaae1a56fe9775d/step-3.png"
          head="3. Build"
          p="With our scrum-based agile methodology, you’ll receive iterative builds every two weeks, which gives you "
        />
      </div>
      <div className="why-me-txt-wrapper">
        <div className="left-content">
          <h1>Which is why we Never Stop Learning.</h1>
          <h4>We believe that we succeed when our clients succeed.</h4>
          <p>
            I’m John Doe, a New Zealand born digital designer currently looking
            for opportunities in Canada. Over the 8 years of my career, my
            portfolio includes user interface design, brand & identity design,
            illustration, and art & creative direction.
          </p>
          <p>
            While at Neverbland over the last few years, I've worked on web and
            product solutions for a range of startups, in a variety of
            industries.
          </p>
          <span>Start Your Project ?</span>
          <button>hello@redq.io</button>
        </div>
        <div className="right-content">
          <WhyMeList />
        </div>
      </div>
    </div>
  );
}

export default WhyMe;
