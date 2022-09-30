import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/rtewari056/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>

        {/* <BsLinkedin /> */}
      </div>
      <div>
        <a
          href="https://github.com/rtewari056"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoMarkGithub />
        </a>

        {/* <GoMarkGithub /> */}
      </div>
      <div>
        <a
          href="https://twitter.com/rtewari056"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter />
        </a>

        {/* <BsTwitter /> */}
      </div>
    </div>
  );
};

export default SocialMedia;
