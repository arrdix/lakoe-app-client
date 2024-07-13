import { CreateProductDto } from '@/dtos/ProductDto'
import { Button } from '../ui/button'
import { UseFormHandleSubmit } from 'react-hook-form'

interface PreviewCheckoutProps {
    handleSubmit: UseFormHandleSubmit<CreateProductDto, undefined>
}

export default function PreviewCheckout({ handleSubmit }: PreviewCheckoutProps) {
    return (
        <div className="w-full bg-white rounded-lg p-8 flex items-center flex justify-between">
            <Button variant="outline">Preview Halaman Checkout</Button>
            <div className="flex gap-2">
                <Button variant="outline" className="px-5">
                    Cancel
                </Button>
                <Button
                    variant="outline"
                    className="bg-cyan text-white px-5 py-0"
                    onClick={handleSubmit((data) => {
                        console.log(data)
                    })}
                >
                    Save
                </Button>
            </div>
        </div>
    )
}
