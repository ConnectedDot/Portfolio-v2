"use client";

import Link from "next/link";
import {zodResolver} from "@hookform/resolvers/zod";
import {useFieldArray, useForm} from "react-hook-form";
import {z} from "zod";

import {cn} from "@/lib/utils";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {toast} from "@/components/ui/use-toast";
// import { toast } from "@/registry/new-york/hooks/use-toast"
// import { Button } from "@/registry/new-york/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/registry/new-york/ui/form"
// import { Input } from "@/registry/new-york/ui/input"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/registry/new-york/ui/select"
// import { Textarea } from "@/registry/new-york/ui/textarea"

const profileFormSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters long.",
	}),
	email: z
		.string({
			required_error: "Email is required.",
		})
		.email(),
	phone: z.number().min(10, {
		message: "Phone number must be at least 10 characters long.",
	}),
	subtitle: z.string().max(160).min(4),
	message: z.string().max(160).min(4, {
		message: "Message must be at least 4 characters long.",
	}),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API.
// const defaultValues: Partial<ProfileFormValues> = {
// 	bio: "I own a computer.",
// 	urls: [{value: "https://shadcn.com"}, {value: "http://twitter.com/shadcn"}],
// };

export function ProfileForm() {
	const form = useForm<ProfileFormValues>({
		resolver: zodResolver(profileFormSchema),
		// defaultValues,
		mode: "onChange",
	});

	// const {fields, append} = useFieldArray({
	// 	name: "urls",
	// 	control: form.control,
	// });

	function onSubmit(data: ProfileFormValues) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	return (
		<div className="mt-8 md:mt-10">
			<h2 className="mt-14 border-b scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
				Contact Me
			</h2>
			<h5 className="mt-4 scroll-m-20  pb-2 text-md font-semibold tracking-tight transition-colors first:mt-0 mb-6">
				Please fill out the form below to get in touch with me. I will get back
				to you as soon as possible
			</h5>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					{/* <FormField
					control={form.control}
					name="username"
					render={({field}) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="shadcn" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name. It can be your real name or a
								pseudonym. You can only change this once every 30 days.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/> */}
					<div className="flex flex-col md:flex-row md:space-x-4">
						<FormField
							control={form.control}
							name="name"
							render={({field}) => (
								<FormItem className="flex-1">
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input placeholder="your-name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({field}) => (
								<FormItem className="flex-1">
									<FormLabel>Email Address</FormLabel>
									<FormControl>
										<Input placeholder="helloworld@gmail.com" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="flex flex-col md:flex-row md:space-x-4 max-w-full">
						<FormField
							control={form.control}
							name="phone"
							render={({field}) => (
								<FormItem className="flex-1">
									<FormLabel>Phone</FormLabel>
									<FormControl>
										<Input placeholder="+21-345-678-900" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="subtitle"
							render={({field}) => (
								<FormItem className="flex-1">
									<FormLabel>Subject Title</FormLabel>
									<FormControl>
										<Input placeholder="helloworld@gmail.com" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormField
						control={form.control}
						name="message"
						render={({field}) => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Textarea placeholder="" className="resize-none" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</div>
	);
}
