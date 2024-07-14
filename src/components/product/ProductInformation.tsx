import ValidatedInput from '@/components/utils/ValidatedInput'
import { CreateProductDto } from '@/dtos/ProductDto'
import { UseFormReturn } from 'react-hook-form'

interface ValidatedInputProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hookForm: UseFormReturn<CreateProductDto, any, undefined>
}

export default function ProductInformation({ hookForm }: ValidatedInputProps) {
    const {
        register,
        formState: { errors },
    } = hookForm

    return (
        <div className="w-full bg-white rounded-lg p-8">
            <h1 className="text-black text-xl font-bold mb-4">Informasi Produk</h1>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="productName" className="text-sm">
                        Nama Produk <span className="text-red-500">*</span>
                    </label>
                    <ValidatedInput
                        error={errors.name}
                        name="name"
                        id="productName"
                        placeholder="Nama Produk"
                        register={register}
                        type="text"
                        autoFocus
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="productURL" className="text-sm">
                        URL Halaman Checkout <span className="text-red-500">*</span>
                    </label>
                    <ValidatedInput
                        error={errors.url}
                        name="url"
                        id="productURL"
                        placeholder="URL Halaman Checkout"
                        register={register}
                        type="text"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="productCategory" className="text-sm">
                        Kategori <span className="text-red-500">*</span>
                    </label>
                    <ValidatedInput
                        error={errors.category}
                        name="category"
                        id="productCategory"
                        placeholder="Kategori Produk"
                        register={register}
                        type="text"
                    />
                </div>
            </div>
        </div>
    )
}
