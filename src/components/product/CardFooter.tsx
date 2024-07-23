import ChangeProductPriceModal from "./ChangeProductPriceModal";
import ChangeProductStockModal from "./ChangeStockModal";
import DeleteProductModal from "./DeleteProductModal";

interface CardFooterProps {
  productName: string;
  productSku: string;
}
export default function CardFooter({
  productName,
  productSku,
}: CardFooterProps) {
  return (
    <div className="flex flex-row gap-2">
      <ChangeProductPriceModal
        productName={productName}
        productSku={productSku}
      />
      <ChangeProductStockModal
        productName={productName}
        productSku={productSku}
      />
      <DeleteProductModal productSku={productSku} />
    </div>
  );
}
