import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FindMe = () => {
  return (
    <div className="px-6 md:px-20 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-[#9EB3C2] text-lg md:text-2xl">
          Wanna connect
        </p>
        <h1 className="text-[#021a37] text-4xl md:text-6xl font-bold">
          Find Me On
        </h1>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 mt-6">
        {/* GitHub */}
        <a
          href="https://github.com/CSaumya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9EB3C2] text-4xl hover:text-[#0a0646] transition transform hover:scale-110"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/saumya--chaudhary/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9EB3C2] text-4xl hover:text-[#0a0646] transition transform hover:scale-110"
        >
          <FaLinkedin />
        </a>

        {/* X (Twitter) */}
        <a
          href="https://x.com/SaneSaumya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9EB3C2] text-4xl hover:text-[#0a0646] transition transform hover:scale-110"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default FindMe;
