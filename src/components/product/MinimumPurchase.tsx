import ValidatedInput from '@/components/utils/ValidatedInput'
import { CreateProductDto } from '@/dtos/ProductDto'
import { UseFormReturn } from 'react-hook-form'

interface MinimumPurchaseProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hookForm: UseFormReturn<CreateProductDto, any, undefined>
}

function MinimumPurchase({ hookForm }: MinimumPurchaseProps) {
    const {
        register,
        formState: { errors },
    } = hookForm

    return (
        <div className="w-full bg-white rounded-lg p-4">
            <div className="w-full bg-white rounded-lg p-4">
                <h1 className="text-black text-xl font-bold mb-2 ">Minimum Pembelian</h1>
                <form className="flex flex-col gap-1">
                    <div className="flex">
                        <div className="relative w-full">
                            <ValidatedInput
                                error={errors.productMinimumOrder}
                                register={register}
                                name="productMinimumOrder"
                                id="productMinimumOrder"
                                placeholder="Minimum Pembelian"
                                type="text"
                                rightLabel="Produk"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MinimumPurchase
