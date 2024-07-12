import { Button } from '@/components/ui/button'
import { BiLink } from 'react-icons/bi'
import ChangeProductPriceModal from './ChangeProductPriceModal'
import ChangeProductStockModal from './ChangeStockModal'
import ProductDevelopmentsModal from './ProductDevelopmentsModal'
export default function CardFooter({ productName }: { productName: string }) {
    return (
        <div className="flex flex-row gap-2">
            <ChangeProductPriceModal productName={productName} />
            <ChangeProductStockModal productName={productName} />
            <Button variant={'outline'} className="text-xs">
                <BiLink className="mr-1" />
                Lihat Halaman
            </Button>
            <ProductDevelopmentsModal productName={productName} />
        </div>
    )
}
