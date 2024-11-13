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
		if (canvasRef.current) {
			const scale = window.innerWidth < 768 ? 8 : 4; // Use smaller scale for mobile
			const canvas = await html2canvas(canvasRef.current, {
				scale: scale, // Adjust scale based on screen size
				useCORS: true, // Helps prevent issues with image loading
				logging: false, // Disable logging for better performance
			});
			const link = document.createElement("a");
			link.href = canvas.toDataURL("image/png");
			link.download = `${name}.png`;
			link.click();
		}
	};

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
				style={{
					backgroundImage: `url(${imagess.src})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					// width: "100%",
					// height: "100%",
				}}
				ref={canvasRef}
				className="w-[300px] h-[225px] md:w-[400px] md:h-[300px]"
				// id="exportable-content"
			>
				{/* Default Graphic Image */}
				{/* <Image
					className="object-cover w-full h-full"
					src={imagess || "/default.png"}
					// width={500}
					alt="graphic"
					// layout="fill"
					objectFit="cover"
				/> */}

				{/* Uploaded Image */}
				{/* {image ?
					// eslint-disable-next-line @next/next/no-img-element
					<img
						src={image}
						alt="uploaded"
						className="absolute top-[35%] left-[16%] w-[70px] h-[70px] md:top-[30%] md:left-[15%] md:w-[130px] md:h-[130px] object-cover rounded-full border-4 border-white"
						style={{borderRadius: "50%"}}
					/>
				:	<div
						className="absolute top-[35%] left-[16%] w-[70px] h-[70px] md:top-[30%] md:left-[15%] md:w-[130px] md:h-[130px] object-cover rounded-full border-4 border-white bg-gray-200 flex items-center justify-center"
						style={{borderRadius: "50%"}}
					>
						<span className="text-gray-500 text-sm">Select Image</span>
					</div>
				} */}

				{/* Text Overlay */}

				<div className="flex mt-28 md:mt-32">
					<div className="flex-1" style={{flex: 0.6}}>
						<div className="flex flex-col items-center justify-center">
							{image ?
								// eslint-disable-next-line @next/next/no-img-element
								<img
									src={image}
									alt="uploaded"
									className="w-[70px] h-[70px] md:w-[130px] md:h-[130px] object-cover rounded-full border-4 border-white"
									style={{borderRadius: "50%"}}
								/>
							:	<div
									className="top-[35%] left-[16%] w-[70px] h-[70px] md:top-[30%] md:left-[15%] md:w-[130px] md:h-[130px] object-cover rounded-full border-4 border-white bg-gray-200 flex items-center justify-center"
									style={{borderRadius: "50%"}}
								>
									<span className="text-gray-500 text-sm">Select Image</span>
								</div>
							}
						</div>

						<div className="  transform text-white font-bold text-sm md:text-lg ml-4 mt-3">
							<p className="text-center"> {name}</p>
						</div>
						<div className="  transform text-white font-semibold text-sm md:text-md ml-4 mt-0">
							<p className="text-center">Will be attending</p>
						</div>
					</div>
					<div className="flex-1" style={{flex: 0.4}}></div>
				</div>

				{/* <div className="flex justify-center items-center mt-4 md:mt-8">
					<p className="text-center text-white font-bold text-md md:text-xl">
						{name}
					</p>
				</div> */}
				{/* <div className="absolute top-[70%] left-[10%] md:top-[70%] md:left-[15%] transform text-white font-bold text-md md:text-xl text-center mt-1">
					<p className="text-center">{name}</p>
				</div> */}
				{/* <div className="absolute top-[76%] left-[10%]  md:top-[75%] md:left-[15%] transform text-white font-semibold text-sm md:text-lg ml-4 mt-2">
					will be attending{" "}
				</div> */}
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
