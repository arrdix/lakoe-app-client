import { CreateProductDto } from '@/dtos/ProductDto'
import { BiImageAdd } from 'react-icons/bi'
import { UseFormReturn } from 'react-hook-form'
import ValidatedTextarea from '@/components/utils/ValidatedTextarea'

interface DetilPrductProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hookForm: UseFormReturn<CreateProductDto, any, undefined>
}

export default function DetilPrduct({ hookForm }: DetilPrductProps) {
    const {
        register,
        formState: { errors },
    } = hookForm

    return (
        <div className="w-full bg-white rounded-lg p-8">
            <h1 className="text-black text-xl font-bold mb-4">Detail Produk</h1>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <label htmlFor="productName" className="text-sm">
                        Deskripsi <span className="text-red-500">*</span>
                    </label>
                    <ValidatedTextarea
                        error={errors.productDescription}
                        name="productDescription"
                        register={register}
                        placeholder="Deskripsi Product"
                    />
                    <div className="flex justify-end text-gray">
                        <p className="text-xs">0/3000</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="productName" className="text-sm">
                        URL Halaman Checkout <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-row gap-2 h-24">
                        <div className="w-full h-full flex flex-col border-dashed border border-gray rounded items-center justify-center">
                            <BiImageAdd className="size-10 fill-gray" />
                            <span className="text-gray">Foto Utama</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}