import { RiExternalLinkFill } from "../icons";

const About = () => {
	return (
		<div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
			<div>
				<p className="text-3xl font-bold text-white">Lior</p>
				<p className="mt-1 text-lg font-medium text-gray-300">
				Full-Stack Developer, Freelancer and <a href="https://stocks.underscore.wtf" target="_blank" rel="noopener noreferrer">a Bad Day Trader</a></p>

				<p className="mt-4 text-gray-400">
				Building useless projects, proficient in React.JS/Tailwind CSS. Coding Discord bots <br /> in
				Python.</p>

				<a href="https://rf.underscore.wtf" className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2" target="_blank" rel="noopener noreferrer">
					Check out my Discord Bot! [WIP]
					<RiExternalLinkFill /></a>

				<a href="https://fiverr.underscore.wtf/" className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2" target="_blank" rel="noopener noreferrer">
					Check out my Fiverr
					<RiExternalLinkFill /></a>
			</div>

			<div>
				<a href="https://giger.underscore.wtf/" target="_blank" rel="noopener noreferrer">
					<img src="/avatar.png" width="112" height="112" className="rounded-full" alt="avatar"/>
				</a>
			</div>
		</div>
	);
};

export default About;