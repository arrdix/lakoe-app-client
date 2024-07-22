'use client'

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { FaEye, FaEyeSlash, FaGoogle, FaApple, FaFacebook } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { registerDto } from "@/dtos/AuthDto"
import ValidateInput from "@/components/utils/ValidatedInput"
import { useState } from "react"
import { useToast } from '@/components/ui/use-toast'
import API from "@/networks/api"
import Spinner from '@/components/utils/Spinner'

export default function RegisterPage() {
    const hookForm = useForm<registerDto>()
    const { handleSubmit, register, formState: { errors } } = hookForm
    const [visible, setVisible] = useState(false)
    const { toast } = useToast()
    const navigate = useNavigate()

    // Updated function to handle form submission
    async function onSubmitRegister(data: registerDto) {
        toast({
            title: 'Register',
            description: 'Kami sedang memverifikasi data kamu.',
            action: <Spinner size={6} />,
        })

        try {
            await API.AUTH.REGISTER(data)

            toast({
                title: 'Register berhasil!',
                description: 'Silahkan login terlebih dahulu.',
                variant: 'success',
            })

            navigate('/auth/login')
        } catch (error) {
            toast({
                title: 'Registrasi gagal!',
                description: 'Terjadi kesalahan saat melakukan registrasi. Silakan coba lagi.',
                variant: 'failed',
            })
        }
    }

    return (
        <div className="flex flex-row w-full justify-center items-center h-screen px-40">
            <div className="w-full flex flex-col justify-center">
                <h1 className="text-4xl font-bold">Sign In to <span className="text-cyan">Lakoe</span></h1>
                <div className="flex flex-row gap-3">
                    <div className="mt-10 w-96">
                        <p className="text-base font-medium">If you don't have an account</p>
                        <div className="flex flex-row gap-1 items-center">
                            <p className="text-base font-medium">You can</p>
                            <Link to="/auth/login">
                                <span className="text-base font-medium text-cyan">Login here!</span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full">
                        <img className="w-96" src="../../public/persontwo.png" alt="Person Image" />
                    </div>
                </div>
            </div>
            <div className="w-3/6 flex flex-col justify-start gap-5">
                <form onSubmit={handleSubmit(onSubmitRegister)} className="flex flex-col gap-3">
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
                    <button className="bg-cyan hover:bg-transparent hover:text-cyan hover:border-cyan hover:bg-lightCyan border-2 border-gray-200 rounded-md text-white font-medium h-10 pl-2 text-sm w-full" type="submit">
                        Sign Up
                    </button>
                </form>
                <div className="w-full flex flex-col gap-7">
                    <div className="flex items-center justify-center">
                        <div className="flex-grow border-t border-gray"></div>
                        <span className="px-1 text-gray-500">or continue with</span>
                        <div className="flex-grow border-t border-gray"></div>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-center">
                        <div className="rounded-full">
                            <Button
                                type="button"
                                className="w-12 h-12 rounded-full bg-white shadow hover:bg-transparent transform transition-transform duration-200 hover:scale-110"
                            >
                                <FaGoogle className="text-orange-400 size-5" />
                            </Button>
                        </div>
                        <div className="rounded-full">
                            <Button
                                type="button"
                                className="w-12 h-12 rounded-full bg-white shadow hover:bg-transparent transform transition-transform duration-200 hover:scale-110"
                            >
                                <FaApple className="text-black size-5" />
                            </Button>
                        </div>
                        <div className="rounded-full">
                            <Button
                                type="button"
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
