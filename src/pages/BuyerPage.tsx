import { TiMinus } from 'react-icons/ti';
import { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import API from '@/networks/api';
import { Product } from '@/types/ProductType';
import { useNavigate } from 'react-router-dom';

function BuyerPage() {
    const [count, setCount] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [product, setProduct] = useState<Product | null>(null); // Inisialisasi dengan null
    const [error, setError] = useState<string | null>(null); // Inisialisasi state error

    const navigate = useNavigate();

    // Mengambil data produk dari backend saat komponen dimuat
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await API.PRODUCT.GET_ONE("PUTIH00002"); // Ubah ID produk sesuai kebutuhan
                if (response) {
                    setProduct(response); // Mengatur produk ke state
                    setCurrentIndex(0); // Set indeks saat ini kembali ke 0 karena kita hanya mengambil satu produk
                } else {
                    setProduct(null); // Atur produk menjadi null jika tidak ada produk yang ditemukan
                }
            } catch (error) {
                console.error('Error mengambil produk:', error);
            }
        };

        fetchProduct();
    }, []);

    const handlePlusCount = () => {
        if (count < (product?.variant?.variantOption?.variantOptionValue?.stock ?? 0)) setCount(count + 1);
    };

    const handleMinusCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const triggerSelectRight = () => {
        if (currentIndex < (product?.attachments.length ?? 0) - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const triggerSelectLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // const datanya = {
    //     orderedProduct: product,
    //     qty: 
    // }



    const handleBuyNow = () => {
        if (count < (product?.minimumOrder ?? 1)) {
            setError(`Minimal pembelian adalah ${product?.minimumOrder}`);
        } else {
            setError(null);
            navigate('/checkout', { state: { product, count } });
        }
    };

    console.log(product)



    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center p-6 w-full h-full">
            <div className="flex px-14 gap-6 w-11/12 px-8 py-12 bg-white">
                <div className="flex flex-col w-full justify-center items-center">
                    <div className="flex gap-4 items-center">
                        <button className='border rounded-full border-blue-500'>
                            <IoIosArrowBack onClick={triggerSelectLeft} className='size-5' aria-disabled={currentIndex === 0} />
                        </button>
                        <div className="w-96 h-96">
                            <img
                                src={product.attachments[currentIndex]}
                                alt={`Product image ${currentIndex + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <button className='border rounded-full border-blue-500'>
                            <IoIosArrowForward onClick={triggerSelectRight} className='size-5' aria-disabled={currentIndex === product.attachments.length - 1} />
                        </button>
                    </div>

                    <div className="flex gap-2 mt-9">
                        {product.attachments.map((attachment, index) => (
                            <img
                                key={index}
                                src={attachment}
                                alt=""
                                className={`w-20 h-20 object-cover cursor-pointer ${currentIndex === index ? 'border-2 border-blue-500' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col mt-6 md:mt-0">
                    {/* Menampilkan informasi produk */}
                    <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
                    <p className="text-xl font-semibold text-gray-700 mb-4">Rp {product.variant?.variantOption?.variantOptionValue?.price}</p>
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
                        <span className="ml-4">Stok {product.variant?.variantOption?.variantOptionValue?.stock}</span>
                    </div>
                    {error && <div className="text-red-500">{error}</div>}

                    <div className="mt-4 border p-2 overflow-auto" style={{ width: '280px', height: '280px' }}>
                        <div className="text-xl font-bold w-auto h-auto">Description</div>
                        <p className="text-sm mt-3 text-gray-800">
                            {product.description}
                        </p>
                    </div>




                    <div className='mt-2 '>
                        <div className='text-xl font-bold w-auto h-auto'>Varians</div>
                        <div className='border p-2'>
                            <p>{product.variant?.variantOption?.name}</p>
                        </div>
                    </div>
                    <div className="flex w-80 gap-5 mt-4 mb-auto">
                        <button className="bg-white text-black w-32 h-10 rounded border" onClick={handleBuyNow}>
                            Beli Langsung
                        </button>
                        <button className="bg-blue-500 text-white w-32 h-10 rounded">
                            + Keranjang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuyerPage;
