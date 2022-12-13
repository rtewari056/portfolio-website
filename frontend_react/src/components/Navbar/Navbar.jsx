import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navLinks = [
    { name: "home", link: "home" },
    { name: "about", link: "about" },
    { name: "works", link: "works" },
    { name: "skills", link: "skills" },
    { name: "open source", link: "opensource" },
    { name: "contact", link: "contact" },
  ];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={images.logo} alt="logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        {/* Loop through elements present on the navbar */}
        {navLinks.map((item) => (
          <li className="app__flex p-text" key={`link-${item.name}`}>
            <div /> {/* Empty div for apply styling later */}
            <a href={`#${item.link}`}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            style={{ opacity: 0 }}
            whileInView={{ x: [300, 0], opacity: [0.9, 1] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navLinks.map((item) => (
                <li key={`menu-${item.name}`}>
                  <a href={`#${item.link}`} onClick={() => setToggle(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
