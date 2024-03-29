"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Component Wrapper
import { AppWrap, MotionWrap } from "@/wrapper";

// Sanity Client
import { urlFor, client } from "@/sanity-client/client";

// Type
import { OpenSource } from '@/models/Portfolio.type';

// Style
import './OpenSource.scss';
import Link from 'next/link';

const OpenSource = () => {
  const [openSource, setOpenSource] = useState<OpenSource[]>([]);

  const fetchOpenSourceSection = async () => {
    const openSourceQuery: string = `*[_type == "openSource"]{
      name,
      prLink,
      imgUrl
    }`;

    const response = await client.fetch<OpenSource[]>(openSourceQuery);
    
    setOpenSource(response);
  };

  useEffect(() => {
    fetchOpenSourceSection();
  }, []);


  return (
    <>
      <h2 className="head-text">
        Open Source <span>Contributions</span>
      </h2>

      <p className="bold-text" style={{ textAlign: "center" }}>
        Top Open Source Contributons to Various Orgs/Companies
      </p>

      <div className="app__opensource-organization app__flex">
        {openSource.map((os, i) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={i}
          >
            <Link title={os.name} href={os.prLink} target="_blank" rel="noopener noreferrer">
              <Image width={100} height={100} src={urlFor(os.imgUrl)} alt={os.name} />
            </Link>
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
