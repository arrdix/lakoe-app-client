import DetilPrduct from '@/components/product/ProductDetil'
import PreviewCheckout from '@/components/product/PreviewCheckout'
import Price from '@/components/product/ProductPrice'
import ProductDevelopment from '@/components/product/ProductDevelopment'
import ProductInformation from '@/components/product/ProductInformation'
import VariantProduct from '@/components/product/ProductVariants'
import WeightAndDelivery from '@/components/product/WeightAndDelivery'
import MinimumPurchase from '@/components/product/MinimumPurchase'
import ProductSize from '@/components/product/ProductSize'

function NewProductPage() {
    return (
        <div className="p-8 bg-white">
            {/* informasi produk */}
            <ProductInformation />

            {/* Detail Produk */}
            <DetilPrduct />

            {/* Varian Produk */}
            <VariantProduct />

            {/* Minimal pembelian */}
            <MinimumPurchase />

            {/* Ukuran Produk */}
            <ProductSize />

            {/* Harga */}
            <Price />

            {/* Harga */}
            <Price />

            {/* Pengelolaan produk */}
            <ProductDevelopment />

            {/* Berat dan Pengiriman */}
            <WeightAndDelivery />

            {/* Preview halaman checkout */}
            <PreviewCheckout />
        </div>
    )
}

export default NewProductPage
