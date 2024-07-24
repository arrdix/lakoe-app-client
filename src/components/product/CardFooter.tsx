import ChangeProductPriceModal from "./ChangeProductPriceModal";
import ChangeProductStockModal from "./ChangeStockModal";
import DeleteProductModal from "./DeleteProductModal";

interface CardFooterProps {
  productSku: string;
}
export default function CardFooter({
  productSku,
}: CardFooterProps) {
  return (
    <div className="flex flex-row gap-2">
      <ChangeProductPriceModal
        productSku={productSku}
      />
      <ChangeProductStockModal
        productSku={productSku}
      />
      <DeleteProductModal productSku={productSku} />
    </div>
  );
}
