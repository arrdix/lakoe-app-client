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
            console.log(data)
            // const { name, category, description, minimumOrder, url } = data

            // const product: Product = await API.PRODUCT.CREATE({
            //     name,
            //     url,
            //     category,
            //     description,
            //     attachments: ['example.jpg'],
            //     minimumOrder: +minimumOrder,
            //     isActive: true,
            //     storeId: 1,
            // })

            // console.log(product.id)
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
