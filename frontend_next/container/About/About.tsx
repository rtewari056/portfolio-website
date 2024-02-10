"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiFile } from "react-icons/bi";
import Image from "next/image";

// Component Wrapper
import { AppWrap, MotionWrap } from "@/wrapper";

// Sanity Client
import { urlFor, client } from "@/sanity-client/client";

// Type
import { About } from "@/models/Portfolio.type";

// Style
import "./About.scss";

const About = () => {
  const [about, setAbout] = useState<About[]>([]);

  const fetchAboutSection = async () => {
    const query: string = `*[_type == "about"]{
      description,
      resumeLink,
      imgUrl
    }`;

    const response = await client.fetch<About[]>(query);
    setAbout(response);
  };

  useEffect(() => {
    fetchAboutSection();
  }, []);


  return (
    <>
      <h2 className="head-text">
        About <span>Me</span>
      </h2>

      <div className="app__profiles">
        {about.map((abt, i) => (
          <React.Fragment key={i}>
            <motion.div
              className="app__profile-item"
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
            >
              <Image src={urlFor(abt.imgUrl)} width={100} height={100} alt="About Section Profile Pic" />
            </motion.div>

            <div className="app__profile-text">
              {abt.description}
              <a href={abt.resumeLink} target="_blank" rel="noopener noreferrer">
                <button>See My Resume <BiFile size={20} style={{ marginLeft: "5px" }} /></button>
              </a>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
