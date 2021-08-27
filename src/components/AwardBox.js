import React from "react";

function AwardBox({ mainLogo, footerLogo }) {
  return (
    <div className="box">
      <img className="main-logo" src={mainLogo} alt="" />
      <h3>Free Software Advice</h3>
      <p>Top Rated App Development Companies in USA</p>
      <div className="box-footer">
        <img className="footer-logo" src={footerLogo} alt="" />
        <div className="footer-txt">
          <h4>Awardee</h4>
          <p>The Jury 2018</p>
        </div>
      </div>
    </div>
  );
}

export default AwardBox;
