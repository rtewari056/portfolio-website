"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
// import ReactTooltip from "react-tooltip";

// Component Wrapper
import { AppWrap, MotionWrap } from "@/wrapper";

// Sanity Client
import { urlFor, client } from "@/sanity-client/client";

// Type
import { Experience, Skill } from '@/models/Portfolio.type';

// Style
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);

  const fetchSkillsAndExperiencesSection = async () => {
    const experiencesQuery: string = `*[_type == "experiences"]{
      year,
      works[]{
        role,
        company,
        description
      }
    }`;
    const skillsQuery: string = `*[_type == "skills"]{
      name,
      bgColor,
      icon
    }`;

    const experiencesResponse = await client.fetch<Experience[]>(experiencesQuery);
    const skillsResponse = await client.fetch<Skill[]>(skillsQuery);

    setExperiences(experiencesResponse);
    setSkills(skillsResponse);
  };

  useEffect(() => {
    fetchSkillsAndExperiencesSection();
  }, []);

  const [tooltip, showTooltip] = useState(true);

  return (
    <>
      <h2 className="head-text">Skills & <span>Experiences</span> </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="app__skills-item app__flex"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <Image width={100} height={100} src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>

              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, i) => (
                  <React.Fragment key={work.role}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.role}
                      key={i}
                      onMouseEnter={() => showTooltip(true)}
                      onMouseLeave={() => {
                        showTooltip(false);
                        setTimeout(() => showTooltip(true), 50);
                      }}
                    >
                      <strong className="bold-text">{work.role}</strong>
                      <p className="p-text">{work.company}</p>
                    </motion.div>

                    {/* React 18: Tooltips not hiding quick fix until the package is updated */}
                    {/* {tooltip && (
                      <ReactTooltip
                        id={work.name}
                        effect="float"
                        arrowColor="#fff"
                        className="skills-tooltip"
                      >{work.description}</ReactTooltip>
                    )} */}
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);
