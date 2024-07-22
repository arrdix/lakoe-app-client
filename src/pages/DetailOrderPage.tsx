import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { CiViewList, CiDeliveryTruck } from 'react-icons/ci'
import {
    PiCalendarDotLight,
    PiInvoiceLight,
    PiUserCircleLight,
    PiPackageLight,
    PiWalletLight,
    PiWhatsappLogoLight,
    PiCopySimpleLight,
} from 'react-icons/pi'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { toast } from 'sonner'
import AlertOrder from '@/components/order/AlertOrder'
import { useEffect, useState } from 'react'
import { Order } from '@/types/OrderType'
import { Product } from '@/types/ProductType'
import { VariantOption } from '@/types/VariantOptionType'
import { VariantOptionValue } from '@/types/VariantOptionValueType'
import { Variant } from '@/types/VariantType'
import API from '@/networks/api'
import statusChecker from '@/utils/statusChecker'
import { useParams } from 'react-router-dom'
import { ProductBySku } from '@/types/ProductBySkuType'

export default function DetailOrderPage() {
    const [isOpen, setIsOpen] = useState(false)
    const [order, setOrder] = useState<Order | null>(null)
    const [product, setProduct] = useState<Product | null>(null)
    const [, setVariant] = useState<Variant | null>(null)
    const [variantOption, setVariantOption] = useState<VariantOption | null>(null)
    const [, setVariantOptionValue] = useState<VariantOptionValue | null>(null)
    const [productSKU, setproductSKU] = useState<string | null>(null)

    const { labelColor } = statusChecker(order?.status || '')

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }
    const { id } = useParams()

    const handleCopy = () => {
        const textToCopy = `INV/${formattedDate}/MPL/${order?.invoiceNumber}`;
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                toast('Nomor Invoice berhasil disalin', {
                    action: {
                        label: 'OK',
                        onClick: () => console.log('Undo'),
                    },
                });
            })
            .catch((error) => {
                console.error('Error copying text: ', error);
            });
    };

    function formatDate(date: Date): string {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        return `${year}${month}${day}`
    }

    async function GET_PRODUCT() {
        if (productSKU) {
            const product: ProductBySku = await API.PRODUCT.GET_ONE_BY_SKU(productSKU)

            setProduct(product)
            setVariant((product.variant && product.variant) || null)
            setVariantOption((product.variant && product.variant.variantOption) || null)
            setVariantOptionValue(
                (product.variant &&
                    product.variant &&
                    product.variant.variantOption &&
                    product.variant.variantOption.variantOptionValue) ||
                null
            )
        }
    }

    useEffect(() => {
        async function GET_ORDER() {
            const order = await API.ORDER.GET_ONE(Number(id))
            setOrder(order)
            setVariant((order.variant && order.variant) || null)
            setVariantOption((order.variant && order.variant.variantOption) || null)
            setVariantOptionValue(
                (order.variant &&
                    order.variant &&
                    order.variant.variantOption &&
                    order.variant.variantOption.variantOptionValue) ||
                null
            )

            const productSKU =
                order &&
                order.carts &&
                order.carts.cartItems &&
                order.carts.cartItems[0] &&
                order.carts.cartItems[0].variantOptionValues &&
                order.carts.cartItems[0].variantOptionValues.sku

            setproductSKU(productSKU)
        }

        GET_ORDER()

        if (productSKU) {
            GET_PRODUCT()
        }
    }, [productSKU])

    const formattedDate = order?.updatedAt ? formatDate(new Date(order.updatedAt)) : 'Invalid Date'

    if (order && product) {
        const totalBeforeDiscount = (order?.price || 0) * (order?.carts?.cartItems?.[0]?.qty || 0)
        const shipping = 15000
        const totalAfterDiscount =
            (order?.price || 0) * (order?.carts?.cartItems?.[0]?.qty || 0) -
            (order?.carts?.discount || 0) +
            (order?.serviceCharge || 0) +
            shipping

        return (
            <div>
                {/* Breadcrumb */}
                <Breadcrumb className='mb-2'>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-cyan font-semibold" href="/order">
                                Daftar Pesanan
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink
                                className="text-black w-44 truncate"
                                href="/components"
                            >
                                <h1>
                                    {product.name}
                                    <span className="mx-1">|</span>
                                    {product.description}
                                    <span className="mx-1">-</span>
                                    {variantOption?.name}
                                </h1>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>...</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className=" flex flex-col gap-3 pb-8">
                    {/* Status Order */}
                    <div className="rounded-lg flex flex-row gap-2 py-2.5 px-3 bg-white">
                        <div>
                            <CiViewList className="size-6 text-cyan" />
                        </div>
                        <div>
                            <div className="flex flex-col gap-1 text-sm">
                                <p
                                    className={`${labelColor}  w-fit font-semibold rounded-lg py-1 text-sm`}
                                >
                                    {order.status}
                                </p>
                                <p>
                                    Pesanan akan dibatalkan bila pembayaran tidak dilakukan sampai{' '}
                                    <span>10 Agustus 2023 - 00:00 WIB</span>. Silakan tunggu sampai
                                    pembayaran terkonfirmasi sebelum mengirimkan barang.
                                </p>
                                <div className="flex flex-row items-center text-cyan gap-1">
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="hover:bg-transparent"
                                        value={isOpen ? 'item-1' : ''}
                                    >
                                        <AccordionItem value="item-1">
                                            <div onClick={toggleAccordion}>
                                                {isOpen ? (
                                                    <AccordionTrigger className="my-2">
                                                        Sembunyikan
                                                    </AccordionTrigger>
                                                ) : (
                                                    <AccordionTrigger className="my-2">
                                                        Lihat Riwayat Pesanan?
                                                    </AccordionTrigger>
                                                )}
                                            </div>
                                            <AccordionContent
                                                className={`transition-all duration-500 ease-in-out ${isOpen
                                                    ? 'max-h-screen opacity-100'
                                                    : 'max-h-0 opacity-0 overflow-hidden'
                                                    }`}
                                            >
                                                <div className="flex flex-col border rounded-lg bg-white">
                                                    <AlertOrder
                                                        status="Produk Telah Dikirim"
                                                        date="Sab, 10 Agu 2023 - 14.00 WIB"
                                                    />
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detail Order */}
                    <div className="flex flex-col justify-between gap-5 py-2.5 px-3 rounded-lg bg-white">
                        {/* Date */}
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row items-center gap-2">
                                <PiCalendarDotLight className="mr-2 size-6 text-cyan" />
                                <p className="font-semibold">Tanggal</p>
                            </div>
                            <div>
                                <p>{new Date(order.updatedAt).toLocaleString()}</p>
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
                                    onClick={handleCopy}
                                >
                                    <PiCopySimpleLight className="mr-2 size-5" />
                                </Button>
                                <p>
                                    INV/{formattedDate}/MPL/{order.invoiceNumber}
                                </p>
                            </div>
                        </div>
                        {/* Buyer Order */}
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row items-center">
                                <PiUserCircleLight className="mr-4 size-6 text-cyan" />
                                <p className="font-semibold">Pembeli</p>
                            </div>
                            <div className="flex flex-row items-center">
                                <a
                                    href={`https://wa.me/${order.receiverPhone}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <PiWhatsappLogoLight className="mr-2 size-6 text-green-600" />
                                </a>
                                <p>{order.receiverName}</p>
                            </div>
                        </div>

                    </div>

                    {/* Detail Produk */}
                    <div className="rounded-lg flex flex-row gap-2 py-2.5 px-3 bg-white">
                        <div>
                            <PiPackageLight className="mr-2 size-6 text-cyan" />
                        </div>
                        <div className="w-full flex-col gap-3">
                            <p className="font-semibold mb-2">Detail Produk</p>
                            <div className="flex flex-col border p-2 rounded-lg">
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-row">
                                        <img className="w-20 h-20 mr-2 flex-shrink-0" src={product.attachments[0]} alt="" />
                                        <div className="flex flex-col justify-center">
                                            <h1>
                                                {product.name}
                                            </h1>
                                            <p>
                                                {order?.carts?.cartItems?.[0]?.qty} x Rp {order.price}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-end">
                                        <p className="text-gray text-sm font-normal">Total Belanja</p>
                                        <p className='font-medium text-sm'>Rp. {totalBeforeDiscount}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detail Pengiriman */}
                    <div className="rounded-lg flex flex-row gap-2 py-2.5 px-3 bg-white">
                        <div>
                            <CiDeliveryTruck className="mr-2 size-6 text-cyan" />
                        </div>
                        <div className="w-full flex-col gap-3">
                            <div className="flex flex-row justify-between">
                                <p className="font-semibold mb-2">Detail Pengiriman</p>
                                <Dialog>
                                    <DialogTrigger className="text-cyan font-semibold">
                                        Lacak Pengiriman
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Lacak Pengiriman</DialogTitle>
                                            <DialogDescription className="text-black flex flex-col gap-1">
                                                <div className="w-full flex flex-row justify-between p-2">
                                                    <div className="w-96 flex flex-col gap-3">
                                                        <div>
                                                            <p>Kurir</p>
                                                            <p className="font-semibold">
                                                                J&T - Regular
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="flex">
                                                                <p>No.Resi</p>
                                                            </div>
                                                            <p className="font-semibold">
                                                                JT6268865922
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p>Pengirim</p>
                                                            <p className="font-semibold">
                                                                Bakulan Store
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p>Penerima</p>
                                                        <p className="font-semibold">
                                                            {order.receiverName}
                                                        </p>
                                                        <p>{order.receiverAddress}</p>
                                                    </div>
                                                </div>
                                                <p>
                                                    Status:{' '}
                                                    <span className="font-semibold">
                                                        Dalam Proses Pengiriman
                                                    </span>
                                                </p>
                                                <div className="flex flex-col border rounded-lg bg-white">
                                                    <AlertOrder
                                                        status="DELIVERED TO [ | 17-03-2021 11:15 | JAKARTA ]"
                                                        date="Sen, 12 Agu 2023 - 10:00 WIB"
                                                    />
                                                    <AlertOrder
                                                        status="WITH DELIVERY COURIER [JAKARTA , HUB VETERAN BINTARO]"
                                                        date="Sen, 12 Agu 2023 - 10:00 WIB"
                                                    />
                                                </div>
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                            </div>
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
                                                toast('Nomor Invoice berhasil disalin', {
                                                    action: {
                                                        label: 'OK',
                                                        onClick: () => console.log('Undo'),
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
                                                toast('Nomor Invoice berhasil disalin', {
                                                    action: {
                                                        label: 'OK',
                                                        onClick: () => console.log('Undo'),
                                                    },
                                                })
                                            }
                                        >
                                            <PiCopySimpleLight className="mr-2 size-5" />
                                        </Button>
                                    </div>
                                    <div className="w-full flex flex-col">
                                        <p>{order.receiverAddress}</p>
                                        <p className="text-gray">{order.receiverPhone}</p>
                                        <p className="text-gray">{order.receiverName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Rincian Pembayaran */}
                    <div className="rounded-lg flex flex-row gap-2 py-2.5 px-3 bg-white">
                        <div>
                            <PiWalletLight className="mr-2 size-5 text-cyan" />
                        </div>
                        <div className="w-full flex-col gap-3">
                            <p className="font-semibold mb-2">Rincian Pembayaran</p>
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <p>Total Harga({order?.carts?.cartItems?.[0]?.qty} barang)</p>
                                    <p>Rp. {totalBeforeDiscount}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Total Ongkos Kirim(10kg)</p>
                                    <p>Rp. {shipping}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Diskon</p>
                                    <p>Rp. {order.carts?.discount}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Biaya Layanan</p>
                                    <p>Rp. {order.serviceCharge}</p>
                                </div>
                                <hr className="border-b-2" />
                                <div className="flex justify-between">
                                    <p>Total Penjualan</p>
                                    <p>Rp. {totalAfterDiscount}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Button New order */}
                    {order.status === 'Pesanan Baru' && (
                        <div className="rounded-lg flex flex-row gap-2 py-2.5 px-3 bg-white">
                            <div className="w-full flex flex-row justify-between">
                                <Button
                                    variant={'outline'}
                                    className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                                >
                                    Tolak Pesanan
                                </Button>
                                <Button
                                    variant={'outline'}
                                    className="text-white bg-cyan hover:bg-white hover:text-cyan hover:border-cyan"
                                >
                                    Proses Pesanan
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
