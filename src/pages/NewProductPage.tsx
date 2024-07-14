import DetailProduct from '@/components/product/ProductDetail'
import PreviewCheckout from '@/components/product/PreviewCheckout'
import ProductInformation from '@/components/product/ProductInformation'
import VariantProduct from '@/components/product/ProductVariants'
import MinimumPurchase from '@/components/product/MinimumPurchase'
import { useForm } from 'react-hook-form'
import { CreateProductDto } from '@/dtos/ProductDto'

import Price from '@/components/product/ProductPrice'
import ProductDevelopment from '@/components/product/ProductDevelopment'
import WeightAndDelivery from '@/components/product/WeightAndDelivery'
import ProductSize from '@/components/product/ProductSize'
import API from '@/networks/api'
import { Product } from '@/types/ProductType'

function NewProductPage() {
    const hookForm = useForm<CreateProductDto>()
    const { handleSubmit } = hookForm

    function onSubmitNewProduct() {
        handleSubmit(async (data) => {
            console.log(data)

            // const { name, attachments, category, description, minimumOrder, url } = data

            // const product: Product = await API.PRODUCT.CREATE({
            //     name,
            //     description,
            //     minimumOrder: +minimumOrder,
            //     isActive: true,
            //     attachments: ['example.jpg'],
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
