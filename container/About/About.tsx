"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { BiFile } from "react-icons/bi";
import Image from "next/image";

// Component Wrapper
import { AppWrap, MotionWrap } from "@/wrapper";

// Sanity Client
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Type
import { About as AboutType } from "@/models/portfolio.type";

// Style
import "./About.scss";

const About = () => {
  const [about, setAbout] = useState<AboutType[]>([]);

  const fetchAboutSection = async () => {
    const query: string = `*[_type == "about"]{
      description,
      resumeLink,
      imgUrl
    }`;

    const response = await client.fetch<AboutType[]>(query);
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
