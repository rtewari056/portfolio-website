import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiFile } from "react-icons/bi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./About.scss";

const About = () => {
  const [about, setAbout] = useState([]);

  const fetchAboutSection = async () => {
    const query = '*[_type == "about"]';

    const response = await client.fetch(query);
    console.log(response);
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
        {about.map((abt) => (
          <React.Fragment key={abt._type}>
            <motion.div
              className="app__profile-item"
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
            >
              <img src={urlFor(abt.imgUrl)} alt={abt._type + "Profile Image"} />
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
