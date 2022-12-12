import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./OpenSource.scss";

const OpenSource = () => {
  const [openSource, setOpenSource] = useState([]);

  const fetchOpenSourceSection = async () => {
    const openSourceQuery = '*[_type == "openSource"]';

    const openSourceResponse = await client.fetch(openSourceQuery);
    setOpenSource(openSourceResponse);
  };

  useEffect(() => {
    fetchOpenSourceSection();
  }, []);

  return (
    <>
      <h2 className="head-text">
        Open Source <span>Contributions</span>
      </h2>

      <p className="bold-text " style={{textAlign: "center"}}>
      Top Open Source Contributons to Various Orgs/Companies
      </p>

      <div className="app__opensource-organization app__flex">
        {openSource.map((os) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={os._id}
          >
            <a title={os.name} href={os.prLink} target="_blank" rel="noopener noreferrer">
              <img src={urlFor(os.imgUrl)} alt={os.name} />
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(OpenSource, "app__opensource"),
  "opensource",
  "app__primarybg"
);
