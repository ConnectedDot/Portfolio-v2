"use client";
import {useQuery} from "convex/react";
import {Checkbox} from "../ui/checkbox";
import Task from "./task";
import {CircleCheckBig} from "lucide-react";
import Todos from "./todos";
import CompletedTodos from "./completed-todos";
import {AddTaskWrapper} from "../add-tasks/add-task-button";

export default function TodoList() {
	// const todos = useQuery(api.todos.get) ?? [];
	// const completedTodos = useQuery(api.todos.completedTodos) ?? [];
	// const inCompleteTodos = useQuery(api.todos.inCompleteTodos) ?? [];
	// const totalTodos = useQuery(api.todos.totalTodos) ?? 0;

	// if (
	//   todos === undefined ||
	//   completedTodos === undefined ||
	//   inCompleteTodos === undefined
	// ) {
	//   <p>Loading...</p>;
	// }

	return <></>;
}
