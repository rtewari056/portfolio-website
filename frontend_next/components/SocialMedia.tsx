// import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/rtewari056/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn icon"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>

      <a
        href="https://github.com/rtewari056"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub icon"
      >
        <div>
          <BsGithub />
        </div>
      </a>

      <a
        href="https://twitter.com/rtewari056"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter icon"
      >
        <div>
          <BsTwitter />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
