import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Button } from '../ui/button'
import { useProductCheckedContext } from '@/context/checkedProductContext'

export default function CobaModal() {
    const [open, setOpen] = useState(false)
    const { id } = useProductCheckedContext()

    return (
        <div>
            {/* Tombol Pemicu */}
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="rounded-lg p-1 border=none"
            >
                <p className="mx-2 text-md font-semibold text-cyan">Masuk</p>
            </button>

            {/* Background Overlay */}
            {open && <div className="fixed inset-0 bg-black opacity-50 z-50"></div>}

            <Dialog open={open} onClose={() => setOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                    <div className="bg-white p-6">
                        <div className="text-center mb-4">
                            <h2 className="text-xl font-semibold">SuryaElz Store</h2>
                        </div>
                        <div className="text-center mb-2">
                            <h3 className="text-lg font-semibold">Masuk</h3>
                        </div>
                        <div className="text-center text-sm text-gray-500 mb-4">
                            Welcome back!
                        </div>
                        <form>
                            <div className="mb-4 relative">
                                <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700">
                                    Nomor HP atau Email <span className="text-gray-500 sm:text-sm">ℹ️</span>
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        id="emailOrPhone"
                                        name="emailOrPhone"
                                        className="block w-full border-gray-300 rounded-md pl-3 pr-10"
                                        placeholder="83823233443"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white rounded-md py-2"
                                >
                                    Masuk
                                </Button>
                            </div>
                        </form>
                        <div className="mt-4 text-center">
                            <p className="text-sm">
                                Belum punya akun? <a href="#" className="text-blue-500">Daftar</a>
                            </p>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 pt-4 pr-4">
                        <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-700">
                            &times;
                        </button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
