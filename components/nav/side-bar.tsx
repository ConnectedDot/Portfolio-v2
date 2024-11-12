"use client";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {primaryNavItems} from "@/utils";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import {useState} from "react";
import {Github, Hash, PlusIcon} from "lucide-react";
import {Dialog, DialogContent, DialogTrigger} from "../ui/dialog";
import AddProjectDialog from "../projects/add-project-dialog";
import AddLabelDialog from "../labels/add-label-dialog";
import X from "@/public/logo/x.svg";
import GitHUb from "@/public/logo/github.svg";
import DevTo from "@/public/logo/devdotto.svg";
import LinkedIn from "@/public/logo/linkedin.svg";
import Image from "next/image";

interface MyListTitleType {
	[key: string]: string;
}

export default function SideBar() {
	const pathname = usePathname();

	const LIST_OF_TITLE_IDS: MyListTitleType = {
		primary: "",
		projects: "My Projects",
	};

	const [navItems, setNavItems] = useState([...primaryNavItems]);

	return (
		<div className="fixed hidden lg:block top-0 left-0 h-full w-[220px] lg:w-[280px] border-r bg-muted/40 overflow-y-auto">
			<div className="flex h-full flex-col gap-2">
				<div className="flex justify-between h-14 items-center border-b p-1 lg:h-[60px] lg:px-2">
					{/* <UserProfile /> */}
				</div>
				<nav className="grid items-start px-1 text-sm font-medium lg:px-4">
					{navItems.map(({name, icon, link, id}, idx) => (
						<div key={idx}>
							{id && (
								<div
									className={cn(
										"flex items-center mt-6 mb-2",
										id === "filters" && "my-0"
									)}
								>
									<p className="flex flex-1 text-base">
										{LIST_OF_TITLE_IDS[id]}
									</p>
									{LIST_OF_TITLE_IDS[id] === "My Projects" && (
										<AddProjectDialog />
									)}
								</div>
							)}
							<div className={cn("flex items-center lg:w-full")}>
								<div
									className={cn(
										"flex items-center text-left lg:gap-3 rounded-lg py-2 transition-all hover:text-primary justify-between w-full",
										pathname === link ?
											"active rounded-lg bg-primary/10 text-primary transition-all hover:text-primary"
										:	"text-foreground "
									)}
								>
									<Link
										key={idx}
										href={link}
										className={cn(
											"flex items-center text-left gap-3 rounded-lg transition-all hover:text-primary w-full"
										)}
									>
										<div className="flex gap-4 items-center w-full px-4">
											<div className="flex gap-2 items-center">
												<p className="flex text-base text-left">
													{icon || <Hash />}
												</p>
												<p>{name}</p>
											</div>
										</div>
									</Link>
									{id === "filters" && (
										<Dialog>
											<DialogTrigger id="closeDialog">
												<PlusIcon
													className="h-5 w-5"
													aria-label="Add a Label"
												/>
											</DialogTrigger>
											<AddLabelDialog />
										</Dialog>
									)}
								</div>
							</div>
						</div>
					))}
				</nav>
			</div>
			<div className="-mt-72 p-4 rounded-3xl">
				<Card x-chunk="dashboard-02-chunk-0">
					<CardHeader className="p-2 pt-0 md:p-4">
						<CardTitle>Connect with me</CardTitle>
						<CardDescription>
							For Collaboration, partnership and more
						</CardDescription>
					</CardHeader>
					<div className="flex items-center px-7 py-1">
						<Image
							className="w-4 h-4 filter invert"
							alt="logo"
							src={LinkedIn}
						/>
						<Link
							href="https://www.linkedin.com/in/theophilus-mcsamue/"
							className="ml-3 text-md"
							target="_blank"
						>
							LinkedIn
						</Link>
					</div>
					<div className="flex items-center px-7 py-1">
						<Image className="w-4 h-4 filter invert" alt="logo" src={GitHUb} />
						<Link
							href="https://github.com/ConnectedDot"
							className="ml-3 text-md"
							target="_blank"
						>
							Github
						</Link>
					</div>
					<div className="flex items-center px-7 py-1">
						<Image className="w-4 h-4 filter invert" alt="logo" src={X} />
						<Link
							href="https://x.com/Mc_Samuell"
							className="ml-3 text-md"
							target="_blank"
						>
							X
						</Link>
					</div>
					<div className="flex items-center px-7 py-1 mb-4">
						<Image className="w-4 h-4 filter invert" alt="logo" src={DevTo} />
						<Link
							href="https://app.daily.dev/connecteddot"
							className="ml-3 text-md"
							target="_blank"
						>
							Dev.to
						</Link>
					</div>
				</Card>
			</div>
		</div>
	);
}
