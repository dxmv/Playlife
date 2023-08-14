import React from "react";
import { Progress } from "./pages/progress/Progress";
import { Routes, Route } from "react-router-dom";
import { MissionsPage } from "./pages/missions/MissionsPage";
import { PageWithNavigation } from "./components/wrapper/PageWithNavigation";

function App() {
	return (
		<Routes>
			<Route
				path="/progress"
				element={<PageWithNavigation page={<Progress />} />}
			/>
			<Route
				path="/missions"
				element={<PageWithNavigation page={<MissionsPage />} />}
			/>
		</Routes>
	);
}

export default App;
