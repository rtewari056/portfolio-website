import React from "react";

import { About, Footer, Header, Skills, Work, OpenSource } from "./container";
import { Navbar } from "./components";
import "./App.scss"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <OpenSource />
      <Footer />
    </div>
  );
};

export default App;
