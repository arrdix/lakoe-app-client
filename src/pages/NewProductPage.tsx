import DetailProduct from '@/components/product/ProductDetail'
import PreviewCheckout from '@/components/product/PreviewCheckout'
import ProductInformation from '@/components/product/ProductInformation'
import VariantProduct from '@/components/product/ProductVariants'
import MinimumPurchase from '@/components/product/MinimumPurchase'
import { useForm } from 'react-hook-form'
import { CreateProductDto } from '@/dtos/ProductDto'
import API from '@/networks/api'
import { useToast } from '@/components/ui/use-toast'
import Spinner from '@/components/utils/Spinner'
import { useNavigate } from 'react-router-dom'

function NewProductPage() {
    const navigate = useNavigate()
    const { toast } = useToast()
    const hookForm = useForm<CreateProductDto>()
    const { handleSubmit } = hookForm

    function onSubmitNewProduct() {
        handleSubmit(async (data) => {
            console.log(data)
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
            formData.append('categoryName', data.categoryName)
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
                const x = await API.PRODUCT.CREATE(formData)
                console.log(x)
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
