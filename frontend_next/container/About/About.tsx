"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiFile } from "react-icons/bi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../sanity-client/client";
import "./About.scss";
import Image from "next/image";

export async function getStaticProps() {
  return await client.fetch(`*[_type == "about"]`)
}

const About = () => {
  const [about, setAbout] = useState<any[]>([]); // FIXME: Remove any type

  const fetchAboutSection = async () => {
    const query: string = '*[_type == "about"]';

    const response = await client.fetch(query);
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
        {about.map((abt: any) => (
          <React.Fragment key={abt._type}>
            <motion.div
              className="app__profile-item"
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
            >
              <Image src={urlFor(abt.imgUrl)} width={100} height={100} alt={`${abt._type} Profile Pic`} />
            </motion.div>

            <div className="app__profile-text">
              {abt.description}
              <a href={abt.resumeLink} target="_blank" rel="noopener noreferrer">
                <button>See My Resume <BiFile size={20} style={{marginLeft: "5px"}} /></button>
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
