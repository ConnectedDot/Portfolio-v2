// components/GraphicEditor.js
"use client";
import {useState, useRef, MutableRefObject} from "react";
import html2canvas from "html2canvas";
import Image from "next/image";
import imagess from "@/public/default.png";
// import domtoimage from 'dom-to-image-more';

const GraphicEditor = () => {
	const [image, setImage] = useState<string | null>(null);
	const [name, setName] = useState("");
	const canvasRef = useRef<HTMLDivElement | null>(null);

	// Handle image upload
	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (files && files.length > 0) {
			const file = files[0];
			setImage(URL.createObjectURL(file));
		}
		if (files) {
			setImage(URL.createObjectURL(files[0]));
		}
	};

	// Capture and download the output
	const handleDownload = async () => {
		const node = document.getElementById("exportable-content"); // Your container's ID
		if (!node) {
			console.error("Node not found");
			return;
		}
		const isMobile = window.innerWidth < 768; // Define mobile breakpoint

		if (canvasRef.current) {
			// const canvas = await html2canvas(canvasRef.current);
			const scale = window.innerWidth < 768 ? 2 : 3; // Use smaller scale for mobile
			const canvas = await html2canvas(canvasRef.current, {
				scale: 3, // Adjust scale for higher resolution
				useCORS: true, // Helps prevent issues with image loading
				logging: false, // Disable logging for better performance
			});
			const link = document.createElement("a");
			link.href = canvas.toDataURL("image/png");
			link.download = {name}.name + ".png";
			link.click();
		}
	};

	// const handleDownload = () => {
	// 	const node = document.getElementById("exportable-content"); // Your container's ID
	// 	if (!node) {
	// 		console.error("Node not found");
	// 		return;
	// 	}
	// 	const isMobile = window.innerWidth < 768; // Define mobile breakpoint

	// 	// Define export options for mobile vs desktop
	// 	const options = {
	// 		width: isMobile ? node.offsetWidth : node.offsetWidth * 2,
	// 		height: isMobile ? node.offsetHeight : node.offsetHeight * 2,
	// 		scale: isMobile ? 1 : 2, // Adjust scale for high resolution on desktop
	// 		backgroundColor: null, // Set to `null` to make transparent or set a color if needed
	// 	};

	// 	html2canvas(node, options)
	// 		.then(canvas => {
	// 			const dataUrl = canvas.toDataURL("image/png");
	// 			const link = document.createElement("a");
	// 			link.href = dataUrl;
	// 			link.download = "exported-image.png"; // Customize file name
	// 			link.click();
	// 		})
	// 		.catch(error => {
	// 			console.error("Image export failed:", error);
	// 		});
	// };

	return (
		<div className="flex flex-col items-center gap-4 p-4">
			<input
				type="file"
				onChange={handleImageUpload}
				className="px-4 py-2 text-sm border rounded-md cursor-pointer"
			/>
			<input
				type="text"
				placeholder="Enter your name"
				value={name}
				onChange={e => setName(e.target.value)}
				className="px-4 py-2 text-sm border rounded-md w-64"
			/>

			<div
				// id="exportable-content"
				ref={canvasRef}
				className="rounded-lg"
				style={{
					backgroundImage: `url(${imagess.src})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					width: "100%",
					height: "100%",
				}}
			>
				{/* Default Graphic Image */}
				{/* <Image
					className="object-cover"
					src={imagess || "/default.png"}
					// width={500}
					alt="graphic"
					// layout="fill"
					// objectFit="cover"
				/> */}

				{/* Uploaded Image */}
				{image && (
					// eslint-disable-next-line @next/next/no-img-element
					<img
						src={image}
						alt="uploaded"
						className=" w-[70px] h-[70px] md:w-[130px] md:h-[130px] object-cover rounded-full border-4 border-white"
						// className="absolute top-[35%] left-[16%] w-[70px] h-[70px] md:top-[30%] md:left-[15%] md:w-[130px] md:h-[130px] object-cover rounded-full border-4 border-white"
						style={{borderRadius: "50%"}}
					/>
				)}

				{/* Text Overlay */}
				{/* <div className="absolute top-[70%] left-[10%] md:top-[70%] md:left-[15%] transform text-white font-bold text-md md:text-xl text-center mt-1">
					{name}
				</div>
				<div className="absolute top-[76%] left-[10%]  md:top-[75%] md:left-[15%] transform text-white font-semibold text-sm md:text-lg ml-4 mt-2">
					will be attending{" "}
				</div> */}
				<div className="flex mt-24">
					<div className="flex-1" style={{flex: 0.6}}>
						<div className="  transform text-white font-semibold text-sm md:text-lg ml-4 mt-2">
							<p className="text-center">
								{" "}
								in the upcoming eventerfeferfeddddddd.
							</p>
						</div>
					</div>
					<div className="flex-1" style={{flex: 0.4}}></div>
				</div>
			</div>
			<button
				onClick={handleDownload}
				className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
			>
				Download
			</button>
		</div>
	);
};

export default GraphicEditor;
