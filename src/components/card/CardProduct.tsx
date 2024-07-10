import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardSide from "./CardSide";
import { ProductType } from "@/dummy/productDummy";
import { useEffect, useState } from "react";
import { useProductCheckedContext } from "@/context/checkedProductContext";

export default function Card({ product }: { product: ProductType }) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { id, setProductIdChecked } = useProductCheckedContext();
  console.log(isChecked);
  console.log(id);

  useEffect(() => {
    const listIdChecked = id;
    if (isChecked) {
      listIdChecked.push(product.id);
      setProductIdChecked(listIdChecked);
    }
  });
  return (
    <div className="flex flex-row gap-6 rounded-md shadow p-3 w-full">
      <img className="w-32 h-24" src={product.imageUrl} alt="" />
      <div className="flex flex-col gap-1 w-full">
        <CardHeader text={product.NameProduct} />
        <CardBody price={product.price} stock={20} sku={product.SKU}></CardBody>
        <CardFooter />
      </div>
      <div>
        <CardSide
          isActive={product.status}
          isChecked={isChecked}
          onCheckedChange={() => {
            setIsChecked(!isChecked);
          }}
        />
      </div>
    </div>
  );
}
