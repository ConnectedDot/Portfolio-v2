import {channel} from "diagnostics_channel";
import React from "react";
import SideBar from "../nav/side-bar";
import MobileNav from "../nav/mobile-nav";
import Background from "../nav/background";
import {TooltipProvider} from "../ui/tooltip";
import BottomNavbar from "./navbar";

export default function LayoutRoot({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className="flex min-h-screen w-full">
				{/* <SideBar /> */}

				{/* {children} */}
				{/* <div className="flex flex-col flex-1 lg:ml-[280px]"> */}
				{/* <MobileNav /> */}
				<main className="flex flex-1 flex-col gap-4 p-4 lg:px-8">
					<TooltipProvider delayDuration={0}>
						<BottomNavbar />
						<>
							<div className="px-8 md:px-40">
								<Background />

								{children}
							</div>
						</>
					</TooltipProvider>
				</main>
				{/* </div> */}
			</div>
		</>
	);
}
