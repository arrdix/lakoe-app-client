import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardImage from "./CardImage";
import CardSide from "./CardSide";
import { ProductType } from "@/dummy/productDummy";

export default function Card({ product }: { product: ProductType }) {
  return (
    <div className="flex flex-row gap-3 rounded-md shadow p-2 w-full">
      <div className="w-32 h-32 overflow-hidden">
        <CardImage image={product.imageUrl} />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <CardHeader text={product.NameProduct} />
        <CardBody price={product.price} stock={20} sku={product.SKU}></CardBody>
        <CardFooter />
      </div>
      <div>
        <CardSide isActive={product.status == "aktif" ? true : false} />
      </div>
    </div>
  );
}
