import React from "react";
import ClientBox from "./ClientBox";

function Client() {
  const imgSrc = [
    "https://superprops-gatsby.vercel.app/static/b17577c2e0161cf31ed586fc6aeb8ff0/client-1.png",
    "https://superprops-gatsby.vercel.app/static/aa1f059690d973f7ced21a7c3adf012b/client-2.png",
    "https://superprops-gatsby.vercel.app/static/40c3d82f0f02a3fc2c19926ba5c8e7a4/client-3.png",
    "https://superprops-gatsby.vercel.app/static/11c9744f8915ad079804788b97bfa1f8/client-4.png",
    "https://superprops-gatsby.vercel.app/static/55615e15d88952f3be47819ec03a27e6/client-5.png",
    "https://superprops-gatsby.vercel.app/static/cf9d07d69a2fe0f147b2a5d0f17a0b2d/client-6.png",
  ];

  return (
    <div className="client">
      <div className="up">
        <div className="left">
          <h1>What’s cooking in the lab?</h1>
          <p>
            The place to find the latest industry trends, new RedQ Inc app
            launches and information to keep you at the top your tech game.
          </p>
        </div>
        <div className="right">
          <button>READ OUR BLOG</button>
        </div>
      </div>
      <div className="head">
        <div className="left">
          <h1>What My Clients Say?</h1>
          <p className="client-des">
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do
            eiusmod tempor incid idunt ut labore
          </p>
        </div>
        <div className="right">
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
      <div className="client-box-wrapper">
        <ClientBox
          logo="https://superprops-gatsby.vercel.app/static/d53e13a8e6ebfb866dddcd2704838223/fd013/client-avatar-3.jpg"
          name="John Doe"
          per="Co-Founder & COO"
        />
        <ClientBox
          logo="https://superprops-gatsby.vercel.app/static/1121ddf517575b4a1249721ede9db926/7d668/client-avatar-1.jpg"
          name="Jon Doe"
          per="Co-Founder & COO"
        />
        <ClientBox
          logo="https://superprops-gatsby.vercel.app/static/ff528c5b685b8c296b9b65c7ca0b6333/7d668/client-avatar-2.jpg"
          name="Jeny Doe"
          per="Co-Founder & COO"
        />
      </div>
      <div className="client-footer">
        <h3>We can build your story.</h3>
        <p>
          Through the years we have partnered with great companies and
          entrepreneurs all over the world.
        </p>
        <div className="img-wrapper">
          {imgSrc.map((img, index) => (
            <img key={index} src={img} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Client;
