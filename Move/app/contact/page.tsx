"use client";
import MobileNav from "@/components/nav/mobile-nav";
import SideBar from "@/components/nav/side-bar";
import React, {useState} from "react";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
// import {useToast} from "@/hooks/use-toast";
import {useForm, Controller, FormProvider} from "react-hook-form";
import {useToast} from "@/hooks/use-toast";
import {Input} from "@/components/ui/input";
import {ProfileForm} from "./profile-form";
import LayoutRoot from "@/components/layouts/page";
// import {ReloadIcon} from "@radix-ui/react-icons";

export default function Contact() {
	const FormSchema = z.object({
		email: z
			.string()
			.email("Invalid email address")
			.min(1, "Email is required"),
		fullName: z.string().min(1, "Full Name is required"),
		title: z.string().min(1, "Title is required"),
		message: z.string().min(1, "Message is required"),
		phone_number: z.string().min(1, "Phone Number is required"),
	});

	const {toast} = useToast();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			fullName: "",
			title: "",
			message: "",
			email: "",
			phone_number: "",
		},
	});

	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
		console.log(data, "data");

		toast({
			title: "☑️ Message Sent",
			description: "We will get back to you soon",
		});
	}

	return (
		<>
			<ProfileForm />
		</>
	);
}
