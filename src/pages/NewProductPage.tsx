import DetilPrduct from '@/components/product/ProductDetil'
import PreviewCheckout from '@/components/product/PreviewCheckout'
import Price from '@/components/product/ProductPrice'
import ProductDevelopment from '@/components/product/ProductDevelopment'
import ProductInformation from '@/components/product/ProductInformation'
import VariantProduct from '@/components/product/ProductVariants'
import WeightAndDelivery from '@/components/product/WeightAndDelivery'
import MinimumPurchase from '@/components/product/MinimumPurchase'
import ProductSize from '@/components/product/ProductSize'
import { useForm } from 'react-hook-form'
import { CreateProductDto } from '@/dtos/ProductDto'

function NewProductPage() {
    const hookForm = useForm<CreateProductDto>()
    const {
        handleSubmit,
        formState: { errors },
    } = hookForm

    return (
        <div className="flex flex-col gap-4 bg-transparent">
            {/* informasi produk */}
            <ProductInformation hookForm={hookForm} />

            {/* Detail Produk */}
            <DetilPrduct hookForm={hookForm} />

            {/* Varian Produk */}
            <VariantProduct hookForm={hookForm} />

            {/* Minimal pembelian */}
            <MinimumPurchase />

            {/* Ukuran Produk */}
            <ProductSize />

            {/* Harga */}
            <Price />

            {/* Pengelolaan produk */}
            <ProductDevelopment />

            {/* Berat dan Pengiriman */}
            <WeightAndDelivery />

            {/* Preview halaman checkout */}
            <PreviewCheckout handleSubmit={handleSubmit} />
        </div>
    )
}

export default NewProductPage
