import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Button } from '../ui/button'

interface NonaktifProductModalProps {
    onModalClose?: () => void
    productName: string
}

export default function NonaktifProductModal({
    onModalClose,
    productName,
}: NonaktifProductModalProps) {
    const [open, setOpen] = useState(true)

    // edit logic
    useEffect(() => {
        if (onModalClose && open === false) {
            onModalClose()
        }
    }, [open])

    return (
        <div>
            {/* Background Overlay */}
            {open && <div className="fixed inset-0 bg-black opacity-50 z-50"></div>}

            <Dialog open={open} onClose={setOpen} className="relative z-50">
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
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <ExclamationTriangleIcon
                                            aria-hidden="true"
                                            className="h-6 w-6 text-red-600"
                                        />
                                    </div>
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <DialogTitle
                                            as="h3"
                                            className="text-base font-semibold leading-6 text-gray-900"
                                        >
                                            Nonaktifkan Produk
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Nonaktifkan produk{' '}
                                                <span className="font-semibold uppercase">
                                                    {productName}
                                                </span>
                                            </p>
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
                                    Ya, Nonaktifkan
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
