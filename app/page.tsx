"use client";

import { Navbar } from "@/components";
import { About, Footer, Header, OpenSource, Skills, Work } from "@/container";

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
    </>
  );
}
