"use client";
import {useParams, useRouter, useSearchParams} from "next/navigation";
import React from "react";
import Image from "next/image";
import SideBar from "@/components/nav/side-bar";
import MobileNav from "@/components/nav/mobile-nav";
import {portfolioItems} from "@/app/data/porto";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import GitHUb from "@/public/logo/github.svg";
import google from "@/public/logo/google.svg";

export default function PortfolioItem() {
	const {portfolioId} = useParams(); // Retrieve the id from the URL

	// Find the portfolio item based on the id from the route
	const portfolioSingle = portfolioItems.find(item => item.id === portfolioId);

	// Log for debugging
	console.log("Portfolio Item ID:", portfolioId); // Should log the id from the URL
	console.log("Matched Portfolio Item:", portfolioSingle); // Should log the matched item if found

	if (!portfolioSingle) {
		return <div>Portfolio item not found.</div>;
	}
	return (
		<div className="flex min-h-screen w-full">
			<SideBar />
			<div className="flex flex-col flex-1 lg:ml-[280px]">
				<MobileNav />
				<div className="px-8 md:px-40 py-8 mx-auto">
					<div>
						<div className="space-y-1">
							<h4 className="text-2xl font-medium leading-none mb-2">
								{portfolioSingle.title}
							</h4>
							<p className="text-sm text-muted-foreground mt-3">
								{portfolioSingle.shortdescrips}
							</p>
						</div>
						<Separator className="my-4" />

						<div className="flex h-5 items-center space-x-4 text-sm mb-4">
							{portfolioSingle.category.map((cat, index) => (
								<React.Fragment key={cat}>
									<div>{cat}</div>
									{index < portfolioSingle.category.length - 1 && (
										<Separator orientation="vertical" />
									)}
								</React.Fragment>
							))}
						</div>
					</div>{" "}
					{portfolioSingle.mediaurl && (
						<div className="w-full max-w-[400px] h-[175px] md:max-w-[900px] md:h-[275px] relative overflow-hidden rounded-lg shadow-lg mb-6">
							<Image
								src={portfolioSingle.mediaurl}
								alt={portfolioSingle.title || "Portfolio Image"}
								layout="responsive"
								// width={700}
								// height={475}
								unoptimized
								width={1290}
								height={520}
							/>
						</div>
					)}
					<h3 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
						Description
					</h3>
					<Separator className="my-4" />
					{/* <p className="leading-7 [&:not(:first-child)]:mt-6">
						{portfolioSingle.description}
					</p> */}
					<p className="text-md md:text-lg text-muted-foreground mb-4">
						{portfolioSingle.description}
					</p>
					<div className="flex flex-col py-2"></div>
					<p className="py-2 text-md">{portfolioSingle.infoone}</p>
					<p className="py-2 text-md">{portfolioSingle.infotwo}</p>
					{/* <p className="py-2 text-md mb-4"> {portfolioSingle.contributions}</p> */}
					{""}
					{portfolioSingle.role && (
						<div className="w-full relative overflow-hidden rounded-lg shadow-lg mb-2 p-4">
							<p className="text-xl leading-tight">Role:</p>
							<p className="text-md md:text-lg text-muted-foreground">
								{portfolioSingle.role}
							</p>
						</div>
					)}
					{portfolioSingle.techstack && (
						<div className="py-4 overflow-hidden rounded-lg shadow-lg mb-6 p-4">
							<p className="text-xl leading-tight">Tech Stack:</p>
							<p className="text-md md:text-lg text-muted-foreground">
								{portfolioSingle.techstack}
							</p>
						</div>
					)}
					<Card x-chunk="dashboard-02-chunk-0">
						<CardHeader className="">
							<CardTitle>Resources</CardTitle>
						</CardHeader>

						<div className="flex items-center py-1">
							<Image
								className="ml-6 w-4 h-4 dark:filter dark:invert"
								alt="logo"
								src={google}
							/>

							{portfolioSingle.deployedlink ?
								<Link
									href={portfolioSingle.deployedlink}
									className="ml-3 text-md"
									target="_blank"
								>
									Deployed Here
								</Link>
							:	<span className="ml-3 text-md text-muted-foreground">
									Deployed Here
								</span>
							}
						</div>

						<div className="flex items-center py-1 mb-4">
							<Image
								className="ml-6 w-4 h-4 dark:filter dark:invert"
								alt="logo"
								src={GitHUb}
							/>

							{portfolioSingle.githublink ?
								<Link
									href={portfolioSingle.githublink}
									className="ml-3 text-md"
									target="_blank"
								>
									GitHub Link
								</Link>
							:	<span className="ml-3 text-md text-muted-foreground">
									GitHub Link
								</span>
							}
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
