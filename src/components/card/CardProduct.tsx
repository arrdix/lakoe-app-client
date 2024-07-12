import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardSide from "./CardSide";
import { ProductType } from "@/dummy/productDummy";
import { useEffect, useState } from "react";
import { useProductCheckedContext } from "@/context/checkedProductContext";

export default function Card({
  product,
  isCheckedDefault,
  onCheckedChanges,
}: {
  product: ProductType;
  isCheckedDefault: boolean;
  onCheckedChanges: () => void;
}) {
  const [isChecked, setIsChecked] = useState<boolean>(isCheckedDefault);
  const { id, setProductIdChecked } = useProductCheckedContext();

  useEffect(() => {
    onCheckedChanges();
  }, [isChecked]);

  useEffect(() => {
    setIsChecked(isCheckedDefault);
    let listIdChecked = id;

    if (isCheckedDefault === true) {
      if (isChecked) {
        const index = listIdChecked.indexOf(product.id);
        if (index !== -1) {
          listIdChecked.splice(index, 1);
        }
      } else {
        const isProductInArray = listIdChecked.some((id) => id == product.id);
        console.log(`is produk in array`, isProductInArray);
        if (!isProductInArray) {
          listIdChecked.push(product.id);
        }
      }
    } else {
      listIdChecked = []
    }

    setProductIdChecked(listIdChecked);
  }, [isCheckedDefault]);

  useEffect(() => {
    setIsChecked(isCheckedDefault);
  }, []);

  function onCheckedChange() {
    setIsChecked(!isChecked);
    const listIdChecked = id;

    if (isChecked) {
      const index = listIdChecked.indexOf(product.id);
      if (index !== -1) {
        listIdChecked.splice(index, 1);
      }
    } else {
      const isProductInArray = listIdChecked.some((id) => id == product.id);
      console.log(`is produk in array`, isProductInArray);
      if (!isProductInArray) {
        listIdChecked.push(product.id);
      }
    }
    console.log(product.id);
    setProductIdChecked(listIdChecked);
  }

  return (
    <div className="flex flex-row gap-6 rounded-md shadow p-3 w-full">
      <img className="w-32 h-24" src={product.imageUrl} alt="" />
      <div className="flex flex-col gap-1 w-full">
        <CardHeader text={product.NameProduct} />
        <CardBody price={product.price} stock={20} sku={product.SKU}></CardBody>
        <CardFooter productName={product.NameProduct} />
      </div>
      <div>
        <CardSide
          productName={product.NameProduct}
          isActive={product.status}
          isChecked={isChecked}
          onCheckedChange={onCheckedChange}
        />
      </div>
    </div>
  );
}
