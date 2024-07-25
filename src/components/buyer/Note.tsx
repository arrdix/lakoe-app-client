import ValidatedTextarea from '../utils/ValidatedTextarea'
import { CreateOrderDto } from '@/dtos/OrderDto'
import { UseFormReturn } from 'react-hook-form'

interface ValidatedInputProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hookForm: UseFormReturn<CreateOrderDto, any, undefined>
}
export default function Note({ hookForm }: ValidatedInputProps) {
    const {
        register,
        formState: { errors },
    } = hookForm
    return (
        <div className="w-full bg-white rounded-lg p-4 border">
            <h1 className="text-black text-xl font-bold mb-2">
                Catatan <span className="text-slate-500 text-sm font-light">(Opsional)</span>
            </h1>
            <div className="flex flex-col gap-1">
                <ValidatedTextarea
                    error={errors.notes}
                    register={register}
                    name="notes"
                    id="notes"
                    placeholder=""
                />
                <div className="flex justify-end text-gray">
                    <p className="text-xs">0/3000</p>
                </div>
            </div>
        </div>
    )
}
