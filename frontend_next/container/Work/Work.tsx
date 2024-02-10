"use client";

import { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Component Wrapper
import { AppWrap, MotionWrap } from "@/wrapper";

// Sanity Client
import { urlFor, client } from "@/sanity-client/client";

// Style
import './Work.scss';

// Type
import { Work } from '@/models/Portfolio.type';
type AnimateCard = {
  y: number;
  opacity: number;
}

const Work = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [animateCard, setAnimateCard] = useState<AnimateCard>({ y: 0, opacity: 1 });
  const [works, setWorks] = useState<Work[]>([]);
  const [filterWork, setFilterWork] = useState<Work[]>([]);

  const fetchWorkSection = async () => {
    const query = `*[_type == "works"]{
      title,
      description,
      projectLink,
      codeLink,
      imgUrl,
      tags
    }`;
    const response = await client.fetch<Work[]>(query);

    setWorks(response);
    setFilterWork(response);
  };

  useEffect(() => {
    fetchWorkSection();
  }, []);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 }); // Trigger animation

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item))); // Implementing project filter
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Recent <span>Works</span>
      </h2>

      <div className="app__work-filter">
        {/* Filter project type */}
        {["UI/UX", "Web App", "MERN App", "React JS", "All"].map(
          (item, i) => (
            <div
              key={i}
              className={`app__work-filter-item app__flex p-text ${activeFilter === item ? "item-active" : ""
                }`}
              onClick={() => handleWorkFilter(item)}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        className="app__work-portfolio"
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        {filterWork.map((work, index) => (
          <div key={index} className="app__work-item app__flex">
            <div className="app__work-img app__flex">
              <Image width={100} height={100} src={urlFor(work.imgUrl)} alt={work.title} />

              <motion.div
                className="app__work-hover app__flex"
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
              >
                <a title="View Demo" href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    className="app__flex"
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                <a title="Source Code" href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    className="app__flex"
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <strong className="bold-text">{work.title}</strong>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "works", "app__primarybg");
