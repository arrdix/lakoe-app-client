import { Button } from '../ui/button'

interface PreviewCheckoutProps {
    onSubmit: () => void
}

export default function PreviewCheckout({ onSubmit }: PreviewCheckoutProps) {
    return (
        <div className="w-full bg-white rounded-lg p-8 flex items-center flex justify-between mb-8">
            <Button variant="outline">Preview Halaman Checkout</Button>
            <div className="flex gap-2">
                <Button variant="outline" className="px-5">
                    Cancel
                </Button>
                <Button
                    variant="outline"
                    className="bg-cyan text-white px-5 py-0"
                    onClick={onSubmit}
                >
                    Save
                </Button>
            </div>
        </div>
    )
}
