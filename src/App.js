import React from "react";
import "./style/style.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Project from "./components/Project";
import Awards from "./components/Awards";
import WhyMe from "./components/WhyMe";
import Help from "./components/Help";
import Client from "./components/Client";
import Work from "./components/Work";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Project />
      <Awards />
      <WhyMe />
      <Help />
      <Client />
      <Work />
    </div>
  );
}

export default App;
