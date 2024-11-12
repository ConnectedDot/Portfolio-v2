"use client";
import {AddTaskWrapper} from "@/components/add-tasks/add-task-button";
import LayoutRoot from "@/components/layouts/page";
import MobileNav from "@/components/nav/mobile-nav";
import SideBar from "@/components/nav/side-bar";
import TodoList from "@/components/todos/todo-list";
import {cn} from "@/lib/utils";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import {DATA, introdata} from "./data/porto";

export function Badge(props: any) {
	return (
		<a
			{...props}
			target="_blank"
			className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
		/>
	);
}

function ArrowIcon() {}

function LinkedinLink({
	img,
	link,
	name,
}: {
	img: string;
	link: string;
	name: string;
}) {}

function GithubLink({
	img,
	link,
	name,
}: {
	img: string;
	link: string;
	name: string;
}) {}

function DevtoLink({
	img,
	link,
	name,
}: {
	img: string;
	link: string;
	name: string;
}) {}

function GoogleLink({
	img,
	link,
	name,
}: {
	img: string;
	link: string;
	name: string;
}) {}

function XLink({img, link, name}: {img: string; link: string; name: string}) {}

function LogoLink({
	img,
	link,
	name,
}: {
	img: string;
	link: string;
	name: string;
}) {}
export default function Home() {
	const aspectRatio = "portrait";
	return (
		<>
			<div>
				{/* <div className="bg-gradient-to-r from-blue-500 to-green-500 p-8 rounded-lg shadow-lg"></div> */}
				<h1 className="scroll-m-20 text-xl md:text-2xl lg:text-4xl font-extrabold tracking-tight mt-6">
					Hello World!
					{/* <Typewriter
							options={{
								strings: [introdata.subtitle],
								autoStart: true,
								loop: false,
								skipAddStyles: true,
								deleteSpeed: 0,
							}}
						/> */}
				</h1>

				<hr className="my-2 border-neutral-100 dark:border-neutral-800" />
				<p className="prose prose-neutral w-full dark:prose-invert">
					{DATA.description}

					<span className="not-prose ml-2 mr-2">
						<Badge href={DATA.Iconsvg[0].site}>
							<Image
								alt={DATA.Iconsvg[0].title}
								src={DATA.Iconsvg[0].href}
								className="!mr-1"
								width="14"
								height="14"
							/>
							{DATA.Iconsvg[0].title}
						</Badge>
					</span>
					{DATA.description2}
					<span className="not-prose ml-2 mr-2">
						<Badge href={DATA.Iconsvg[1].site}>
							<Image
								alt={DATA.Iconsvg[1].title}
								src={DATA.Iconsvg[1].href}
								className="!mr-1"
								width={14}
								height={14}
							/>
							{DATA.Iconsvg[1].title}
						</Badge>
					</span>
					{DATA.description3}
					<span className="not-prose ml-2">
						<Badge href={DATA.Iconsvg[2].site}>
							<Image
								alt={DATA.Iconsvg[2].title}
								src={DATA.Iconsvg[2].href}
								className="!mr-1"
								width={14}
								height={14}
							/>
							{DATA.Iconsvg[2].title}
						</Badge>
					</span>
				</p>
				<div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
					<div className="relative h-40">
						<Image
							alt={DATA.images[0].title}
							src={DATA.images[0].href}
							fill
							sizes="(max-width: 768px) 213px, 33vw"
							priority
							className="rounded-lg object-cover"
						/>
					</div>
					<div className="relative sm:row-span-2 row-span-1">
						<Image
							alt={DATA.images[1].title}
							src={DATA.images[1].href}
							fill
							sizes="(max-width: 768px) 213px, 33vw"
							priority
							className="rounded-lg object-cover object-top sm:object-center"
						/>
					</div>
					<div className="relative">
						<Image
							alt={DATA.images[2].title}
							src={DATA.images[2].href}
							fill
							sizes="(max-width: 768px) 213px, 33vw"
							priority
							className="rounded-lg object-cover"
						/>
					</div>
					<div className="relative row-span-2">
						<Image
							alt={DATA.images[3].title}
							src={DATA.images[3].href}
							fill
							sizes="(max-width: 768px) 213px, 33vw"
							priority
							className="rounded-lg object-cover sm:object-center"
						/>
					</div>
					<div className="relative row-span-2">
						<Image
							alt={DATA.images[4].title}
							src={DATA.images[4].href}
							fill
							sizes="(max-width: 768px) 213px, 33vw"
							priority
							className="rounded-lg object-cover"
						/>
					</div>
					<div className="relative h-40">
						<Image
							alt={DATA.images[5].title}
							src={DATA.images[5].href}
							fill
							sizes="(max-width: 768px) 213px, 33vw"
							priority
							className="rounded-lg object-cover"
						/>
					</div>
				</div>

				{/* <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
					The King&apos;s Plan
				</h2> */}
				{/* <p className="leading-7 [&:not(:first-child)]:mt-6">
					The king thought long and hard, and finally came up with{" "}
					<a
						href="#"
						className="font-medium text-primary underline underline-offset-4"
					>
						a brilliant plan
					</a>
					: he would tax the jokes in the kingdom.
				</p> */}
				{/* <blockquote className="mt-6 border-l-2 pl-6 italic">
					&quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
					it&apos;s only fair that they should pay for the privilege.&quot;
				</blockquote> */}

				<h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
					Skills Summary{" "}
				</h3>
				{/* <p className="leading-7 [&:not(:first-child)]:mt-6">
					The king&apos;s subjects were not amused. They grumbled and
					complained, but the king was firm:
				</p> */}
				<ul className="my-6 ml-6 list-disc [&>li]:mt-2">
					<li>Frontend Development: JavaScript, TypeScript, React, Next.js</li>

					<li> UI/UX Design: Figma, Tailwind CSS, responsive design</li>
					<li>
						Performance Optimization: Code-splitting, lazy loading, caching
					</li>
				</ul>
				<p className="leading-7 [&:not(:first-child)]:mt-6">
					I leverage cutting-edge technologies like React, Next.js, and
					TypeScript to design solutions that blend functionality with aesthetic
					precision. Whether enhancing performance, optimizing SEO, or ensuring
					cross-device compatibility, my focus is on delivering seamless,
					impactful user interactions.&quot;
				</p>
				{/* <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
					Jokester&apos;s Revolt
				</h3>
				<p className="leading-7 [&:not(:first-child)]:mt-6">
					Jokester began sneaking into the castle in the middle of the night and
					leaving jokes all over the place: under the king&apos;s pillow, in his
					soup, even in the royal toilet. The king was furious, but he
					couldn&apos;t seem to stop Jokester.
				</p>
				<p className="leading-7 [&:not(:first-child)]:mt-6">
					And then, one day, the people of the kingdom discovered that the jokes
					left by Jokester were so funny that they couldn&apos;t help but laugh.
					And once they started laughing, they couldn&apos;t stop.
				</p>
				<h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
					The People&apos;s Rebellion
				</h3>
				<p className="leading-7 [&:not(:first-child)]:mt-6">
					The people of the kingdom, feeling uplifted by the laughter, started
					to tell jokes and puns again, and soon the entire kingdom was in on
					the joke.
				</p>
				<div className="my-6 w-full overflow-y-auto">
					<table className="w-full">
						<thead>
							<tr className="m-0 border-t p-0 even:bg-muted">
								<th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
									King&apos;s Treasury
								</th>
								<th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
									People&apos;s happiness
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="m-0 border-t p-0 even:bg-muted">
								<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									Empty
								</td>
								<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									Overflowing
								</td>
							</tr>
							<tr className="m-0 border-t p-0 even:bg-muted">
								<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									Modest
								</td>
								<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									Satisfied
								</td>
							</tr>
							<tr className="m-0 border-t p-0 even:bg-muted">
								<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									Full
								</td>
								<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									Ecstatic
								</td>
							</tr>
						</tbody>
					</table>
				</div> */}
				{/* <p className="leading-7 [&:not(:first-child)]:mt-6">
					The king, seeing how much happier his subjects were, realized the
					error of his ways and repealed the joke tax. Jokester was declared a
					hero, and the kingdom lived happily ever after.
				</p>
				<p className="leading-7 [&:not(:first-child)]:mt-6">
					The moral of the story is: never underestimate the power of a good
					laugh and always be careful of bad ideas.
				</p> */}
			</div>
		</>
	);
}
