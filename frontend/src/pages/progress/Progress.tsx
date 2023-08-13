import React from "react";
import { Navigation } from "../../components/Navigation";

export const Progress = () => {
	return (
		<div className="flex">
			<Navigation />
			<main className="h-screen flex flex-col">
				<div>Dropdown list</div>
				<div>Bar, history button</div>
				<div>Quest list</div>
			</main>
		</div>
	);
};
