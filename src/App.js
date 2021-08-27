import React from "react";
import "./style/style.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Project from "./components/Project";
import Awards from "./components/Awards";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Project />
      <Awards />
    </div>
  );
}

export default App;
