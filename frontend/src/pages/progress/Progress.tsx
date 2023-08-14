import React from "react";
import { Navigation } from "../../components/Navigation";
import { MissionList } from "../../components/mission_components/MissionList";

export const Progress = () => {
	return (
		<div className="flex">
			<Navigation />
			<main className="h-screen flex flex-col p-4 w-full">
				<Info />
				<Bar />
				<Missions />
			</main>
		</div>
	);
};

const Missions = () => {
	return (
		<div>
			<p className="mb-2">Missions for this bar</p>
			<MissionList />
			<p className="text-sm mt-2">Edit missions on the mission page</p>
		</div>
	);
};

const Info = () => {
	return (
		<div className="flex justify-between mb-5">
			<p>Bar Name</p>
			<p>Drop down list</p>
			{/* Some stats idk */}
		</div>
	);
};

const Bar = () => {
	return (
		<div className="w-full mb-5">
			<div className="flex justify-between w-full mb-2">
				<p>Level: 1</p>
				<p>XP: 50/100</p>
			</div>
			<div className="border-2 h-10 w-full mb-1"></div>
			<p className="text-sm text-right">History</p>
		</div>
	);
};
