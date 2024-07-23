'use client'

import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { FaGoogle, FaApple, FaFacebook, FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { loginDto } from '@/dtos/AuthDto'
import ValidateInput from '@/components/utils/ValidatedInput'
import { useState } from 'react'
import API from '@/networks/api'
import { useLakoeStore } from '@/store/store'
import { User } from '@/types/UserType'
import LOCAL_STORAGE from '@/networks/storage'
import { useToast } from '@/components/ui/use-toast'
import Spinner from '@/components/utils/Spinner'
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'

const LoginSchema = z.object({
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    password: z
        .string()
        .min(5, { message: "Password must be at least 5 characters long." })
        .max(20, { message: "Password must be at most 20 characters long." })
});

export default function LoginPage() {
    const setLoggedUser = useLakoeStore((state) => state.setLoggedUser)
    const hookForm = useForm<loginDto>({
        resolver: zodResolver(LoginSchema)
    })
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = hookForm
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()
    const { toast } = useToast()

    async function onLogin(data: loginDto) {
        toast({
            title: 'Login',
            description: 'Kami sedang memverifikasi data kamu.',
            action: <Spinner size={6} />,
        })

        try {
            const response = await API.AUTH.LOGIN(data)
            const token = response.token

            if (!token) {
                toast({
                    title: 'Login Tidak Berhasil!',
                    description: 'Periksa kembali email dan kata sandi Anda.',
                    variant: 'failed',
                })

                return
            }

            LOCAL_STORAGE.SET(token)

            const loggedUser: User = await API.USER.GET_LOGGED_USER()
            setLoggedUser(loggedUser)

            toast({
                title: 'Login Berhasil!',
                description: 'Selamat datang kembali di aplikasi kami.',
                variant: 'success',
            })

            navigate('/')
        } catch (err) {
            toast({
                title: 'Login Gagal!',
                description: 'Terjadi kesalahan saat mencoba masuk. Silakan coba lagi nanti.',
                variant: 'failed',
            })
        }
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLFormElement>) {
        if (event.key === 'Enter') {
            event.preventDefault()
            handleSubmit(async (data) => {
                await onLogin(data)
            })()
        }
    }

    return (
        <div className="flex flex-row w-full justify-center items-center h-screen px-40">
            <div className="w-full flex flex-col justify-center">
                <h1 className="text-4xl font-bold">
                    Sign In to <span className="text-cyan">Lakoe</span>
                </h1>
                <div className="flex flex-row gap-3">
                    <div className="mt-10 w-96">
                        <p className="text-base font-medium">If you don't have an account</p>
                        <div className="flex flex-row gap-1 items-center">
                            <p className="text-base font-medium">You can</p>
                            <Link to="/auth/register">
                                <span className="text-base font-medium text-cyan">
                                    Register here!
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full">
                        <img className="w-96" src="/persontwo.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="w-3/6 flex flex-col justify-start gap-5">
                <form onSubmit={handleSubmit(async (data) => await onLogin(data))} onKeyDown={handleKeyDown}>
                    <div className="flex flex-col gap-3">
                        <ValidateInput
                            error={errors.email}
                            name="email"
                            id="email"
                            placeholder="Email"
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
                                type={visible ? 'text' : 'password'}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                onClick={() => setVisible(!visible)}
                            >
                                {visible ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        <div className="flex justify-end text-xs font-medium mb-3">
                            <Link to="/forgot">Forgot Password?</Link>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-7">
                        <button
                            className="bg-cyan hover:bg-transparent hover:bg-lightCyan hover:text-cyan border-2 border-cyan rounded-md text-white font-medium h-10 pl-2 text-sm w-full"
                            type="submit"
                        >
                            Sign In
                        </button>
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
                </form>
            </div>
        </div>
    )
}
