import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css"; // CSS for "react-toastify"

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

      {/* Remember to render the ToastContainer once in your application tree. Rendering it in the application root would be the best bet */}
      <ToastContainer />
    </div>
  );
};

export default App;
