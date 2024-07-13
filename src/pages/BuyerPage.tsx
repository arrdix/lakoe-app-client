import { TiMinus } from 'react-icons/ti'
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function BuyerPage() {
    const [count, setCount] = useState<number>(0)
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePlusCount = () => {
        if (count < 12) setCount(count + 1)
    }

    const handleMinusCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const images = [
        {
            Image: 'https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=600',

        },
        {
            Image: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=600',

        },
        {
            Image: 'https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=600',

        },
        {
            Image: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=600',

        },
    ]

    const triggerSelectRight = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const triggerSelectLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center p-6 w-full h-full  ">
            <div className="flex px-14 gap-6 w-11/12 px-8 py-12 bg-white">
                <div className="flex flex-col w-full justify-center items-center  ">
                    
                    <div className="flex gap-4 items-center">
                        <button className='border rounded-full border-blue-500 '>
                            <IoIosArrowBack onClick={triggerSelectLeft} className='size-5' aria-disabled={currentIndex === 0} />
                        </button>
                        <div className="w-96 h-96 ">

                            <img
                                src={images[currentIndex].Image}
                                alt={`Carousel item ${currentIndex + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <button className='border rounded-full border-blue-500'>
                            <IoIosArrowForward onClick={triggerSelectRight} className='size-5' aria-disabled={currentIndex === images.length - 1} />
                        </button>
                    </div>

                   
                    <div className="flex gap-2 mt-9">



                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image.Image}
                                alt=""
                                className={`w-20 h-20 object-cover cursor-pointer ${currentIndex === index ? 'border-2 border-blue-500' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}




                    </div>
                </div>

                
                <div className="w-full md:w-1/2 flex flex-col mt-6 md:mt-0">
                    <h1 className="text-2xl font-bold mb-4">PlayStation</h1>
                    <p className="text-xl font-semibold text-gray-700 mb-4">Rp 7.725.000</p>
                    <div className="flex items-center mb-4">
                        <span className="mr-2">Jumlah:</span>
                        <button
                            onClick={handleMinusCount}
                            className="bg-gray-300 p-2 rounded-l"
                        >
                            <TiMinus />
                        </button>
                        <input
                            type="text"
                            value={count}
                            readOnly
                            className="w-12 text-center border-t border-b border-gray-300"
                        />
                        <button
                            onClick={handlePlusCount}
                            className="bg-gray-300 p-2 rounded-r"
                        >
                            <FaPlus />
                        </button>
                        <span className="ml-4">12 tersedia</span>
                    </div>
                    <div className="flex w-80 gap-5 mt-4">
                        <button className="bg-white text-black w-32 h-10 rounded border">
                            Beli Langsung
                        </button>
                        <button className="bg-blue-500 text-white w-32 h-10 rounded">
                            + Keranjang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyerPage
