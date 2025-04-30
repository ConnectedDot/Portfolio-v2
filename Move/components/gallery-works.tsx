import Image from "next/image";
import {PlusCircle} from "lucide-react";

import {cn} from "@/lib/utils";
import {PortfolioItem} from "@/app/data/porto";
import Link from "next/link";

interface GalleryWorksProps {
	Ports: PortfolioItem;
	aspectRatio?: "portrait" | "square";
	width?: number;
	height?: number;
	// onClick: (portData: PortfolioItem) => void;
	className?: any;
}

export function GalleryWorks({
	Ports,
	aspectRatio = "portrait",
	width,
	height,
	// onClick,
	className,
	...props
}: GalleryWorksProps) {
	return (
		<div className={cn("space-y-3", className)} {...props}>
			{/* <ContextMenu>
        <ContextMenuTrigger> */}
			<div
				className={className}
				// onClick={e => {
				// 	e.preventDefault();
				// 	onClick && onClick(Ports.id);
				// }}
			>
				<div className="overflow-hidden rounded-md">
					<Image
						src={Ports.mediaurl}
						alt={Ports.title}
						width={width}
						height={height}
						className={cn(
							"h-auto w-auto object-cover transition-all hover:scale-105",
							aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
						)}
					/>
				</div>
			</div>

			<div className="space-y-1 text-sm">
				<h3 className="font-medium leading-none">{Ports.title}</h3>
				<p className="text-xs text-muted-foreground">{Ports.shortdescrips}</p>
			</div>
		</div>
	);
}
