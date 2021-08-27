import React from "react";
import AwardBox from "./AwardBox";

function Awards() {
  return (
    <div id="awards" className="awards">
      <h1>Honorable Recognitions & Awards</h1>
      <p>
        Year after year, RedQ Inc has been recognized as one of the top design
        and development firms in New York City. It’s nice to feel appreciated!
      </p>
      <div className="award-box-wrapper">
        <AwardBox
          mainLogo="https://superprops-gatsby.vercel.app/static/ba14dc88cf7fc3293cfef7760c34eef7/award-3.png"
          footerLogo="https://superprops-gatsby.vercel.app/static/2249455b5f1b6fb281abd0f2ca4504f7/awardee-3.png"
        />
        <AwardBox
          mainLogo="https://superprops-gatsby.vercel.app/static/ce4a61cbc65d8b8efc449f9f78796549/award-4.png"
          footerLogo="https://superprops-gatsby.vercel.app/static/6fec90940e386f25d56e5dd33c83c706/awardee-4.png"
        />
        <AwardBox
          mainLogo="https://superprops-gatsby.vercel.app/static/ae833685c1c2b137760eb0a5ef108e86/award-1.png"
          footerLogo="https://superprops-gatsby.vercel.app/static/fc4ed60dd12f7f4dd09639214ea1ec78/awardee-1.png"
        />
        <AwardBox
          mainLogo="https://superprops-gatsby.vercel.app/static/4bdc14c41fb13221dd369336e12c7125/award-2.png"
          footerLogo="https://superprops-gatsby.vercel.app/static/2a015a89dac7a233f157a63c6b287986/awardee-2.png"
        />
      </div>
    </div>
  );
}

export default Awards;
