import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { CiViewList, CiDeliveryTruck } from "react-icons/ci";
import {
    PiCalendarDotLight,
    PiInvoiceLight,
    PiUserCircleLight,
    PiPackageLight,
    PiWalletLight,
    PiWhatsappLogoLight,
    PiCopySimpleLight,
} from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { FaCircleDot } from "react-icons/fa6";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "sonner"

export default function DetailOrderPage() {

    return (
        <div className="w-full h-full bg-lightergray p-8 flex flex-col gap-3">
            {/* Breadcrumb */}
            <div>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-cyan font-semibold" href="/">Daftar Pesanan</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-black w-44 truncate" href="/components">CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>...</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            {/* Status Order */}
            <div className="rounded flex flex-row gap-2 py-2.5 px-3 bg-white">
                <div>
                    <CiViewList className="size-6 text-cyan" />
                </div>
                <div>
                    <div className="flex flex-col gap-1 text-sm">
                        <p className="bg-yellow-400 w-fit font-semibold rounded p-1 text-sm">Belum Dibayar</p>
                        <p>Pesanan akan dibatalkan bila pembayaran tidak dilakukan sampai <span>10 Agustus 2023 - 00:00 WIB</span>. Silakan tunggu sampai pembayaran terkonfirmasi sebelum mengirimkan barang.</p>
                        <div className="flex flex-row items-center text-cyan gap-1">
                            <Accordion type="single" collapsible className="hover:bg-transparent">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="my-2">Lihat Riwayat Pesanan?</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="rounded flex flex-row gap-3 py-2.5 px-3 h-full bg-white border">
                                            <div className="my-auto flex items-center justify-center">
                                                <div className="flex items-center justify-center bg-cyan rounded-full w-5 h-5 relative">
                                                    <FaCircleDot className="text-blue-200 border-none w-5 h-5" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="font-semibold text-xs">Pesanan Dibuat</p>
                                                <p className="text-gray text-xs">Sab, 10 Agu 2023 - 14:00 WIB</p>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detail Order */}
            <div className="flex flex-col justify-between gap-5 py-2.5 px-3 rounded bg-white">
                {/* Date */}
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row items-center gap-2">
                        <PiCalendarDotLight className="mr-2 size-6 text-cyan" />
                        <p className="font-semibold">Tanggal</p>
                    </div>
                    <div>
                        <p>09 Agustus 2023 - 19:43 WIB</p>
                    </div>
                </div>
                {/* Invoice */}
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row items-center gap-2">
                        <PiInvoiceLight className="mr-2 size-6 text-cyan" />
                        <p className="font-semibold">Invoice</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <Button
                            className="border-none hover:bg-transparent p-0"
                            variant="ghost"
                            onClick={() =>
                                toast("Nomor Invoice berhasil disalin", {
                                    action: {
                                        label: "OK",
                                        onClick: () => console.log("Undo"),
                                    },
                                })
                            }
                        >
                            <PiCopySimpleLight className="mr-2 size-5" />
                        </Button>
                        <p>INV/20230809/MPL/00000239</p>
                    </div>
                </div>
                {/* Buyer Order */}
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row items-center">
                        <PiUserCircleLight className="mr-4 size-6 text-cyan" />
                        <p className="font-semibold">Pembeli</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <PiWhatsappLogoLight className="mr-2 size-6 text-green-600" />
                        <p>Annur Syawila Hasibuan</p>
                    </div>
                </div>
            </div>

            {/* Detail Produk */}
            <div className="rounded flex flex-row gap-2 py-2.5 px-3 bg-white">
                <div>
                    <PiPackageLight className="mr-2 size-6 text-cyan" />
                </div>
                <div className="w-full flex-col gap-3">
                    <p className="font-semibold mb-2">Detail Produk</p>
                    <div className="flex flex-col shadow p-2 rounded">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row">
                                <div className="w-14 mr-2">
                                    <img className="w-full" src="../../public/tshirt.png" alt="" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h1>CREWNECK BASIC - BLACK | sweter polos hoodie polos crewneck - S</h1>
                                    <p>1   x   Rp180.000</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-end">
                                <p className="text-gray">Total Belanja</p>
                                <p>Rp. 180.000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detail Pengiriman */}
            <div className="rounded flex flex-row gap-2 py-2.5 px-3 bg-white">
                <div>
                    <CiDeliveryTruck className="mr-2 size-6 text-cyan" />
                </div>
                <div className="w-full flex-col gap-3">
                    <div className="flex flex-row justify-between">
                        <p className="font-semibold mb-2">Detail Pengiriman</p>
                        <Dialog>
                            <DialogTrigger className="text-cyan font-semibold">Lacak Pengiriman</DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Lacak Pengiriman</DialogTitle>
                                    <DialogDescription className="text-black flex flex-col gap-1">
                                        <div className="w-full flex flex-row justify-between p-2">
                                            <div className="w-96 flex flex-col gap-3">
                                                <div>
                                                    <p>Kurir</p>
                                                    <p className="font-semibold">J&T - Regular</p>
                                                </div>
                                                <div>
                                                    <div className="flex">
                                                        <p>No.Resi</p>
                                                    </div>
                                                    <p className="font-semibold">JT6268865922</p>
                                                </div>
                                                <div>
                                                    <p>Pengirim</p>
                                                    <p className="font-semibold">Bakulan Store</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p>Penerima</p>
                                                <p className="font-semibold">Annur Syawila Hasibuan</p>
                                                <p>Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</p>
                                            </div>
                                        </div>
                                        <p>Status: <span className="font-semibold">Dalam Proses Pengiriman</span></p>
                                        <div className="flex flex-col border rounded bg-white">
                                            <div className="rounded flex flex-row gap-3 py-2.5 px-3 h-ful">
                                                <div className="my-auto flex items-center justify-center">
                                                    <div className="flex items-center justify-center bg-cyan rounded-full w-5 h-5 relative">
                                                        <FaCircleDot className="text-blue-200 border-none w-5 h-5" />
                                                        <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gray"></div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="font-semibold text-xs">RECEIVED AT INBOUND STATION [JAKARTA , HUB VETERAN BINTARO]</p>
                                                    <p className="text-gray text-xs">Sab, 10 Agu 2023 - 14:00 WIB</p>
                                                </div>
                                            </div>
                                            <div className="rounded flex flex-row gap-3 py-2.5 px-3 h-ful">
                                                <div className="my-auto flex items-center justify-center">
                                                    <div className="flex items-center justify-center bg-gray rounded-full w-5 h-5 relative">
                                                        <FaCircleDot className="text-lightGray border-none w-5 h-5" />
                                                        <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gray"></div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="font-semibold text-xs">SHIPMENT FORWARDED TO DESTINATION [JAKARTA , HUB VETERAN BINTARO]</p>
                                                    <p className="text-gray text-xs">Sab, 10 Agu 2023 - 14:00 WIB</p>
                                                </div>
                                            </div>
                                            <div className="rounded flex flex-row gap-3 py-2.5 px-3 h-ful">
                                                <div className="my-auto flex items-center justify-center">
                                                    <div className="flex items-center justify-center bg-gray rounded-full w-5 h-5 relative">
                                                        <FaCircleDot className="text-lightGray border-none w-5 h-5" />
                                                        <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gray"></div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="font-semibold text-xs">Pesanan Diproses</p>
                                                    <p className="text-gray text-xs">Sab, 10 Agu 2023 - 14:00 WIB</p>
                                                </div>
                                            </div>
                                            <div className="rounded flex flex-row gap-3 py-2.5 px-3 h-ful">
                                                <div className="my-auto flex items-center justify-center">
                                                    <div className="flex items-center justify-center bg-gray rounded-full w-5 h-5 relative">
                                                        <FaCircleDot className="text-lightGray border-none w-5 h-5" />
                                                        <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gray"></div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="font-semibold text-xs">RECEIVED AT SORTING CENTER [JAKARTA]</p>
                                                    <p className="text-gray text-xs">Sab, 10 Agu 2023 - 14:00 WIB</p>
                                                </div>
                                            </div>
                                            <div className="rounded flex flex-row gap-3 py-2.5 px-3 h-ful">
                                                <div className="my-auto flex items-center justify-center">
                                                    <div className="flex items-center justify-center bg-gray rounded-full w-5 h-5 relative">
                                                        <FaCircleDot className="text-lightGray border-none w-5 h-5" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="font-semibold text-xs">SHIPMENT RECEIVED BY JNE COUNTER OFFICER AT [JAKARTA]</p>
                                                    <p className="text-gray text-xs">Sab, 10 Agu 2023 - 14:00 WIB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div >
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row">
                            <p className="w-48">Kurir</p>
                            <p className="w-full">J&T - Regular</p>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-48 flex flex-row gap-1 items-center">
                                <p>No.Resi</p>
                                <Button
                                    className="border-none hover:bg-transparent p-0"
                                    variant="ghost"
                                    onClick={() =>
                                        toast("Nomor Invoice berhasil disalin", {
                                            action: {
                                                label: "OK",
                                                onClick: () => console.log("Undo"),
                                            },
                                        })
                                    }
                                >
                                    <PiCopySimpleLight className="mr-2 size-5" />
                                </Button>
                            </div>
                            <p className="w-full">-</p>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-48 flex flex-row gap-1 items-center">
                                <p>Alamat</p>
                                <Button
                                    className="border-none hover:bg-transparent p-0"
                                    variant="ghost"
                                    onClick={() =>
                                        toast("Nomor Invoice berhasil disalin", {
                                            action: {
                                                label: "OK",
                                                onClick: () => console.log("Undo"),
                                            },
                                        })
                                    }
                                >
                                    <PiCopySimpleLight className="mr-2 size-5" />
                                </Button>
                            </div>
                            <div className="w-full flex flex-col">
                                <p>Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</p>
                                <p className="text-gray">081234567890</p>
                                <p className="text-gray">Annur Syawila Hasibuan</p>
                            </div>
                        </div>
                    </div>
                </div >
            </div >

            {/* Rincian Pembayaran */}
            < div className="rounded flex flex-row gap-2 py-2.5 px-3 bg-white" >
                <div>
                    <PiWalletLight className="mr-2 size-5 text-cyan" />
                </div>
                <div className="w-full flex-col gap-3">
                    <p className="font-semibold mb-2">Rincian Pembayaran</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between">
                            <p>Total Harga(1barang)</p>
                            <p>Rp.180.000</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Total Ongkos Kirim(10kg)</p>
                            <p>Rp.10.000</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Diskon</p>
                            <p>Rp.0</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Biaya Layanan</p>
                            <p>Rp.180.000</p>
                        </div>
                        <hr className="border-b-2" />
                        <div className="flex justify-between">
                            <p>Total Penjualan</p>
                            <p>Rp.190.000</p>
                        </div>
                    </div>
                </div>
            </ div>

            {/* Button New order */}
            < div className="rounded flex flex-row gap-2 py-2.5 px-3 bg-white" >
                <div className="w-full flex flex-row justify-between">
                    <Button variant={"outline"} className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white">Tolak Pesanan</Button>
                    <Button variant={"outline"} className="text-white bg-cyan hover:bg-white hover:text-cyan hover:border-cyan">Proses Pesanan</Button>
                </div>
            </ div>
        </div >
    )
}
