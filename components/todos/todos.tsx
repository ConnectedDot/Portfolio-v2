import React from "react";
import Task from "./task";
import {useMutation} from "convex/react";
import {useToast} from "../ui/use-toast";

export default function Todos() {
	const {toast} = useToast();

	// const checkATodo = useMutation(api.todos.checkATodo);
	// const unCheckATodo = useMutation(api.todos.unCheckATodo);

	// const handleOnChangeTodo = (task: Doc<"todos">) => {
	//   if (task.isCompleted) {
	//     unCheckATodo({ taskId: task._id });
	//   } else {
	//     checkATodo({ taskId: task._id });
	//     toast({
	//       title: "✅ Task completed",
	//       description: "You're a rockstar",
	//       duration: 3000,
	//     });
	//   }
	// };

	return;
	<></>;
}
