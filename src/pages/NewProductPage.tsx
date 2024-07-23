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
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import Spinner from '@/components/utils/Spinner'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const ProductSchema = z.object({
    name: z
        .string()
        .min(4, { message: "Nama produk harus minimal 4 karakter" })
        .max(100, { message: "Nama produk maksimal 100 karakter" }),

    url: z
        .string()
        .url({ message: "URL harus valid" }),

    categoryId: z
        .string()
        .min(1, { message: "Kategori harus dipilih" }),

    description: z
        .string()
        .min(4, { message: "Deskripsi harus minimal 4 karakter" })
        .max(3000, { message: "Deskripsi maksimal 3000 karakter" }),

    attachment: z
        .string()
        .min(1, { message: "Foto produk harus ada setidaknya 1 file" })
        .max(5, { message: "Foto produk maksimal 5 file" }),

    variantOptionName: z
        .string()
        .min(1, { message: "Opsi varian harus minimal 1 karakter" })
        .max(100, { message: "Opsi varian maksimal 100 karakter" }),

    minimumOrder: z
        .string()
        .min(1, { message: "Jumlah minimal pembelian adalah 1" })
        .max(100, { message: "Jumlah maksimal pembelian adalah 100" }),
});

function NewProductPage() {
    const navigate = useNavigate()
    const { toast } = useToast()
    const hookForm = useForm<CreateProductDto>({
        resolver: zodResolver(ProductSchema)
    })
    const { handleSubmit } = hookForm

    function onSubmitNewProduct() {
        handleSubmit(async (data) => {
            toast({
                title: 'Membuat Produk!',
                description: 'Kami sedang membuat produk kamu.',
                action: <Spinner size={6} />,
            })

            const formData = new FormData()
            for (let i = 0; i < data.attachments.length; i++) {
                formData.append('attachments', data.attachments[i])
            }

            formData.append('name', data.name)
            formData.append('description', data.description)
            formData.append('minimumOrder', data.minimumOrder)
            formData.append('storeId', data.storeId)
            formData.append('categoryId', data.categoryId)
            formData.append('url', data.url)

            if (data.variant) {
                formData.append('variant[name]', data.variant.name)
                if (data.variant.variantOptions) {
                    data.variant.variantOptions.forEach((option, index) => {
                        formData.append(`variant[variantOptions][${index}][name]`, option.name)
                        if (option.variantOptionValue) {
                            formData.append(
                                `variant[variantOptions][${index}][variantOptionValue][sku]`,
                                option.variantOptionValue.sku
                            )
                            formData.append(
                                `variant[variantOptions][${index}][variantOptionValue][weight]`,
                                option.variantOptionValue.weight
                            )
                            formData.append(
                                `variant[variantOptions][${index}][variantOptionValue][stock]`,
                                option.variantOptionValue.stock
                            )
                            formData.append(
                                `variant[variantOptions][${index}][variantOptionValue][price]`,
                                option.variantOptionValue.price
                            )
                            formData.append(
                                `variant[variantOptions][${index}][variantOptionValue][isActive]`,
                                'true'
                            )
                        }
                    })
                }
            }

            try {
                await API.PRODUCT.CREATE(formData)
                navigate('/product')

                toast({
                    title: 'Produk Berhasil Dibuat!',
                    description: 'Kami berhasil membuat produk kamu.',
                    variant: 'success',
                })
            } catch (err) {
                toast({
                    title: 'Gagal Membuat Produk',
                    description: 'Terjadi kesalahan saat membuat produk kamu.',
                    variant: 'failed',
                })
            }
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
