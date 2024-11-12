"use client";
import {AddTaskWrapper} from "@/components/add-tasks/add-task-button";
import MobileNav from "@/components/nav/mobile-nav";
import SideBar from "@/components/nav/side-bar";
import TodoList from "@/components/todos/todo-list";

export default function About() {
	return (
		<div className="flex min-h-screen w-full">
			<SideBar />
			<div className="flex flex-col flex-1 lg:ml-[280px]">
				<MobileNav />
				<main className="flex flex-1 flex-col gap-4 p-4 lg:px-8">
					<>
						<div className="px-8 md:px-40">
							<div className="flex items-center justify-center">
								<h1 className="text-lg font-semibold md:text-2xl text-center">
									Coming Soon!{" "}
								</h1>
							</div>
						</div>
					</>{" "}
				</main>
			</div>
		</div>
	);
}
