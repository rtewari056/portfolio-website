"use client";

import { Navbar } from "@/components";
import { About, Footer, Header, OpenSource, Skills, Work } from "@/container";
import { ToastContainer } from "react-toastify";

// App style
import '@/styles/app.scss'

export default function Home() {

  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <OpenSource />
        <Footer />
      </div>

      {/* Remember to render the ToastContainer once in your application tree. Rendering it in the application root would be the best bet */}
      <ToastContainer />
    </>
  );
}
