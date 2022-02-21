import { MdOutlineSubdirectoryArrowRight, SiTailwindcss, FaReact, FaPython } from "../icons";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white">Skills & Uses</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-400">
          <MdOutlineSubdirectoryArrowRight size="28" />
          <span className="text-white">ReactJS </span>
          &nbsp;<span className="text-react"><FaReact/></span>&nbsp;<span className="text-skc">as my Frontend Framework</span>
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-400">
          <MdOutlineSubdirectoryArrowRight size="28" />
          <span className="text-white">Tailwind CSS </span> 
          &nbsp;<span className="text-tailwind"><SiTailwindcss/></span>&nbsp;<span className="text-skc">as my CSS framework</span>
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-400">
          <MdOutlineSubdirectoryArrowRight size="28" />
          <span className="text-white">Python </span>
          &nbsp;<span className="text-py"><FaPython/></span>&nbsp;<span className="text-skc">as my Main Scripting Language</span>
        </p>
      </div>

      <p className="text-lg font-medium text-skc">
        ...more skills include <span className="text-eskc">Kotlin</span>,{" "}
        <span className="text-eskc">Git</span>,{" "}
        <span className="text-eskc">discord.py </span>{" "}
      </p>
    </div>
  );
};

export default Skills;
