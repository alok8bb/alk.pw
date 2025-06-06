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
				<div className="absolute left-0 mt-2 w-64 p-2 bg-gray-800 text-white text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
					my name in jap, looks cool right?
				</div>
			</div>
			<nav className="flex flex-wrap justify-center items-center gap-4">
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
			</nav>
		</header>
	);
};

export default Navbar;
