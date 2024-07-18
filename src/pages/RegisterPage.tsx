"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom"
import { registerDto } from "@/dtos/AuthDto"
import ValidateInput from "@/components/utils/ValidatedInput";
import { useState } from "react";
import API from "@/networks/api";

export default function RegisterPage() {
    const hookForm = useForm<registerDto>()
    const { handleSubmit, register, formState: { errors } } = hookForm
    const [visible, setVisible] = useState(false)

    function onSubmitRegister() {
        handleSubmit(async (data) => {
            await API.AUTH.REGISTER(data)
        })()
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
                            <Link to="/">
                                <span className="text-base font-medium text-cyan">Login here!</span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full">
                        <img className="w-96" src="../../public/persontwo.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="w-3/6 flex flex-col justify-start gap-5">
                <div className="flex flex-col gap-3">
                    <ValidateInput
                        error={errors.name}
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        register={register}
                        type="text"
                    />
                    <ValidateInput
                        error={errors.email}
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        register={register}
                        type="text"
                    />
                    <div className="relative">
                        <ValidateInput
                            error={errors.password}
                            name="password"
                            id="password"
                            placeholder="Password"
                            register={register}
                            type={visible ? "text" : "password"}
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            onClick={() => setVisible(!visible)}
                        >
                            {visible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-7">
                    <button className="bg-cyan hover:bg-transparent hover:text-cyan hover:border-cyan hover:bg-lightCyan border-2 border-gray-200 rounded-md text-white font-medium h-10 pl-2 text-sm w-full" type="submit" onClick={onSubmitRegister}>Sign Up</button>
                    <div className="flex items-center justify-center">
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
        </div>
    )
}
