import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsLinkedin />
      </div>
      <div>
        <GoMarkGithub />
      </div>
      <div>
        <BsTwitter />
      </div>
    </div>
  );
};

export default SocialMedia;
