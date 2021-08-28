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
        <HelpBox
          src="https://superprops-gatsby.vercel.app/static/bd91cababc84c457e9fa40b9e38cb5a4/skill-1.svg"
          head="Graphic Design"
          des="Aristotle maintained the sharp distinction between science and the practical"
          per="90%"
        />
        <HelpBox
          src="https://superprops-gatsby.vercel.app/static/4623575a7f340e975bbc6c798444c606/skill-2.svg"
          head="UI/UX Design"
          des="Aristotle maintained the sharp distinction between science and the practical"
          per="85%"
        />
        <HelpBox
          src="https://superprops-gatsby.vercel.app/static/a7e181f6ff6f6b51c86fdcc966bfa692/skill-3.svg"
          head="Web Application"
          des="Aristotle maintained the sharp distinction between science and the practical"
          per="80%"
        />
        <HelpBox
          src="https://superprops-gatsby.vercel.app/static/abae3e9bcb91a2b8a75daed6f00ca8f1/skill-4.svg"
          head="Mobile Application"
          des="Aristotle maintained the sharp distinction between science and the practical"
          per="70%"
        />
      </div>
    </div>
  );
}

export default Help;
