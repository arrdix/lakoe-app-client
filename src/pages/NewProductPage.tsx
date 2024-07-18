import DetailProduct from '@/components/product/ProductDetail'
import PreviewCheckout from '@/components/product/PreviewCheckout'
import ProductInformation from '@/components/product/ProductInformation'
import VariantProduct from '@/components/product/ProductVariants'
import MinimumPurchase from '@/components/product/MinimumPurchase'
import { useForm } from 'react-hook-form'
import { CreateProductDto } from '@/dtos/ProductDto'
import { Product } from '@/types/ProductType'
import API from '@/networks/api'

import Price from '@/components/product/ProductPrice'
import ProductDevelopment from '@/components/product/ProductDevelopment'
import WeightAndDelivery from '@/components/product/WeightAndDelivery'
import ProductSize from '@/components/product/ProductSize'

function NewProductPage() {
    const hookForm = useForm<CreateProductDto>()
    const { handleSubmit } = hookForm

    function onSubmitNewProduct() {
        handleSubmit(async (data) => {
            const submitedProduct = {
                name: data.name,
                description: data.description,
                attachments: ['example.jpg'],
                minimumOrder: +data.minimumOrder,
                storeId: 1, // TODO: use real store id
                categoryId: data.categoryId,
                url: data.url,
                variant: {
                    name: data.variant && data.variant.name,
                    variantOptions:
                        data.variant &&
                        data.variant.variantOptions &&
                        data.variant.variantOptions.map((option) => ({
                            name: option.name,
                            variantOptionValue: {
                                sku: option.variantOptionValue && option.variantOptionValue.sku,
                                weight:
                                    option.variantOptionValue &&
                                    option.variantOptionValue.weight &&
                                    +option.variantOptionValue.weight,
                                stock:
                                    option.variantOptionValue &&
                                    option.variantOptionValue.stock &&
                                    +option.variantOptionValue.stock,
                                price:
                                    option.variantOptionValue &&
                                    option.variantOptionValue.price &&
                                    +option.variantOptionValue.price,
                                isActive:
                                    option.variantOptionValue && option.variantOptionValue.isActive,
                            },
                        })),
                },
            }
            console.log(submitedProduct)

            const product = await API.PRODUCT.CREATE(submitedProduct)
            console.log(product)
        })()
    }

    return (
        <div className="flex flex-col gap-4 bg-transparent">
            {/* informasi produk */}
            <ProductInformation hookForm={hookForm} />

            {/* Detail Produk */}
            <DetailProduct hookForm={hookForm} />

            {/* Varian Produk */}
            <VariantProduct hookForm={hookForm} />

            {/* Minimal pembelian */}
            <MinimumPurchase hookForm={hookForm} />

            {/* Skip */}
            {/* Ukuran Produk */}
            {/* <ProductSize /> */}

            {/* Skip */}
            {/* Harga */}
            {/* <Price /> */}

            {/* Skip */}
            {/* Pengelolaan produk */}
            {/* <ProductDevelopment /> */}

            {/* Skip */}
            {/* Berat dan Pengiriman */}
            {/* <WeightAndDelivery /> */}

            {/* Preview halaman checkout */}
            <PreviewCheckout onSubmit={onSubmitNewProduct} />
        </div>
    )
}

export default NewProductPage
