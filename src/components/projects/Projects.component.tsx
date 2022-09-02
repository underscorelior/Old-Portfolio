import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <a href="https://polsu.xyz" className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#a268d1] via-[#9360d6] to-[#818CF8] p-1 text-white duration-100 hover:scale-105" target="_blank" rel="noopener noreferrer">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-pd hover:bg-primary px-2 text-center font-medium">
            <p className="text-xl font-semibold">Polsu, changing the ways servers work.</p>
          </div>
		    </a>

        <a href="https://github.com/underscorelior/" className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#a5b4fc] via-[#86efac] to-[#b5a5fc] p-1 text-white duration-100 hover:scale-105" target="_blank" rel="noopener noreferrer">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-pd hover:bg-primary px-2 text-center font-medium">
            <p className="text-xl font-semibold">Project Gloom</p>
            <p>A dungeoneering rougelike game in Minecraft</p>
          </div>
        </a>
        <a href="https://sbsandbox.xyz/" className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-l from-[#8000ff] to-[#0d6efd] p-1 text-white duration-100 hover:scale-105" target="_blank" rel="noopener noreferrer">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-pd hover:bg-primary px-2 text-center font-medium">
            <p className="text-xl font-semibold">SkyblockSandbox</p>
            <p>A sandbox server based off of Hypixel Skyblock</p>
          </div>
		    </a>
      </div>
    </div>
  );
};

export default Projects;