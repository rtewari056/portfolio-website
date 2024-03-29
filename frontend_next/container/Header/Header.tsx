"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Component Wrapper
import { AppWrap } from '@/wrapper';

// Sanity Client
import { urlFor, client } from '@/sanity-client/client';

// Type
import { Home } from '@/models/Portfolio.type';

// Style
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
  const [home, setHome] = useState<Home | null>(null);

  async function fetchHomeSection() {
    // A single document (an object is returned, not an array)
    const homeQuery: string = `*[_type == "home"][0]{
      profileBackgroundCircle,
      profilePic,
      circleImg1,
      circleImg2,
      circleImg3,
    }`;

    const response = await client.fetch<Home>(homeQuery);

    setHome(response);
  }

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
          <Image priority width={400} height={400} style={{ height: "auto" }} src={urlFor(home.profilePic)} alt="profile pic" />
        )}
        {home !== null && <motion.img
          className="overlay_circle"
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={urlFor(home.profileBackgroundCircle)}
          fetchPriority='high'
          alt="profile-background-circle"
        />}
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
              <Image priority width={100} height={100} src={circle} alt="profile_bg" />
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
