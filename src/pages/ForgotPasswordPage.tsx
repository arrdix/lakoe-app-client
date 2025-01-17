'use client'

import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { forgotPasswordDto } from '@/dtos/AuthDto'
import ValidateInput from '@/components/utils/ValidatedInput'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import API from '@/networks/api'
import { useToast } from '@/components/ui/use-toast'
import Spinner from '@/components/utils/Spinner'

const ForgotSchema = z.object({
    email: z
        .string()
        .min(1, { message: 'Email harus diisi' })
        .email({ message: 'Format email tidak valid' }),
})

export default function ForgotPasswordPage() {
    const hookForm = useForm<forgotPasswordDto>({
        resolver: zodResolver(ForgotSchema),
    })
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = hookForm

    const { toast } = useToast()

    const onForgot = async (data: forgotPasswordDto) => {
        toast({
            title: 'Memvalidasi',
            description: 'Kami sedang memvalidasi data Anda.',
            action: <Spinner size={6} />,
        })

        try {
            await API.AUTH.FORGOT(data)

            toast({
                title: 'Permintaan ubah password berhasil!',
                description: 'Silakan periksa email Anda untuk tautan ubah password',
                variant: 'success',
            })
        } catch (error) {
            toast({
                title: 'Gagal Mengatur Ulang Kata Sandi!',
                description: 'Mohon periksa kembali email Anda dan coba lagi.',
                variant: 'failed',
            })
        }
    }

    function onForgotForgot(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()
        handleSubmit(onForgot)()
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLFormElement>) {
        if (event.key === 'Enter') {
            event.preventDefault()
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onForgotForgot(event as any)
        }
    }

    return (
        <div className="flex flex-row w-full justify-center items-center h-screen px-40">
            <div className="w-full flex flex-col justify-center">
                <h1 className="text-4xl font-bold">
                    Lupa akun <span className="text-cyan">Lakoe</span>
                </h1>
                <div className="flex flex-row gap-3">
                    <div className="mt-10 w-96">
                        <p className="text-base font-medium">Kamu tidak ingin melanjutkan?</p>
                        <div className="flex flex-row gap-1 items-center">
                            <p className="text-base font-medium">Kamu bisa</p>
                            <Link to="/auth/login">
                                <span className="text-base font-medium text-cyan">
                                    Login di sin!
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full">
                        <img className="w-96" src="../../public/persontwo.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="w-3/6 flex flex-col justify-start gap-5">
                <form onKeyDown={handleKeyDown} className="flex flex-col gap-3">
                    <div className="flex flex-col gap-3">
                        <ValidateInput
                            error={errors.email}
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            register={register}
                            type="text"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-7">
                        <button
                            className="bg-cyan hover:bg-transparent hover:text-cyan hover:border-cyan hover:bg-lightCyan border-2 border-gray-200 rounded-md text-white font-medium h-10 pl-2 text-sm w-full"
                            type="submit"
                            onClick={onForgotForgot}
                        >
                            Submit
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
