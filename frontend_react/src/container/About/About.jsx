import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  const fetchAboutSection = async () => {
    const query = '*[_type == "abouts"]';

    const response = await client.fetch(query);
    setAbouts(response);
  };

  useEffect(() => {
    fetchAboutSection();
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span> Good Development </span> <br /> means
        <span> Good Business </span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            className="app__profile-item"
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
