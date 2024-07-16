import { CreateProductDto } from '@/dtos/ProductDto'
import { UseFormReturn } from 'react-hook-form'
import ValidatedTextarea from '@/components/utils/ValidatedTextarea'
import ProductImageInput from '@/components/product/ProductImageInput'

interface DetailProductProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hookForm: UseFormReturn<CreateProductDto, any, undefined>
}

export default function DetailProduct({ hookForm }: DetailProductProps) {
    const {
        register,
        formState: { errors },
    } = hookForm

    return (
        <div className="w-full bg-white rounded-lg p-8">
            <h1 className="text-black text-xl font-bold mb-4">Detail Produk</h1>
            <div className="flex flex-col">
                <div className="flex flex-col gap-1">
                    <label htmlFor="productDescription" className="text-sm">
                        Deskripsi <span className="text-red-500">*</span>
                    </label>
                    <ValidatedTextarea
                        error={errors.description}
                        name="description"
                        id="productDescription"
                        register={register}
                        placeholder="Deskripsi Produk"
                    />
                    <div className="flex justify-end text-gray">
                        <p className="text-xs">0/3000</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="productName" className="text-sm">
                        Foto Produk <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-row gap-2 w-full h-max">
                        <ProductImageInput />
                        <ProductImageInput />
                        <ProductImageInput />
                        <ProductImageInput />
                        <ProductImageInput />
                    </div>
                </div>
            </div>
        </div>
    )
}
