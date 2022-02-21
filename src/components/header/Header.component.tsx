import React, { useState, useEffect } from "react";
import { BiCodeAlt } from "react-icons/bi";
const TextLink = ({ text, href }: any) => {
	return (
	  <a href={href} className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-gray-700">{text}</a>
	);
};
const Header: React.FC = () => {
	const [topOfPage, setTopOfPage] = useState<boolean>();
  
	useEffect(() => {
	  window.addEventListener("scroll", () => {
		if (window.scrollY > 1) {
		  setTopOfPage(false);
		} else {
		  setTopOfPage(true);
		}
	  });
}, []);
  return (
    <header className={`flex flex-row items-center justify-between py-8 font-jost`}>
      <p className="hidden sm:flex sm:flex-row sm:gap-x-4">
        <TextLink text="Home" href="#" />
        <TextLink text="Skills" href="#skills" />
        <TextLink text="Projects" href="#projects" />
        <TextLink text="Contact" href="#contact" />
      </p>

      <a href="https://github.com/underscorelior/" className="rounded-lg border-2 border-slate-900 bg-gray-700 p-2 text-2xl text-white hover:border-white" target="_blank" rel="noopener noreferrer" aria-label="all projects"><BiCodeAlt /></a>
    </header>
  );
};

export default Header;
