import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Button } from '@/components/ui/button'
import { IoMdClose } from 'react-icons/io'

interface MessageTemplateModalProps {
    isOpen: boolean
    onModalClose: () => void
}

export default function MessageTemplateModal({ isOpen, onModalClose }: MessageTemplateModalProps) {
    const [isModalOpen, setOpen] = useState(isOpen)

    useEffect(() => {
        if (!isModalOpen) {
            onModalClose()
        }
    }, [isModalOpen])

    return (
        <div className="z-90">
            {/* Tombol Pemicu */}

            <Button variant={'outline'} className="text-xs" onClick={() => setOpen(true)}>
                Ubah Stok
            </Button>

            {/* Background Overlay */}
            {isModalOpen && <div className="fixed inset-0 bg-black opacity-50 z-50"></div>}

            <Dialog open={isModalOpen} onClose={() => setOpen(false)} className="relative z-50">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="w-full sm:flex sm:items-start">
                                    <div className="flex flex-col gap-4 w-full mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <DialogTitle
                                            as="h3"
                                            className="flex justify-between text-base font-semibold leading-6 text-gray-900"
                                        >
                                            <p className="text-black text-lg font-bold">
                                                Buat Template Pesan Baru
                                            </p>
                                            <Button
                                                className="text-xs bg-transparent border border-gray text-black p-2 h-auto hover:bg-black hover:text-white"
                                                onClick={() => setOpen(false)}
                                            >
                                                <IoMdClose />
                                            </Button>
                                        </DialogTitle>
                                        <div className="flex flex-col gap-4 w-full h-full">
                                            <div className="flex flex-col gap-1">
                                                <label
                                                    htmlFor="storeMessageTitle"
                                                    className="text-sm"
                                                >
                                                    Judul Pesan
                                                    <span className="text-red-500"> *</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="storeMessageTitle"
                                                    placeholder="Judul Pesan"
                                                    className="border border-gray-200 rounded-md h-10 pl-2 text-sm"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label
                                                    htmlFor="storeMessageBody"
                                                    className="text-sm"
                                                >
                                                    Detail Isi Pesan
                                                    <span className="text-red-500"> *</span>
                                                </label>
                                                <div className="flex gap-1 mb-1">
                                                    <Button className="bg-transparent border border-lightGray text-black hover:text-white">
                                                        Nama Pembeli
                                                    </Button>
                                                    <Button className="bg-transparent border border-lightGray text-black hover:text-white">
                                                        Nama Produk
                                                    </Button>
                                                    <Button className="bg-transparent border border-lightGray text-black hover:text-white">
                                                        Nama Toko
                                                    </Button>
                                                </div>
                                                <textarea
                                                    id="storeMessageBody"
                                                    placeholder="Isi Pesan"
                                                    className="border border-gray-200 rounded-md h-24 pl-2 py-2 text-sm resize-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <Button
                                    variant="outline"
                                    className="bg-cyan text-white px-5 py-0"
                                    onClick={() => {
                                        setOpen(false)
                                    }}
                                >
                                    Simpan
                                </Button>
                                <Button
                                    variant="outline"
                                    className="px-5 mx-2"
                                    onClick={() => {
                                        setOpen(false)
                                    }}
                                >
                                    Batalkan
                                </Button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}