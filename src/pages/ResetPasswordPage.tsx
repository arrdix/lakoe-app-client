"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { FaEyeSlash, FaEye, FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom"
import { resetPasswordDto } from "@/dtos/AuthDto"
import ValidateInput from "@/components/utils/ValidatedInput";
import { useState, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import API from "@/networks/api";
import { useToast } from "@/components/ui/use-toast";
import Spinner from "@/components/utils/Spinner";

const ResetSchema = z.object({
    password: z
        .string()
        .min(4, { message: "Password harus terdiri dari minimal 5 karakter" })
        .max(20, { message: "Password maksimal 20 karakter" })
});

export default function ResetPasswordPage() {
    const hookForm = useForm<resetPasswordDto>({
        resolver: zodResolver(ResetSchema)
    })
    const { handleSubmit, register, formState: { errors } } = hookForm
    const [visible, setVisible] = useState(false)

    const { toast } = useToast()

    const onReset = async (data: resetPasswordDto) => {
        toast({
            title: 'Memvalidasi',
            description: 'Kami sedang memvalidasi data Anda.',
            action: <Spinner size={6} />,
        })

        try {
            toast({
                title: 'Permintaan mengatur ulang kata sandi berhasil!',
                description: 'Silakan periksa email Anda untuk tautan ubah password',
                variant: 'success',
            })

            if (token)
                await API.AUTH.RESET(data, token)
        } catch (error) {
            toast({
                title: 'Gagal mengatur ulang kata sandi!',
                description: 'Terjadi kesalahan saat melakukan registrasi. Silakan coba lagi.',
                variant: 'failed',
            })
        }
    };

    const { token } = useParams()

    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate('/')
        }

        console.log("test", token);
    }, [navigate, token])

    function handleKeyDown(event: React.KeyboardEvent<HTMLFormElement>) {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit(onReset)();
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
                            <p className="text-base font-medium">You can
                            </p>
                            <Link to="/auth/login">
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
                {/* Ensure that the form submit is handled by handleSubmit */}
                <form onSubmit={handleSubmit(onReset)} onKeyDown={handleKeyDown}>
                    <div className="flex flex-col gap-3">
                        <div className="relative">
                            <ValidateInput
                                error={errors.password}
                                name="password"
                                id="password"
                                placeholder="Your Password"
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
                        {/* Remove onClick and handle submit through the form */}
                        <button
                            className="bg-cyan hover:bg-transparent hover:bg-lightCyan border-2 border-gray-200 rounded-md text-white font-medium h-10 pl-2 text-sm w-full"
                            type="submit"
                        >
                            Reset
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
