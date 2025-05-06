"use client";
import {AddTaskWrapper} from "@/components/add-tasks/add-task-button";
import MobileNav from "@/components/nav/mobile-nav";
import SideBar from "@/components/nav/side-bar";
import TodoList from "@/components/todos/todo-list";
import {ScrollArea} from "@radix-ui/react-scroll-area";
import {portfolioItems} from "../data/porto";
import {GalleryWorks} from "@/components/gallery-works";
import {ScrollBar} from "@/components/ui/scroll-area";
import {useRouter} from "next/navigation";
import Link from "next/link";
// import {portfolioItems} from ""
// import { GalleryWorks } from "./components/gallery-works";

export default function Portfolio() {
	const router = useRouter();

	const onClick = (portData: any) => {
		console.log("Clicked portfolio item:", portData); // Add logging here

		if (!portData.id) {
			console.error("portData is missing an ID:", portData);
			return;
		}

		const query = new URLSearchParams({
			title: portData.title,
			description: portData.description,
			mediaUrl: portData.mediaUrl,
			deployedLink: portData.deployedLink,
			githubLink: portData.githubLink,
			infoOne: portData.infoOne,
			infoTwo: portData.infoTwo,
		}).toString();

		router.push(`/portfolio/${portData.id}`);
		// router.push(`/portfolio/${portData.id}?${query}`);
	};

	return (
		<div className="flex min-h-screen w-full">
			<SideBar />
			<div className="flex flex-col flex-1 lg:ml-[280px]">
				<MobileNav />
				<main className="flex flex-1 flex-col gap-4 p-4 lg:px-8">
					<>
						<div className="px-8 md:px-40 py-8">
							<h2 className="mt-14 border-b scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
								Portfolio
							</h2>
							<h5 className="mt-4 scroll-m-20  pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0">
								&quot;Here’s a collection of my recent work, each project
								reflecting my dedication to creating fast, accessible, and
								aesthetically pleasing web applications. From building
								interactive dashboards to optimizing site performance, these
								projects showcase my expertise in front-end engineering and
								UI/UX design.&quot;{" "}
							</h5>

							<div className="relative mt-4">
								<ScrollArea>
									<div className="grid grid-cols-1 gap-4 pb-4 sm:grid-cols-2 lg:grid-cols-3">
										{portfolioItems.map(port => (
											<Link key={port.id} href={`/portfolio/${port.id}`}>
												<GalleryWorks
													key={port.id}
													{...port}
													Ports={port}
													className="w-full"
													aspectRatio="portrait"
													width={250}
													height={330}
													// onClick={() => onClick(port)}
												/>
											</Link>
										))}
									</div>
									<ScrollBar orientation="horizontal" />
								</ScrollArea>
							</div>
						</div>
					</>
				</main>
			</div>
		</div>
	);
}
