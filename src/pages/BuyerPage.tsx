import { TiMinus } from "react-icons/ti";
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


import { Card, CardContent } from "@/components/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/carousel";


function BuyerPage() {
    
    const [count, setCount] = useState<number>(0)

    const handlePlusCount = () => {
        if (count < 12)
            setCount(count + 1)
    }

    const handleMinusCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const images = [
        {
            Image: "https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            Image: "https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            Image: "https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            Image: "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=600"
        },
    ];

    const [selectedImage, setSelectedImage] = useState(images[0].Image);
    const [currentIndex, setCurrentIndex] = useState(0);

    const selectImage = (image: string) => {
        setSelectedImage(image);
    };

    const triggerSelectRight = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
        selectImage(images[nextIndex].Image);
    };
    const triggerSelectLeft = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(prevIndex);
        selectImage(images[prevIndex].Image);
    }

    return (
        <div className="flex border flex-col items-center justify-center p-6 w-full h-full">

            <div className="flex border px-14 gap-6">
                <div className="flex flex-col ">
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="w-96 h-96 mb-4"
                    />

                    <div className="w-full flex justify-center">
                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            className="w-full max-w-sm"
                        >
                            <CarouselContent>
                                {images.map((item, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                        <div className="p-1">
                                            <Card>
                                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                                    <img
                                                        src={item.Image}
                                                        alt={`Carousel image ${index + 1}`}
                                                        className="cursor-pointer"
                                                        onClick={() => {
                                                            setCurrentIndex(index);
                                                            selectImage(item.Image);

                                                        }}
                                                    />
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="bg-red-500" onClick={triggerSelectLeft} />
                            <CarouselNext onClick={triggerSelectRight} />
                        </Carousel>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col mt-6 md:mt-0">
                    <h1 className="text-2xl font-bold mb-4">PlayStation </h1>
                    <p className="text-xl font-semibold text-gray-700 mb-4">Rp 7.725.000</p>
                    <div className="flex items-center mb-4">
                        <span className="mr-2">Jumlah:</span>
                        <button onClick={handleMinusCount} className="bg-gray-300 p-2 rounded-l">
                            <TiMinus />
                        </button>
                        <input
                            type="text"
                            value={count}
                            readOnly
                            className="w-12 text-center border-t border-b border-gray-300"
                        />
                        <button onClick={handlePlusCount} className="bg-gray-300 p-2 rounded-r">
                            <FaPlus />
                        </button>
                        <span className="ml-4">12 tersedia</span>
                    </div>
                    <div className="flex w-80 gap-5 mt-4">
                        <button className="bg-white text-black w-32 h-10 rounded border">Beli Langsung</button>
                        <button className="bg-blue-500 text-white w-32 h-10 rounded">+ Keranjang</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyerPage
