import { TiMinus } from 'react-icons/ti'
import { useState, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import API from '@/networks/api'
import { Product } from '@/types/ProductType'
import { VariantOption } from '@/types/VariantOptionType'
import { useNavigate, useParams } from 'react-router-dom'
import formatToIDR from '@/lib/IdrUtils'
import { MdStars, MdVerified, MdLibraryBooks } from 'react-icons/md'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import Spinner from '@/components/utils/Spinner'
import { useLakoeStore } from '@/store/store'
import { useSpring, animated } from '@react-spring/web'
import { BiPackage } from 'react-icons/bi'
import { Cart } from '@/types/CartType'

function BuyerPage() {
    const loggedUser = useLakoeStore((state) => state.loggedUser)
    const setCarts = useLakoeStore((state) => state.setCarts)
    const carts = useLakoeStore((state) => state.carts)

    const [count, setCount] = useState<number>(0)
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [product, setProduct] = useState<Product | null>(null)
    const [selectedVariant, setSelectedVariant] = useState<VariantOption | null>(null)
    const [storeId, setStoreId] = useState<number>()
    const [productSku, setProductSku] = useState<string>()
    const [error, setError] = useState<string | null>(null)
    const [activeCart, setActiveCart] = useState<Cart>()

    const { id } = useParams()

    const navigate = useNavigate()
    const [springs, api] = useSpring(() => ({
        from: { x: 0, y: 0, opacity: 1 },
    }))

    useEffect(() => {
        async function GET_DATA() {
            try {
                if (!loggedUser) {
                    navigate('/auth/login')
                }

                if (id) {
                    const product: Product = await API.PRODUCT.GET_ONE_BY_ID(+id)
                    const existingCart: Cart = await API.CART.FIND_ONE_UNCOMPLETE(
                        (product && +product.storeId) || 0
                    )

                    setActiveCart(existingCart)
                    setCurrentIndex(0)
                    setProduct(product)
                    setStoreId(+product.storeId)
                    setSelectedVariant(product.variant?.variantOptions?.[0] || null)
                    setProductSku(
                        (product.variant &&
                            product.variant.variantOptions &&
                            product.variant.variantOptions[0] &&
                            product.variant.variantOptions[0].variantOptionValue &&
                            product.variant.variantOptions[0].variantOptionValue.sku) ||
                            ''
                    )
                }
            } catch (error) {
                setProduct(null)
                console.error('Error mengambil produk:', error)
            }
        }

        GET_DATA()
    }, [id, carts])

    const handlePlusCount = () => {
        if (count < (selectedVariant?.variantOptionValue?.stock ?? 0)) setCount(count + 1)
    }

    const handleMinusCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const triggerSelectRight = () => {
        if (currentIndex < (product?.attachments.length ?? 0) - 1) {
            setCurrentIndex(currentIndex + 1)
            updateVariant(currentIndex + 1)
        }
    }

    const triggerSelectLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
            updateVariant(currentIndex - 1)
        }
    }

    const updateVariant = (index: number) => {
        if (product && product.variant && product.variant.variantOptions) {
            const variant = product.variant.variantOptions[index]
            if (variant) {
                setSelectedVariant(variant)
                setCount(0)
            }
        }
    }

    const handleVariantChange = (variant: VariantOption) => {
        setSelectedVariant(variant)
        setCount(0)
        setCurrentIndex(product?.variant?.variantOptions?.indexOf(variant) ?? 0)
    }

    function onBuyNow() {
        if (!selectedVariant) {
            return setError('Pilih varian produk terlebih dahulu')
        }

        if (!loggedUser) {
            return navigate('/auth/login')
        }

        if (count < (product?.minimumOrder ?? 1)) {
            return setError(`Minimal pembelian adalah ${product?.minimumOrder}`)
        }

        setError(null)
        navigate('/checkout', {
            state: {
                orderedProducts: [
                    {
                        sku: productSku,
                        qty: count,
                    },
                ],
                storeId: storeId,
            },
        })
    }

    async function onAddToCart() {
        if (count < (product?.minimumOrder ?? 1)) {
            return setError(`Minimal pembelian adalah ${product?.minimumOrder}`)
        }

        // bad practice i guess
        let newCartId = 0

        if (!activeCart) {
            const newCart = await API.CART.CREATE({
                discount: 0,
                storeId: (product && +product.storeId) || 0,
            })

            newCartId = newCart.id
        }

        console.log('sku', productSku)

        if (storeId && productSku) {
            await API.CART_ITEM.CREATE({
                qty: count,
                storeId: storeId,
                cartId: activeCart ? activeCart.id : newCartId,
                sku:
                    (selectedVariant &&
                        selectedVariant.variantOptionValue &&
                        selectedVariant.variantOptionValue.sku) ||
                    '',
            })

            const updatedCart = await API.CART.FIND_ALL_UNCOMPLETE()
            setCarts(updatedCart)
        }

        api.start({
            from: {
                x: 0,
                y: 0,
                opacity: 1,
            },
            to: {
                x: 100,
                y: 200,
                opacity: 0,
            },
        })
    }

    if (!product) {
        return <Spinner size={14} />
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex justify-start w-4/5 py-4">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-black" href="/order">
                                Pakaian
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-black truncate" href="/components">
                                Pakaian Pria
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink
                                className="text-cyan truncate font-semibold"
                                href="/components"
                            >
                                Kaos Pria
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="flex gap-2 px-8 py-14 bg-white w-4/5 h-full">
                {/** left */}
                <div className="flex flex-col w-2/5 items-center h-full">
                    <div className="flex items-center">
                        <button className="border bg-white rounded-full p-2 -mr-4 z-10">
                            <IoIosArrowBack
                                onClick={triggerSelectLeft}
                                className="size-5 text-cyan"
                                aria-disabled={currentIndex === 0}
                            />
                        </button>
                        <div className="w-96 h-96">
                            <img
                                src={product.attachments[currentIndex]}
                                alt={`Product image ${currentIndex + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <button className="border bg-white rounded-full p-2 -ml-4 z-10">
                            <IoIosArrowForward
                                onClick={triggerSelectRight}
                                className="size-5 text-cyan"
                                aria-disabled={currentIndex === product.attachments.length - 1}
                            />
                        </button>
                    </div>

                    <div className="flex gap-2 mt-9">
                        {product.attachments.map((attachment, index) => (
                            <img
                                key={index}
                                src={attachment}
                                alt=""
                                className={`w-20 h-20 object-cover cursor-pointer ${
                                    currentIndex === index ? 'border-2 border-blue-500' : ''
                                }`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </div>

                {/** right */}
                <div className="flex flex-col gap-4 w-full">
                    {/** title & price */}
                    <h1 className="flex flex-row gap-2 items-center text-2xl font-bold">
                        <MdVerified className="text-3xl text-cyan" /> {product.name}
                    </h1>
                    {selectedVariant && (
                        <div className="flex flex-col gap-1 bg-lightergray p-4">
                            <p className="text-3xl font-bold text-gray-700 text-cyan">
                                {selectedVariant?.variantOptionValue?.price &&
                                    formatToIDR(selectedVariant?.variantOptionValue?.price)}
                            </p>
                            <div className="flex items-center gap-2">
                                <MdStars className="text-3xl text-cyan" />
                                <div className="flex flex-col">
                                    <p className="flex flex-row gap-1 items-center text-base text-cyan font-bold">
                                        Lakoe Garansi 100% Original
                                    </p>
                                    <p className="flex flex-row gap-1 items-center text-xs font-medium -mt-1">
                                        Garansi uang kembali jika produk tidak original
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/** variants */}
                    <div className="flex flex-row items-center gap-4 px-5">
                        <h3 className="text-sm text-gray font-semibold w-24">Variant</h3>
                        <div className="flex flex-row gap-1">
                            {product.variant?.variantOptions?.map((variantOption, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleVariantChange(variantOption)}
                                    className={` border px-6 py-2 rounded-md ${
                                        selectedVariant?.id === variantOption.id
                                            ? 'bg-cyan bg-opacity-20 border border-cyan'
                                            : 'bg-transparent'
                                    }`}
                                >
                                    <p>{variantOption.name}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/** qty */}
                    <div className="flex flex-row gap-4 items-center px-5">
                        <h3 className="text-sm text-gray font-semibold w-24">Kuantitas</h3>
                        <div className="flex flex-row items-center">
                            <div className="border border-e-0 border-lightGray h-8">
                                <button
                                    onClick={handleMinusCount}
                                    className="bg-gray-300 p-2 rounded-l"
                                >
                                    <TiMinus />
                                </button>
                            </div>
                            <div className="border border-lightGray h-8">
                                <input
                                    type="text"
                                    value={count}
                                    readOnly
                                    className="w-12 h-full text-center"
                                />
                            </div>
                            <div className="border border-s-0 border-lightGray h-8">
                                <button
                                    onClick={handlePlusCount}
                                    className="bg-gray-300 p-2 rounded-r"
                                >
                                    <FaPlus />
                                </button>
                            </div>
                            <span className="text-sm text-gray font-semibold ml-2">
                                <span className="text-xs mr-1">Tersisa</span>
                                {selectedVariant?.variantOptionValue?.stock &&
                                    selectedVariant?.variantOptionValue?.stock - count}
                                <span className="text-xs ml-1">buah</span>
                            </span>
                        </div>
                    </div>
                    {error && <div className="pl-5 text-sm text-red-500">{error}</div>}

                    {/** buttons */}
                    <div className="flex gap-2 w-80 mt-auto w-full">
                        <button
                            className="bg-white text-black py-3 w-44 rounded-md border border-gray ml-auto"
                            onClick={onBuyNow}
                        >
                            Beli Langsung
                        </button>
                        <button
                            onClick={onAddToCart}
                            className="bg-cyan text-white py-3 w-44 rounded-md border border-gray relative"
                        >
                            Keranjang
                            {count >= product?.minimumOrder && (
                                <animated.h1
                                    style={{ ...springs }}
                                    className="absolute top-0 right-0"
                                >
                                    <BiPackage className="size-10 text-cyan" />
                                </animated.h1>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-white w-4/5 p-10">
                <h1 className="flex flex-row items-center gap-2 items-center text-2xl font-bold">
                    <MdLibraryBooks className="text-cyan" /> Description
                </h1>
                <div className="">
                    <p className="text-sm mt-3 text-gray-800">{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default BuyerPage
