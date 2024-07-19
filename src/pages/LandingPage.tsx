import { FaArrowRightLong } from 'react-icons/fa6'
import { SiNike, SiAdidas, SiThenorthface, SiPuma, SiZara } from 'react-icons/si'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import CardLanding from '@/components/landing-page/CardLanding'
import { useEffect, useState } from 'react'
import API from '@/networks/api'
import { Product } from '@/types/ProductType'
import CardCarousel from '@/components/landing-page/CardCarousel'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    const [products, setProducts] = useState<Product[]>()

    useEffect(() => {
        async function GET_PRODUCTS() {
            const products = await API.PRODUCT.GET_ALL_BY_ID()
            setProducts(products)
            console.log(products)
        }

        GET_PRODUCTS()
    }, [])

    return (
        <div className="flex flex-col w-81.5% mb-20 gap-20 mt-12">
            <div className="flex flex-row flex-wrap">
                {/* Left Side */}
                <div className="w-9/12 flex flex-col gap-8">
                    <div className="flex flex-col">
                        <h1 className="text-7xl font-medium">Belanja</h1>
                        <h1 className="text-7xl font-medium">Lebih Mudah</h1>
                        <h1 className="text-7xl font-medium">
                            Bersama <span className="text-cyan font-bold">Lakoe.</span>
                        </h1>
                    </div>
                    <div>
                        <a
                            href="#landing-product"
                            className="flex justify-center items-center text-white space-x-2 bg-cyan w-48 h-12 hover:bg-lightCyan rounded-3xl"
                        >
                            <span>Belanja Sekarang</span>
                            <FaArrowRightLong />
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-gray text-xl">Partner Kami</p>
                        <div className="flex flex-row gap-7">
                            <SiNike className="size-12 text-gray" />
                            <SiAdidas className="size-12 text-gray" />
                            <SiThenorthface className="size-12 text-gray" />
                            <SiPuma className="size-12 text-gray" />
                            <SiZara className="size-12 text-gray" />
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-3/12">
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem>
                                <CardCarousel
                                    attachment="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2022/10/large-1666270672-7760e9757bb20409006827097590db63.jpg"
                                    name="Suit Black Panther Cusszz"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <CardCarousel
                                    attachment="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2022/10/large-1666270672-7760e9757bb20409006827097590db63.jpg"
                                    name="Suit Black Panther Cusszz"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <CardCarousel
                                    attachment="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2022/10/large-1666270672-7760e9757bb20409006827097590db63.jpg"
                                    name="Suit Black Panther Cusszz"
                                />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>

            {/* Our Category */}
            <div id="landing-category">
                <h1 className="text-4xl font-medium pb-5">Kategori</h1>
                <div className="mx-auto max-w-screen-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-full">
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                            <a
                                href=""
                                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                            >
                                <img
                                    src="https://wallpapers.com/images/hd/jordan-shoes-0vzpx6o9e4jrcaq4.jpg"
                                    alt=""
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                                    Sepatu
                                </h3>
                            </a>
                        </div>
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                            <a
                                href=""
                                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
                            >
                                <img
                                    src="https://mrwallpaper.com/images/hd/electric-guitar-aesthetic-blue-sky-0lzkel0je22ht02u.jpg"
                                    alt=""
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                                    Musik
                                </h3>
                            </a>
                            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                                <a
                                    href=""
                                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                                >
                                    <img
                                        src="https://media.karousell.com/media/photos/products/2023/11/30/vintage_grunge_aesthetic_t_shi_1701332417_cd2af3c0_progressive"
                                        alt=""
                                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                                        Kaos
                                    </h3>
                                </a>
                                <a
                                    href=""
                                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                                >
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Of20ROkAIFVC6MtJy52_1f4cvzDKHLqqSg&s"
                                        alt=""
                                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                                        Kain
                                    </h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Product */}
            <div className="flex flex-col" id="landing-product">
                <h1 className="text-4xl font-medium pb-5">Produk</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {products &&
                        products.map((product) => {
                            const price =
                                product.variant &&
                                product.variant.variantOptions &&
                                product.variant.variantOptions[0] &&
                                product.variant.variantOptions[0].variantOptionValue &&
                                +product.variant.variantOptions[0].variantOptionValue.price
                            if (price) {
                                return (
                                    <Link to={`/product/${product.id}`}>
                                        <CardLanding
                                            attachment={product.attachments[0]}
                                            name={product.name}
                                            price={price}
                                        />
                                    </Link>
                                )
                            }
                        })}
                </div>
            </div>
        </div>
    )
}
