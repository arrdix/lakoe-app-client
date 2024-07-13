"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

type FormData = z.infer<typeof formSchema>;

export default function ForgotPasswordPage() {
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <div className="flex flex-row w-full justify-center items-center h-screen px-40">
            <div className="w-full flex flex-col justify-center">
                <h1 className="text-4xl font-bold">Sign In to <span className="text-cyan">Lakoe</span></h1>
                <div className="flex flex-row gap-3">
                    <div className="mt-10 w-96">
                        <p className="text-base font-medium">If you don't have an account</p>
                        <div className="flex flex-row gap-1 items-center">
                            <p className="text-base font-medium">You can
                            </p>
                            <Link to="/login">
                                <span className="text-base font-medium text-cyan">Login here!</span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full">
                        <img className="w-96" src="persontwo.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="w-3/6 flex flex-col justify-start">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Enter email or phone number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full rounded-lg bg-cyan hover:bg-transparent hover:text-cyan hover:border-cyan hover:border-2">Submit</Button>
                    </form>
                </Form>
                <div className="flex items-center justify-center my-4">
                    <div className="flex-grow border-t border-gray"></div>
                    <span className="px-1 text-gray-500">or continue with</span>
                    <div className="flex-grow border-t border-gray"></div>
                </div>
                <div className="flex flex-row gap-5 items-center justify-center">
                    <div className="rounded-full">
                        <Button
                            type="submit"
                            className="w-12 h-12 rounded-full bg-white shadow hover:bg-transparent transform transition-transform duration-200 hover:scale-110"
                        >
                            <FaGoogle className="text-orange-400 size-5" />
                        </Button>
                    </div>
                    <div className="rounded-full">
                        <Button
                            type="submit"
                            className="w-12 h-12 rounded-full bg-white shadow hover:bg-transparent transform transition-transform duration-200 hover:scale-110"
                        >
                            <FaApple className="text-black size-5" />
                        </Button>
                    </div>
                    <div className="rounded-full">
                        <Button
                            type="submit"
                            className="w-12 h-12 rounded-full bg-white shadow hover:bg-transparent transform transition-transform duration-200 hover:scale-110"
                        >
                            <FaFacebook className="text-blue-400 size-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
