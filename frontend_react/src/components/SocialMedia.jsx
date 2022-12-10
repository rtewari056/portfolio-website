import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/rtewari056/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>

      <a
        href="https://github.com/rtewari056"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <GoMarkGithub />
        </div>
      </a>

      <a
        href="https://twitter.com/rtewari056"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsTwitter />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
