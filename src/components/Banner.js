import React from "react";

function Banner() {
  return (
    <div id="me" className="banner">
      <div className="inner-banner">
        <div className="banner-left">
          <h4>Hello, I’m</h4>
          <h1>Jon Doe</h1>
          <h3>Visual System Designer</h3>
          <div className="banner-txt">
            <i className="material-icons">shortcut</i>
            <h5>Illustrative Lead at RedQ</h5>
          </div>
          <p>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Lorem Ipsum is simply
            dummy text of the printing.
          </p>
          <div className="banner-icons">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-dribbble"></i>
          </div>
        </div>
        <div className="banner-right">
          <img
            src="https://superprops-gatsby.vercel.app/static/person-990f9c9efcc096a59574bdc1b3149012.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
