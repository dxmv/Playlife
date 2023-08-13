import React from "react";
import { Progress } from "./pages/progress/Progress";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/progress" element={<Progress />} />
		</Routes>
	);
}

export default App;
