import { ToastContainer } from "react-toastify";
import { Routes, Route, Navigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.min.css"; // CSS for "react-toastify"

import { About, Footer, Header, Skills, Work, OpenSource } from "./container";
import { Navbar } from "./components";

import "./App.scss";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Navbar />
              <Header />
              <About />
              <Work />
              <Skills />
              <OpenSource />
              <Footer />
            </div>
          }
        />

        {/* If the user enters an invalid path in the URL it automatically redirects them to the homepage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Remember to render the ToastContainer once in your application tree. Rendering it in the application root would be the best bet */}
      <ToastContainer />
    </>
  );
};

export default App;
