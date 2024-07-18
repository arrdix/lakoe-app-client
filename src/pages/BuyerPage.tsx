import { TiMinus } from 'react-icons/ti';
import { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import API from '@/networks/api';
import { Product } from '@/types/ProductType';
import { VariantOption } from '@/types/VariantOptionType';
import { useNavigate } from 'react-router-dom';

function BuyerPage() {
    const [count, setCount] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedVariant, setSelectedVariant] = useState<VariantOption | null>(null);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await API.PRODUCT.GET_ONE_BY_ID(1); // Ganti ID produk sesuai kebutuhan
                if (response) {
                    setProduct(response);
                    setSelectedVariant(response.variant?.variantOptions?.[0] ?? null);
                    setCurrentIndex(0);
                } else {
                    setProduct(null);
                }
            } catch (error) {
                console.error('Error mengambil produk:', error);
            }
        };

        fetchProduct();
    }, []);

    const handlePlusCount = () => {
        if (count < (selectedVariant?.variantOptionValue?.stock ?? 0))
            setCount(count + 1);
    };

    const handleMinusCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const triggerSelectRight = () => {
        if (currentIndex < (product?.attachments.length ?? 0) - 1) {
            setCurrentIndex(currentIndex + 1);
            updateVariant(currentIndex + 1);
        }
    };

    const triggerSelectLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            updateVariant(currentIndex - 1);
        }
    };

    const updateVariant = (index: number) => {
        if (product && product.variant && product.variant.variantOptions) {
            const variant = product.variant.variantOptions[index];
            if (variant) {
                setSelectedVariant(variant);
                setCount(0);
            }
        }
    };

    const handleVariantChange = (variant: VariantOption) => {
        setSelectedVariant(variant);
        setCount(0); // Reset jumlah ketika varian berubah
        setCurrentIndex(product?.variant?.variantOptions?.indexOf(variant) ?? 0);
    };

    const handleBuyNow = () => {
        if (!selectedVariant) {
            setError('Pilih varian produk terlebih dahulu');
            return;
        }

        if (count < (product?.minimumOrder ?? 1)) {
            setError(`Minimal pembelian adalah ${product?.minimumOrder}`);
        } else {
            setError(null);
            navigate('/checkout', {
                state: {
                    product: {
                        sku: selectedVariant.variantOptionValue?.sku,
                        qty: count,
                        
                    }
                }
            });
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="flex px-14 w-11/12 px-8 py-12 bg-white">
                    <div className="flex flex-col w-full justify-center items-center">
                        <div className="flex gap-4 items-center">
                            <button className="border rounded-full border-blue-500">
                                <IoIosArrowBack
                                    onClick={triggerSelectLeft}
                                    className="size-5"
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
                            <button className="border rounded-full border-blue-500">
                                <IoIosArrowForward
                                    onClick={triggerSelectRight}
                                    className="size-5"
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
                                    className={`w-20 h-20 object-cover cursor-pointer ${currentIndex === index ? 'border-2 border-blue-500' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col mt-6 md:mt-0">
                        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
                        {selectedVariant && (
                            <>
                                <p className="text-xl font-semibold text-gray-700 mb-4">
                                    Rp {selectedVariant?.variantOptionValue?.price}
                                </p>
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
                                    <span className="ml-4">
                                        Stok {selectedVariant?.variantOptionValue?.stock}
                                    </span>
                                </div>
                            </>
                        )}
                        {error && <div className="text-red-500">{error}</div>}

                        <div className="mt-2">
                            <div className="text-xl font-bold w-auto h-auto">Variants</div>
                            <div className="mt-4">
                                {product.variant?.variantOptions?.map((variantOption, index) => (
                                    <div style={{ display: 'inline-block' }}
                                        key={index}
                                        onClick={() => handleVariantChange(variantOption)}
                                        className={`cursor-pointer border px-2 py-1 rounded mr-2 mb-2 ${selectedVariant?.id === variantOption.id ? 'bg-gray-200' : ''}`}
                                    >
                                        <p>{variantOption.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex w-80 gap-5 mt-4 mb-auto">
                            <button
                                className="bg-white text-black w-32 h-10 rounded border"
                                onClick={handleBuyNow}
                            >
                                Beli Langsung
                            </button>
                            <button className="bg-blue-500 text-white w-32 h-10 rounded">
                                + Keranjang
                            </button>
                        </div>

                        <div className="text-xl font-bold w-auto h-auto mt-4">Description</div>
                        <div className="mt-4 overflow-auto w-3/4 h-3/4 mb-8">
                            <p className="text-sm mt-3 text-gray-800">{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuyerPage;
