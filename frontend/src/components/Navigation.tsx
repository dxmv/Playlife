import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
	return (
		<nav className="h-screen w-2/12 border-r-2 p-6">
			<ul className="flex flex-col justify-between h-full">
				<div className="flex flex-col">
					<NavItem text="Progress" path="/progress" />
					<NavItem text="Missions" path="/progress" />
					<NavItem text="About" path="/progress" />
					<NavItem text="How To Use" path="/progress" />
				</div>
				<div className="flex flex-col">
					<NavItem text="Settings" path="/progress" />
					<NavItem text="Profile" path="/progress" />
					<NavItem text="Contact" path="/progress" />
				</div>
			</ul>
		</nav>
	);
};

const NavItem = ({ text, path }: { text: string; path: string }) => {
	return (
		<NavLink to={path} className="mb-4 border-2 py-2 px-4">
			{text}
		</NavLink>
	);
};
