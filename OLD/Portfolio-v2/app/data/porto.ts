import kendra from "@/public/gifs/kendra.gif";
import cvd from "@/public/gifs/cvd.gif";
import like from "@/public/gifs/like.gif";
import shepherds from "@/public/gifs/shepherds.gif";
import gubtish from "@/public/gifs/gubtish.gif";
import ap from "@/public/gifs/ap.gif";
import gp from "@/public/gifs/gp.gif";
import izu from "@/public/gifs/izu.gif";
import huel from "@/public/gifs/huel.gif";

import renewedge from "@/public/gifs/renewedge.gif";
import type {Metadata} from "next";
import {
	Code,
	DicesIcon,
	HomeIcon,
	NotebookPen,
	SquareTerminal,
	UserRound,
} from "lucide-react";
import {Icons} from "@/components/icons";

export interface PortfolioItem {
	id: string;
	title: string;
	slug: string;
	description: string;
	shortdescrips?: any;
	mediaurl: any;
	deployedlink: string;
	githublink: string;
	infoone: string;
	infotwo: string;
	role?: string;
	techstack?: string;
	[key: string]: any; // For any additional properties
	category: string[];
}

export const portfolioItems: PortfolioItem[] = [
	{
		id: "huel-medics",
		title: "Huel Medics",
		slug: "huel-meds",
		description:
			"With over 400 million meals sold and a million customers recommending us to friends and family, our community's love for Huel speaks for itself.",
		shortdescrips:
			"Here's why we're the No.1 Complete Food brand in the world.",
		mediaurl: huel,
		deployedlink: "https://huel-medics.vercel.app/",
		githublink: "",
		infoone: "Complete nutrition, because every fire needs its fuel.",
		infotwo: "",
		role: "Front-End Developer",
		iconLists: ["/next-logo.svg", "/typescript.svg", "/tailwindcss.svg"],
		techstack: "Next JS, Shad UI, Tailwind CSS, ",
		category: ["web-app", "technology", "innovation", "energy", "Medicals"],
	},
	{
		id: "izu-soft",
		title: "izusoft Technologies",
		slug: "izu",
		shortdescrips:
			"They specialize in cutting-edge training, consultation, and infrastructure services that drive growth and success.",
		description:
			"We offer extensive expertise through our proprietary framework called Business Driven Architecture. This framework empowers us to deliver comprehensive solutions in process and development, establishing the basis for our leadership across a wide range of Microsoft technologies. Our capabilities span from CRM and ERP to Low-code/No-code development, Azure cloud platform, security, as well as the implementation and maintenance of crucial IT solutions.",
		mediaurl: izu,
		deployedlink: "https://www.izusoft.tech",
		githublink: "",

		// links: [
		// 	{
		// 		type: "visit website",
		// 		href: "https://eldoraui.site/",
		// 		  icon: <SquareTerminal className="size-3" />,
		// 	},
		// ],

		infoone:
			"Innovative software solutions that empower businesses to streamline operations, enhance productivity, and achieve their goals efficiently. Discover how our solutions can transform your business today.",
		infotwo: "We Transform Businesses with Cutting-Edge Solutions",
		role: "",
		iconLists: [
			"react-logo.svg",
			"/express.svg",
			"firebase.svg",
			"next-logo.svg",
			"/tailwindcss.svg",
			"/typescript.svg",
			"/react-logo.svg",
			"/node.svg",
		],
		techstack: "React, NextJs, Tailwind CSS, Shadcn UI",
		category: [
			"dashboard",
			"LAnding Page",
			"web-app",
			"technology",
			"Business",
		],
	},
	// {
	// 	id: "cvd-mobile",
	// 	title: "Commodity Virtual Dashboard",
	// 	slug: "cvd",
	// 	shortdescrips:
	// 		"A dashboard to manage commodity, suitable for agents and buyers",
	// 	description:
	// 		"A dashboard to manage commodity, suitable for agents and buyers, to display list of cash crops, locations, prices and analysis. This also displays market trends and market news as a means of updates.",
	// 	mediaurl: cvd,
	// 	deployedlink: "",
	// 	githublink: "",

	// links: [
	// 	{
	// 		type: "visit website",
	// 		href: "https://eldoraui.site/",
	// 		  icon: <SquareTerminal className="size-3" />,
	// 	},
	// ],

	// 	infoone:
	// 		"The Commodity Virtual Dashboard is designed to streamline the process of managing and monitoring various commodities. It provides real-time data and analytics, enabling users to make informed decisions based on current market trends. The dashboard is user-friendly and customizable, allowing agents and buyers to tailor the interface to their specific needs. With features such as price tracking, location mapping, and news updates, this tool is essential for anyone involved in the commodity market.",
	// 	infotwo:
	// 		"In addition to its core functionalities, the Commodity Virtual Dashboard offers advanced features such as predictive analytics and automated alerts. These features help users stay ahead of market fluctuations and respond quickly to changes. The dashboard also supports integration with other systems, making it a versatile solution for businesses of all sizes. Whether you are a small-scale trader or a large enterprise, the Commodity Virtual Dashboard can help you optimize your operations and maximize your profits.",
	// 	role: "",
	// 	iconLists: [
	// 		"/expo-svg.svg",
	// 		"/tailwindcss.svg",
	// 		"/typescript.svg",
	// 		"/react-logo.svg",
	// 		"/node.svg",
	// 	],
	// 	techstack: "React Native, Expo, Metro Bundler, Tailwind CSS, Node.js",
	// 	category: ["dashboard", "mobile-app", "web-app", "agriculture", "finance"],
	// },
	{
		id: "renew-edge",
		title: "RenewEdge",
		slug: "renewedge",
		description:
			"A renewable energy website to provide needed and valuable resources to sustainable and renewable energy resources.",
		shortdescrips:
			"A renewable energy website for harnessing power energy and more",
		mediaurl: renewedge,
		deployedlink: "https://renew-edge.vercel.app/",
		githublink: "",
		infoone:
			"RenewEdge is at the forefront of the renewable energy revolution, where you can harness the power of the sun, wind, and other sustainable sources to create a cleaner, greener future. Our innovative solutions in solar energy, wind power, and electric vehicles are designed to reduce carbon footprints and promote environmental sustainability. With RenewEdge, you can seamlessly integrate renewable energy into your daily life, turning your vision of a sustainable world into reality. Let's explore the endless possibilities of renewable energy by discovering more about our cutting-edge technologies and solutions.",
		infotwo:
			"Our mission is to provide innovative renewable energy solutions that empower communities and protect the environment. We strive to reduce carbon footprints and promote sustainable living through our cutting-edge technology and dedicated team. Our vision is to lead the world in renewable energy solutions, creating a sustainable future for generations to come. We aim to be at the forefront of the green energy revolution, providing reliable and efficient energy solutions to our customers.",
		role: "Front-End Developer",
		iconLists: ["/next-logo.svg", "/typescript.svg", "/tailwindcss.svg"],
		techstack: "Next JS, Shad UI, Tailwind CSS, ",
		category: ["web-app", "technology", "innovation", "energy"],
	},
	{
		id: "kendra-lms",
		title: "KENDRA LMS",
		slug: "kendra",
		description:
			"Kendra LMS is an innovative online learning platform that connects learners with instructors from around the globe. As the project proposes, it’s more or less a mini-Udemy-like project to provide virtual learning experience to learners, and allow instructors present their skilled program/courses to prospective learners. This is a web-based educational platform designed to facilitate online learning through dynamic course categorization, content delivery, and personalized learning paths. The platform mimics the structure of popular online learning websites (Udemy), allowing users to navigate through courses based on categories and subcategories, enhancing their learning experience.",
		shortdescrips:
			"A mini-Udemy-like project to provide virtual learning experience to learners",
		mediaurl: kendra,
		deployedlink: "https://kendra-lms.vercel.app/",
		githublink: "",
		infoone:
			"Discover limitless learning with top-tier courses designed for professionals, hobbyists, and students alike. Expand your skills with ease and on your terms.",
		infotwo:
			"Kendra LMS is a comprehensive learning management system that offers a wide range of courses in various categories. Whether you are looking to enhance your professional skills, explore new hobbies, or pursue academic interests, Kendra LMS has something for everyone. With its user-friendly interface and intuitive design, the platform makes learning accessible and engaging for users of all levels. Join Kendra LMS today and unlock your full potential!",
		role: "Front-End Developer",
		iconLists: [
			"/react-logo.svg",
			"/typescript.svg",
			"/tailwindcss.svg",
			"/firebase.svg",
		],
		techstack: "React, Firebase, Google Auth, Tailwind CSS, ",
		category: ["web-app", "education", "e-learning", "lms"],
	},
	{
		id: "like",
		title: "Love In Kindness",
		slug: "like-kindness",
		description:
			"Love In Kindness is a non-profit organization that aims to spread love and kindness to those in need. The project is a website that showcases the organization's mission, projects, and events. It also provides a platform for volunteers and donors to get involved and support the cause. The website features a clean and modern design, with easy navigation and user-friendly interface. It is optimized for both desktop and mobile devices, ensuring a seamless experience for all users.",
		shortdescrips:
			"An NGO website that showcases the organization's mission, projects, and events",
		mediaurl: like,
		deployedlink: "https://www.likeministries.com/",
		githublink: "",
		infoone:
			"Love In Kindness is dedicated to spreading love and kindness to those in need. Through various projects and events, the organization aims to make a positive impact on the community and inspire others to do the same. The website serves as a hub for information about the organization's initiatives, volunteer opportunities, and donation options. Visitors can learn more about Love In Kindness, get involved in their work, and contribute to the cause.",
		infotwo:
			"They are passionate about making a difference in the world and believe that small acts of kindness can create a ripple effect of positivity. By supporting Love In Kindness, you are joining a community of like-minded individuals who are committed to spreading love and kindness wherever they go. Together, we can make the world a better place, one act of kindness at a time.",
		role: "Front-End Developer",

		iconLists: [
			"/react-logo.svg",
			"/typescript.svg",
			"/tailwindcss.svg",
			"/ant-design.svg",
			"/map.svg",
		],
		techstack: "React, Google Map, Tailwind CSS, AOS, Ant Design",
		category: ["web-app", "ngo", "charity", "non-profit"],
	},
	{
		id: "shepherds",
		title: "Shepherds Fields",
		slug: "shepherds-fields",
		description:
			"Shepherds is a partnership referral program that allows users to earn rewards by referring friends and family to the platform. The project is a web application that enables users to sign up, refer others, and track their rewards. It features a clean and intuitive interface, with easy navigation and user-friendly design. The platform is optimized for both desktop and mobile devices, ensuring a seamless experience for all users.",

		shortdescrips:
			"A partnership referral program that allows users to earn rewards by referring friends and family to the platform",
		mediaurl: shepherds,
		deployedlink: "https://www.shepherdsfieldpartners.com/",
		githublink: "",
		infoone:
			"Shepherds Fields is a unique partnership referral program that rewards users for referring friends and family to the platform. By signing up and sharing their unique referral link, users can earn rewards for each successful referral. The platform is designed to be user-friendly and intuitive, with a clean and modern interface that makes it easy to navigate and use. Whether you are looking to earn rewards or refer others to the program, Shepherds Fields offers a seamless experience for all users.",
		infotwo:
			"They provide a platform for users to track their referrals, rewards, and earnings, making it easy to monitor their progress and stay up to date on their performance. With Shepherds Fields, users can take advantage of a simple and effective way to earn rewards and grow their network",
		role: "Front-End Engineer",
		iconLists: [
			"/react-logo.svg",
			"/typescript.svg",
			"/tailwindcss.svg",
			"/postgresql.svg",
			"node.svg",
			"/ant-design.svg",
			"/heroku.svg",
		],
		techstack:
			"React, Tailwind CSS, AOS, Ant Design, Node.js, Express, PostgreSQL, Heroku, NodeMailer",
		category: ["web-app", "referral", "rewards", "partnership", "program"],
	},
	{
		id: "gubtish-home-movers",
		title: "Gubtish Home Movers",
		slug: "gubtish-home-movers",
		description:
			"Gubtish Home Movers is a moving company that offers professional and reliable moving services to customers in the local area. The project is a website that showcases the company's services, team, and contact information. It also provides a platform for customers to request a quote, schedule a move, and get in touch with the team. The website features a clean and modern design, with easy navigation and user-friendly interface. It is optimized for both desktop and mobile devices, ensuring a seamless experience for all users.",

		shortdescrips:
			"A moving company that offers professional and reliable moving services to customers within Lagos and interstate",
		mediaurl: gubtish,
		deployedlink: "https://www.gubtishmovers.com.ng/",
		githublink: "",
		infoone:
			"At Gutbish, their moving services ensure a swift and hassle-free relocation within your community, within the state and also inter-state. Our operations are not limited to Lagos, we also provide long-distance moving services.",
		infotwo:
			"Whether you are moving to a new home, office, or business location, Gubtish Home Movers has you covered. Their team of experienced professionals will handle your belongings with care and ensure a smooth transition to your new space. With competitive rates and exceptional service, Gubtish Home Movers is your go-to moving company for all your relocation needs.",
		role: "",
		iconLists: [
			"/react-logo.svg",
			"/typescript.svg",
			"/tailwindcss.svg",
			"/ant-design.svg",
		],

		techstack: "React, Tailwind CSS, AOS, Ant Design, ",
		category: ["web-app", "moving", "relocation", "logistics"],
	},

	{
		id: "gp-calculator",
		title: "GPA Calculator",
		slug: "gpa-calculator",
		description:
			"The GPA Calculator is a web application that allows students to calculate their Grade Point Average (GPA) based on their course grades and credit hours using the 5-Point grading system. The project is designed to help students track their academic progress and plan their course schedules effectively. The GPA Calculator features a user-friendly interface, with easy input fields and clear instructions for calculating GPA. It is optimized for both desktop and mobile devices, ensuring a seamless experience for all users.",

		shortdescrips:
			"A web application that allows students calculate their GPA using the 5-Point grading system",
		mediaurl: gp,
		deployedlink:
			"https://gp-calculator-theophilus-samuels-projects.vercel.app/",
		githublink: "",
		infoone:
			"The GPA Calculator is a valuable tool for students to track their academic progress and plan their course schedules effectively. By entering their course grades and credit hours, students can calculate their GPA and monitor their performance over time. The calculator is user-friendly and intuitive, with clear instructions and helpful tips to guide users through the process. Whether you are a student, teacher, or academic advisor, the GPA Calculator is a useful resource for managing academic records.",
		infotwo:
			"Students can use the GPA Calculator to experiment with different grade scenarios, calculate their cumulative GPA. The calculator supports multiple semesters and session inputs and credit hour formats. With its responsive design and interactive features, the GPA Calculator offers a seamless experience for users on all devices.",
		role: "",

		iconLists: [
			"/react-logo.svg",
			"/typescript.svg",
			"/tailwindcss.svg",
			"/firebase.svg",
			"/ant-design.svg",
			"/pdf.svg",
		],

		techstack: "React, Tailwind CSS, AOS, Ant Design, PDFMaker",
		category: ["web-app", "education", "gpa", "calculator"],
	},
];

export const services = [
	{
		title: "Web Development",
		description:
			"Transform your online presence with our comprehensive web development services. We build responsive, high-performance websites tailored to your business needs. From simple informational sites to complex web applications, we ensure a seamless user experience across all devices. Our focus on scalability, security, and performance guarantees that your website grows with your business and serves your audience effectively.",
	},
	{
		title: "Mobile App Development",
		description:
			"Engage your customers on the go with our expert mobile app development services. Whether you need an Android, iOS, or cross-platform solution, we build apps with user-friendliness, speed, and security in mind. By integrating the latest mobile technologies and design trends, we deliver apps that enhance your users' mobile experience and drive your business forward.",
	},
	{
		title: "E-Commerce Solutions",
		description:
			"Elevate your business with our e-commerce development services. We create fully functional online stores, integrate payment gateways, and design seamless shopping experiences. Our e-commerce solutions are crafted to convert visitors into customers, helping you grow sales and manage your business efficiently. Whether you're selling products or services, we ensure your platform is optimized for success.",
	},
	{
		title: "Blog and Content Management",
		description:
			"Boost your online presence with our blog and content management services. We offer blog design, content management, and SEO-optimized structures to ensure your content reaches the right audience. Whether you're a small business or a growing enterprise, we help you build credibility and connect with your customers through engaging blog content.",
	},
	{
		title: "IT Consultation & Support",
		description:
			"Optimize your technology infrastructure with our IT consultation and support services. We address your technology needs, solve technical challenges, and ensure data security. With years of experience, we provide personalized guidance to keep your IT systems running smoothly and offer the support you need to overcome any tech obstacles.",
	},
];

export const contactConfig = {
	YOUR_EMAIL: process.env.NEXT_PUBLIC_YOUR_EMAIL || "theophilus@iconnects.tech",
	YOUR_FONE: process.env.NEXT_PUBLIC_YOUR_FONE || "(234)70-4220-6770",
	description:
		"Please, drop us a quick message, from enquiries down to support, and we'll get to you as soon as we can. We value your message and thus treated with priority.",
	// creat an emailjs.com account
	// check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
	YOUR_SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID,
	YOUR_TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID,
	YOUR_PUBLIC_KEY: process.env.NEXT_PUBLIC_PUBLIC_KEY,
};

export const socialprofils = {
	github: "https://github.com/",
	facebook: "https://www.facebook.com/TheophilusSams?mibextid=ZbWKwL",
	linkedin: "https://www.linkedin.com/in/theophilus-mcsamuel-6108091a6",
	twitter: "https://twitter.com/mc_samuell.com",
	instagram: "https://instagram.com/theophilus_mcsam?igshid=NGExMmI2YTkyZg",
};

export const logotext = "THEOPHILUS SAMUEL";
export const logobrand = "ConnectedDot";

export const introdata = {
	title: "Theophilus Samuel",
	subtitle: "Hello World!",
	animated: {
		first:
			"Transforming ideas into responsive, cutting-edge web applications that drive results",
		second:
			"Crafting intuitive user experiences that keep audiences engaged and coming back",
		third:
			"Optimizing performance to ensure websites or apps scale effortlessly with growing businesses",
		fourth:
			"Delivering maintainable, high-quality code that ensures long-term stability for projects",
	},
	description: `As a seasoned IT professional and frontend developer, Theophilus Samuel brings a wealth of experience and expertise to every project undertaken. Commitment to excellence, coupled with a relentless drive for innovation, defines the approach to problem-solving in the dynamic world of technology.`,
};

const ORIGIN_URL =
	process.env.NODE === "production"
		? "https://theophilus-sam.vercel.app/"
		: "http://localhost:3000";

export const metadata: Metadata = {
	title: "Thephilus Samuel | Portfolio",
	description:
		"HEre's  a brief about me, my projects, and my contact information.",
	icons: {
		icon: "/icon.ico",
	},
	metadataBase: new URL(ORIGIN_URL),
	alternates: {
		canonical: ORIGIN_URL,
	},
};

// import { Icons } from "@/components/icons";

export const DATA = {
	name: "Karthikeya varma",
	url: "https://eldoraui.site/",
	description:
		"I'm a frontend Engineer, I specialize in designing, developing, and maintaining web and mobile applications using modern frameworks and technologies. I'm currently on a Open-source Project",
	description2: " And Focusing on",
	description3: "Which is a open-source web framework built with",
	summary:
		"Since embarking on my journey as a frontend engineer, I have dedicated my career to designing and developing impactful, intuitive web applications. With a commitment to learning and growth, I've explored a wide array of frontend technologies, from foundational HTML, CSS, and JavaScript to advanced frameworks like React, Next.js, and Tailwind CSS. Alongside these tools, I’m continuously refining my skills to ensure every project is crafted with precision, performance, and the latest design trends. With each project, I aim to create seamless and efficient user experiences, whether building sleek, responsive websites or diving into component libraries to streamline UI design for developers. The evolution of my work reflects my passion for bringing digital concepts to life in a way that engages users and enhances interactivity.",
	apperciation:
		"Take a moment to explore the recognition I've garnered within the Twitter community for my work on [Eldora UI](https://eldoraui.site/). The positive feedback and appreciation from fellow developers and enthusiasts highlight the impact and value of the [EldoraUI](https://eldoraui.site/) project. It's rewarding to see the project being acknowledged and celebrated within the broader tech community!",
	footer:
		"Interested in learning more about my professional journey and skill set? [Click here to view my resume](/Mudunuribhaskarakarthikeyavarma-Resume.pdf) and discover the experiences, achievements, and expertise that I bring to the table.",
	linkedin: [
		{
			title: "karthikmudunuri",
			href: "https://www.linkedin.com/in/karthikmudunuri/",
			icon: "/linkedin-logo.svg",
			profile: "/karthik.jpeg",
		},
	],
	github: [
		{
			title: "karthikmudunuri",
			href: "https://github.com/",
			icon: "/github-logo.svg",
			profile: "/me.jpeg",
		},
	],

	images: [
		{
			title: "1",
			href: "/img-5.jpg",
		},
		{
			title: "2",
			href: "/img-2.jpg",
		},
		{
			title: "3",
			href: "/img-3.jpg",
		},
		{
			title: "4",
			href: "/img-6.jpg",
		},
		{
			title: "5",
			href: "/Karibu-Lagos.jpeg",
		},
		{
			title: "My working stuff",
			href: "/office.jpg",
		},
	],

	Iconsvg: [
		{
			id: 1,
			title: "Kendra LMS",
			href: "/kendra.png",
			site: "https://kendra-lms.vercel.app//",
		},
		{
			id: 2,
			title: "Next.js",
			href: "/next-logo.svg",
			site: "https://nextjs.org",
		},
		{
			id: 3,
			title: "React",
			href: "/react-logo.svg",
			site: "https://react.dev",
		},
		// Import your teck stack here from https://simpleicons.org/
	],

	skillsdescription:
		"My skill set combines technical proficiency with an eye for design, enabling me to build efficient, maintainable, and visually appealing applications. Here are some of the tools and technologies I work with",
	Skills: [
		{
			id: 1,
			title: "Next.js",
			href: "/next-logo.svg",
			site: "https://nextjs.org",
		},
		{
			id: 2,
			title: "React",
			href: "/react-logo.svg",
			site: "https://react.dev",
		},
		{
			id: 3,
			title: "Javascript",
			href: "/javascript.svg",
			site: "https://react.dev",
		},
		{
			id: 4,
			title: "Typescript",
			href: "/typescript.svg",
			site: "https://react.dev",
		},
		{
			id: 12,
			title: "Expo",
			href: "/expo-svg.svg",
			site: "https://docs.expo.dev/",
		},
		{
			id: 5,
			title: "Heroku",
			href: "/heroku.svg",
			site: "https://devcenter.heroku.com/",
		},
		{
			id: 6,
			title: "Tailwind CSS",
			href: "/tailwindcss.svg",
			site: "https://react.dev",
		},
		{
			id: 7,
			title: "Git",
			href: "/git.svg",
			site: "https://react.dev",
		},
		{
			id: 8,
			title: "AWS",
			href: "/aws.svg",
			site: "https://react.dev",
		},

		{
			id: 9,
			title: "Framer Motion",
			href: "/fm.svg",
			site: "https://react.dev",
		},
		{
			id: 10,
			title: "Ant Design",
			href: "/ant-design.svg",
			site: "https://ant.design/components/overview",
		},
		{
			id: 11,
			title: "PostgreSQL",
			href: "/postgresql.svg",
			site: "https://react.dev",
		},

		// Import your teck stack here from https://simpleicons.org/
	],

	navbar: [
		{href: "/", icon: HomeIcon, label: "Home"},
		{href: "/about", icon: UserRound, label: "About"},
		{href: "/projects", icon: Code, label: "Projects"},
		// {href: "/getdp", icon: DicesIcon, label: "GetDp"},
		// {href: "/contacts", icon: NotebookPen, label: "Contact"},
	],

	contact: {
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/",
				icon: Icons.github,
				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/theophilus-mcsamue/",
				icon: Icons.linkedin,
				navbar: true,
			},
		},
	},
	worksummary:
		"Every project I undertake begins with a user-centered approach, ensuring that each element not only functions optimally but also enriches the user's experience. My portfolio spans professional client work, personal projects, and contributions to open-source communities. Each project has allowed me to hone my skills in creating components that are both functional and visually engaging, while also collaborating closely with teams across design and development.",
	work: [
		{
			id: 1,
			company: "Lotus Beta Analytics",
			href: "https://www.lotusbetaanalytics.com/",
			title: "IT Specialist/Software Developer",
			logoUrl: "/lotus.png",
			start: "Jan 2023",
			end: "Present",
			description:
				"Consistently developing and maintaining the front end of various web applications, focusing on crafting user-friendly, visually appealing interfaces with HTML, CSS, JavaScript, and React.js. My approach emphasizes responsive design to ensure smooth functionality across devices, and I actively implement interactive elements to enrich the user experience.",
		},
		{
			id: 2,
			company: "Hightower Inc",
			badges: [],
			href: "",
			title: "Front-end Developer",
			logoUrl: "",
			start: "June 2021",
			end: "Jan 2023",
			description:
				" I continuously build upon a comprehensive library of reusable UI components, optimizing development efficiency and ensuring design consistency across projects. I also conduct regular performance audits, identifying and resolving bottlenecks to improve load times and overall performance, thus driving user satisfaction and aligning with organizational goals for high-quality digital experiences.",
		},
	],
	educationsummary:
		"My education has been a journey of exploration and growth, equipping me with a strong foundation in technology and problem-solving. From mastering core concepts to embracing cutting-edge advancements, each step has shaped my ability to innovate and contribute meaningfully to the tech landscape.",
	education: [
		{
			id: 1,
			school: "ALX Holberton",
			href: "https://intranet.alxswe.com/certificates/JsFhfG29RE/",
			degree: "Certification - ALX Software Engineering",
			logoUrl: "/alx.png",
			start: "2022",
			end: "2024",
		},
		{
			id: 1,
			school: "Ekiti State University",
			href: "https://portal.eksu.ng/",
			degree: "B.Eng - Electrical/Electronics Engineering",
			logoUrl: "/eksu.png",
			start: "2018",
			end: "2023",
		},
	],
	projectssummary:
		"From building interactive dashboards to optimizing site performance, these projects showcase my expertise in front-end engineering and UI/UX design.",

	//   projects: [
	//     {
	//       title: "Eldora UI",
	//       href: "https://eldoraui.site/",
	//       dates: "June 2024 - present",
	//       active: true,
	//       description:
	//         "Collection of [re-usable components](https://eldoraui.site/components) that you can copy and paste into your web apps. It primarily features [components, blocks](https://eldoraui.site/components), and [templates](https://eldoraui.site/templates).",
	//   iconLists: ["/next-logo.svg", "/tailwindcss.svg","/typescript.svg","/fm.svg","/mdxl.svg"],
	//       links: [
	//         {
	//           type: "visit website",
	//           href: "https://eldoraui.site/",
	//           icon: <SquareTerminal className="size-3" />,
	//         },
	//       ],
	//       image: "",
	//       video:
	//         "https://eldoraui.site/previews/components/core/eldoraui.mp4",
	//     },
	//     {
	//       title: "Portfolio Template",
	//       href: "karthikeyavarmamudunuri.vercel.app/",
	//       dates: "June 2024 - July 2024",
	//       active: true,
	//       description:
	//         "Minimalist [developer portfolio](karthikeyavarmamudunuri.vercel.app/) using Next.js 14, React, TailwindCSS, Framer motion and Eldora UI.",
	//       iconLists: ["/next-logo.svg", "/tailwindcss.svg","/typescript.svg","/eldoraui.svg","/fm.svg"],
	//       links: [
	//         {
	//           type: "visit Website",
	//           href: "karthikeyavarmamudunuri.vercel.app/",
	//           icon: <SquareTerminal className="size-3" />,
	//         },

	//       ],
	//       image: "",
	//       video: "https://eldoraui.site/previews/components/core/portfolio.mp4",
	//     },
	//     {
	//       title: "Saas Template",
	//       href: "https://saas-landing-page-template-eldoraui.vercel.app/",
	//       dates: "July 2024 - August 2024",
	//       active: true,
	//       description:
	//       "Template for [saas landing page](https://saas-landing-page-template-eldoraui.vercel.app/) with dark theme using Next.js 14, React, TailwindCSS, Framer motion and Eldora UI.",
	//       iconLists: ["/next-logo.svg", "/tailwindcss.svg","/typescript.svg","/eldoraui.svg","/fm.svg"],
	//       links: [
	//         {
	//           type: "visit Website",
	//           href: "https://saas-landing-page-template-eldoraui.vercel.app/",
	//           icon: <SquareTerminal className="size-3" />,
	//         }
	//       ],
	//       image: "https://eldoraui.site/previews/components/core/saas.png",
	//       video: "",
	//     },
	//     {
	//       title: "VR Mall",
	//       href: "https://vrmalldemo.netlify.app/",
	//       dates: "April 2023 - May 2023",
	//       active: true,
	//       description:
	//         "A [virtual mall](https://vrmalldemo.netlify.app/) created using three.js and react with user interaction.",
	//       iconLists: ["/next-logo.svg", "/threejs.svg","tailwindcss.svg","/typescript.svg","/gsap.svg"],
	//       links: [
	//         {
	//           type: "visit Website",
	//           href: "https://vrmalldemo.netlify.app/",
	//           icon: <SquareTerminal className="size-3" />,
	//         },
	//       ],
	//       image: "",
	//       video:
	//         "/vrmall.mp4",
	//     },
	//   ],

	contributionssummary:
		"Committing Code and Crimes Against Open Source World A place where you can witness my caffeinated coding adventures and see just how much coffee it takes to fuel my commits. from my first `Hello World` to my latest breakthrough, and everything in between",
	contributions: [
		{
			link: "https://github.com/",
			title: "eldora ui",
			description:
				"Eldora UI is a collection of re-usable components that you can copy and paste into your web apps. It primarily features components, blocks, and templates.",
			stars: "847",
			forks: "29",
		},
		{
			link: "https://github.com/",
			title: "saas-landing-page-template",
			description:
				"Template for saas landing page with dark theme using Next.js 14, React, TailwindCSS, Framer motion and Eldora UI.",
			stars: "59",
			forks: "13",
		},
		{
			link: "https://github.com/",
			title: "portfolio-template",
			description:
				"Minimalist developer portfolio using Next.js 14, React, TailwindCSS, Framer motion and Eldora UI.",
			stars: "35",
			forks: "18",
		},
		{
			link: "https://github.com/",
			title: "nextra",
			description:
				"Simple, powerful and flexible site generation framework with everything you love from Next.js.",
			stars: "11.2k",
			forks: "1.2k",
		},
	],
	hackathonsummary:
		"In 2023, Karibu was held in Lagos at The Vantage Point Event Centre in Ikeja and Harbour Point in Victoria Island. The event included: Welcoming new learners into the ALX community Showcasing the opening of new tech hubs in Lagos and other cities Orienting learners to the ALX community Introducing new tech programs, including Data Analytics, Cloud Computing, and Salesforce Administrator.",
	hackathons: [
		{
			id: 1,
			title: "ALX SE",
			dates: "19th May 2023",
			location: "LA, Nigeria",
			description:
				"This usher the 1-year completion of the SE Program into the basics of Software Engineering covering diverse part from networking & monitoring, down to web development coupled with the use of HTML, CSS, Javascript down to React and more.",
			logo: "/alx.png",
			images: "/Karibu-Lagos.jpeg",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
			links: [],
		},
	],
} as const;
