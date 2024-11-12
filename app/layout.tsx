"use client";
import {Noto_Sans_Georgian} from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/toaster";
import AnimatedCursor from "../components/hooks";
import {cn} from "@/lib/utils";
import {ThemeProvider} from "@/components/theme-provider";
import {TooltipProvider} from "@/components/ui/tooltip";
import BottomNavbar from "@/components/layouts/navbar";
import {Inter as FontSans} from "next/font/google";

const defaultFont = Noto_Sans_Georgian({subsets: ["latin"]});

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// return (
	// 	<html lang="en">
	// 		<body className={defaultFont.className}>
	// 			{children}
	// 			<Toaster />
	// 		</body>
	// 	</html>
	// );

	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
					fontSans.variable
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="light">
					<TooltipProvider delayDuration={0}>
						{children}
						<BottomNavbar />
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
