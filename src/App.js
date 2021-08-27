import React from "react";
import "./style/style.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Project from "./components/Project";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Project />
    </div>
  );
}

export default App;
