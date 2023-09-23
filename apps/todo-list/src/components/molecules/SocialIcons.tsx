import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
  return (
    <>
      <div className="flex flex-row- justify-end items-center gap-3">
        <a
          className="rounded-md bg-transparent p-2 transition-colors duration-500 hover:bg-white/10 hover:text-black md:p-2.5 lg:p-3"
          href="https://www.instagram.com/lucasmarques_leo/"
          rel="noopener noreferrer"
          target="_blank"
          title="https://www.instagram.com/lucasmarques_leo/"
        >
          <FaInstagram className="h-5 w-5 md:h-7 md:w-7 shrink-0" />
        </a>
        <a
          className="rounded-md bg-transparent p-2 transition-colors duration-500 hover:bg-white/10 hover:text-black md:p-2.5 lg:p-3"
          href="https://github.com/Lucas-Marques-Leao"
          rel="noopener noreferrer"
          target="_blank"
          title="https://github.com/Lucas-Marques-Leao"
        >
          <FaGithub className="h-5 w-5 md:h-7 md:w-7 shrink-0" />
        </a>
      </div>
      <div className="flex justify-end w-full">
        <a
          className="flex w-fit border border-blue-700 bg-blue-500 rounded-md p-2"
          target="_blank"
          href="mailto:lucasmarquesleao@outlook.com"
          title="lucasmarquesleao@outlook.com"
        >
          lucasmarquesleao@outlook.com
        </a>
      </div>
    </>
  );
};

export default SocialIcons;
