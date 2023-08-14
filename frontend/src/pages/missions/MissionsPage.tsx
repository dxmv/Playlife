import React from "react";
import { MissionList } from "../../components/mission_components/MissionList";

export const MissionsPage = () => {
	return (
		<>
			<ChooseBar />
			<MissionList />
			<button
				className="mt-5 border-2 w-3/5 py-2"
				style={{ alignSelf: "center" }}
			>
				ADD A NEW MISSION
			</button>
		</>
	);
};

const ChooseBar = () => {
	return (
		<div className="flex  mb-5">
			<p>Choose a progress bar:</p>
			<p> Drop down list</p>
		</div>
	);
};
