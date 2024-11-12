import {
	Book,
	Calendar,
	CalendarDays,
	Contact,
	Grid2X2,
	HomeIcon,
	Inbox,
	InfoIcon,
	PenIcon,
	StarIcon,
} from "lucide-react";

export const primaryNavItems = [
	{
		id: "primary",
		name: "Home",
		link: "/",
		icon: <HomeIcon className="w-4 h-4" />,
	},
	{
		name: "About",
		link: "/about",
		icon: <InfoIcon className="w-4 h-4" />,
	},
	{
		name: "Portfolio",
		link: "/portfolio",
		icon: <Book className="w-4 h-4" />,
	},
	{
		name: "Contact",
		link: "/contact",
		icon: <Contact className="w-4 h-4" />,
	},
	// {
	// 	name: "MVPs",
	// 	link: "/mvps",
	// 	icon: <StarIcon className="w-4 h-4" />,
	// },
	// {
	// 	name: "Contributions",
	// 	link: "/contributions",
	// 	icon: <PenIcon className="w-4 h-4" />,
	// },
	// {
	// 	id: "filters",
	// 	name: "Filters & Labels",
	// 	link: "/filter-labels",
	// 	icon: <Grid2X2 className="w-4 h-4" />,
	// },
];

export const GET_STARTED_PROJECT_ID = "k97fs8npdxzkr39y5vjcp9kq1d6tycm1";
