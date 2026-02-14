import {Menu} from "lucide-react";
import Link from "next/link";

import {Button} from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {primaryNavItems} from "@/utils";
import Image from "next/image";
import SearchForm from "./search-form";
// import UserProfile from "./user-profile";
import X from "@/public/logo/x.svg";
import GitHUb from "@/public/logo/github.svg";
import DevTo from "@/public/logo/devdotto.svg";
import LinkedIn from "@/public/logo/linkedin.svg";

import todovexLogo from "@/public/logo/todovex.svg";
import Logo from "@/public/logo/logo.png";

export default function MobileNav({
	navTitle = "",
	navLink = "#",
}: {
	navTitle?: string;
	navLink?: string;
}) {
	return (
		<header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="shrink-0 lg:hidden">
						<Menu className="h-5 w-5" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="flex flex-col">
					<nav className="grid gap-2 text-lg font-medium mt-0 md:mt-14 lg:mt-0">
						{/* <UserProfile /> */}

						{primaryNavItems.map(
							(
								{
									name,
									icon,
									link,
								}: {name: string; icon: JSX.Element; link: string},
								idx: number
							) => (
								<Link
									key={idx}
									href={link}
									className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2  hover:text-foreground"
								>
									{icon}
									{name}
								</Link>
							)
						)}
					</nav>
					<div className="mt-auto">
						<Card>
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
								<Image
									className="w-4 h-4 filter invert"
									alt="logo"
									src={GitHUb}
								/>

								<Link
									href="https://github.com/"
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
							<div className="flex items-center px-7 py-1">
								<Image
									className="w-4 h-4 filter invert"
									alt="logo"
									src={DevTo}
								/>

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
				</SheetContent>
			</Sheet>
			{/* <div className="flex items-center md:justify-between w-full gap-1 md:gap-2 py-2">
				<div className="lg:flex-1">
					<Link href={navLink}>
						<p className="text-sm font-semibold text-foreground/70 w-24">
							{navTitle}
						</p>
					</Link>
				</div>
				<div className="place-content-center w-full flex-1">
					<SearchForm />
				</div>
				<div className="place-content-center w-10 h-10 lg:w-12 lg:h-12">
					<Image alt="logo" src={Logo} />
				</div>
			</div> */}
		</header>
	);
}
