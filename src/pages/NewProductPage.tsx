import DetilPrduct from "@/components/product/ProductDetil";
import PreviewCheckout from "@/components/product/PreviewCheckout";
import Price from "@/components/product/ProductPrice";
import ProductDevelopment from "@/components/product/ProductDevelopment";
import ProductInformation from "@/components/product/ProductInformation";
import VariantProduct from "@/components/product/ProductVariants";
import WeightAndDelivery from "@/components/product/WeightAndDelivery";

function NewProductPage() {
    return (
        <div className="w-full h-full bg-lightGray p-2 flex flex-col gap-2 overflow-y-scroll">
            {/* informasi produk */}
            <ProductInformation />

            {/* Detail Produk */}
            <DetilPrduct />

            {/* Varian Produk */}
            <VariantProduct />

            {/* Harga */}
            <Price />

            {/* Pengelolaan produk */}
            <ProductDevelopment />

            {/* Berat dan Pengiriman */}
            <WeightAndDelivery />

            {/* Preview halaman checkout */}
            <PreviewCheckout />

        </div>
    );
}

export default NewProductPage;
