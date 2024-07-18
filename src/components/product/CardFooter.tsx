import { Button } from '@/components/ui/button'
import { BiLink } from 'react-icons/bi'
import ChangeProductPriceModal from './ChangeProductPriceModal'
import ChangeProductStockModal from './ChangeStockModal'
import ProductDevelopmentsModal from './ProductDevelopmentsModal'

interface CardFooterProps {
    productName: string;
    productSku: string;
  }
export default function CardFooter({ productName,productSku }: CardFooterProps) {
    return (
        <div className="flex flex-row gap-2">
            <ChangeProductPriceModal productName={productName} productSku={productSku} />
            <ChangeProductStockModal productName={productName} productSku={productSku}  />
            <Button variant={'outline'} className="text-xs">
                <BiLink className="mr-1" />
                Lihat Halaman
            </Button>
            <ProductDevelopmentsModal productName={productName} productSku={productSku} />
        </div>
    )
}
