import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../sanity-client/client';
import { images } from '../../constants';

import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  const [home, setHome] = useState<any>(null); // FIXME:

  const fetchHomeSection = async () => {
    const homeQuery = '*[_type == "home"][0]'; // a single document (an object is returned, not an array)

    const homeResponse = await client.fetch(homeQuery);
    setHome(homeResponse);
  };

  useEffect(() => {
    fetchHomeSection();
  }, []);

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Rohit</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">
              A software developer with a passion for learning and creating
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/* Display profile image when image is fetched */}
        {home !== null && (
          <img src={urlFor(home.profilePic)} alt="profile pic" />
        )}
        <motion.img
          className="overlay_circle"
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {/* Display images when API call completed */}
        {home !== null &&
          [
            urlFor(home.circleImg1),
            urlFor(home.circleImg2),
            urlFor(home.circleImg3),
          ].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="profile_bg" />
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
