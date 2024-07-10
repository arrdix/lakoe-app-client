import { Button } from "@/components/ui/button";
import { BiLink } from "react-icons/bi";
import ChangeProductPriceModal from "../product/ChangeProductPriceModal";
import ChangeProductStockModal from "../product/ChangeStockPriceModal";
import ProductDevelopmentsModal  from "../product/ProductDevelopmentsModal";
export default function CardFooter() {
  return (
    <div className="flex flex-row gap-2">
      <ChangeProductPriceModal />
      <ChangeProductStockModal />
      <Button variant={"outline"} className="text-xs">
        <BiLink className="mr-1" />
        Lihat Halaman
      </Button>
      <ProductDevelopmentsModal />
    </div>
  );
}
