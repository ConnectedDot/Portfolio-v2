import {useAction} from "convex/react";
import React, {useState} from "react";
import {Loader} from "lucide-react";
import {Button} from "../ui/button";

export default function SuggestMissingTasks() {
	const [isLoadingSuggestMissingTasks, setIsLoadingSuggestMissingTasks] =
		useState(false);

	return (
		<>
			<Button
				variant={"outline"}
				disabled={isLoadingSuggestMissingTasks}
				// onClick={isSubTask ? handleMissingSubTasks : handleMissingTasks}
			>
				{isLoadingSuggestMissingTasks ?
					<div className="flex gap-2">
						Loading Tasks (AI)
						<Loader className="h-5 w-5 text-primary" />
					</div>
				:	"Suggest Missing Tasks (AI) 💖"}
			</Button>
		</>
	);
}
