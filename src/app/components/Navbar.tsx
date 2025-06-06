import React from "react";
import { Moon } from "lucide-react";

const Navbar = () => {
	return (
		<header className="flex flex-col sm:flex-row justify-between items-center mb-12">
			<div className="relative group">
				<a
					href="/"
					className="text-2xl font-semibold mb-4 sm:mb-0 sm:block hidden cursor-pointer"
				>
					<span>アロック</span>
				</a>
				<div className="font-normal pointer-events-none z-50 absolute left-0 mt-2 w-64 sm:w-80 md:w-96 lg:w-max bg-slate-900/95 border border-slate-700/50 backdrop-blur-sm text-slate-100 rounded-md p-2 text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out whitespace-normal break-words">
					my name in jap, looks cool right?
				</div>
			</div>
			{/* <nav className="flex flex-wrap justify-center items-center gap-4">
				<a
					href="https://blog.alk.pw"
					className="hover:text-white transition-colors"
				>
					Blog
				</a>
				<a href="#projects" className="hover:text-white transition-colors">
					Projects
				</a>
				<a href="#contacts" className="hover:text-white transition-colors">
					Contacts
				</a>
				<button className="hidden p-2 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors">
					<Moon size={18} />
				</button>
			</nav> */}
		</header>
	);
};

export default Navbar;
