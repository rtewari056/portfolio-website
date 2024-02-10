'use client';
import { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../sanity-client/client';
import './Testimonial.scss';
import Image from 'next/image';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<any[]>([]); // FIXME:
  const [brands, setBrands] = useState<any[]>([]); // FIXME:

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  const fetchTestimonialAndBrandSection = async () => {
    const testimonialsQuery = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    const testimonialsResponse = await client.fetch(testimonialsQuery);
    const brandsResponse = await client.fetch(brandsQuery);

    setTestimonials(testimonialsResponse);
    setBrands(brandsResponse);
  };

  useEffect(() => {
    fetchTestimonialAndBrandSection();
  }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <Image
              src={urlFor(testimonials[currentIndex].imgurl)}
              alt={testimonials[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <Image width={100} height={100} src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonials',
  'app__primarybg'
);
