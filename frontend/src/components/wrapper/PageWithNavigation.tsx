import React, { ReactNode } from "react";
import { Navigation } from "../Navigation";

export const PageWithNavigation = ({ page }: { page: ReactNode }) => {
	return (
		<div className="flex">
			<Navigation />
			<main className="h-screen flex flex-col p-4 w-full">{page}</main>
		</div>
	);
};
