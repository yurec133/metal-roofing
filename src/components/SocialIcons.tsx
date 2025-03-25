import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex space-x-3 justify-center sm:justify-start">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className="w-5 h-5 text-blue-200 hover:text-white transition-colors" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="w-5 h-5 text-blue-200 hover:text-white transition-colors" />
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="w-5 h-5 text-blue-200 hover:text-white transition-colors" />
      </a>
    </div>
  );
};

export default SocialIcons;
