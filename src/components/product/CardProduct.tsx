import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardSide from "./CardSide";
import { useEffect, useState } from "react";
import { useProductCheckedContext } from "@/context/checkedProductContext";
import { ProductBySku } from "@/types/ProductBySkuType";

interface CardProductProps {
  product: ProductBySku;
  isCheckedDefault: boolean;
  onCheckedChanges: () => void;
}

export default function CardProduct({
  product,
  isCheckedDefault,
  onCheckedChanges,
}: CardProductProps) {
  const [isChecked, setIsChecked] = useState<boolean>(isCheckedDefault);
  const { setProductSkuChecked, sku } = useProductCheckedContext();

  useEffect(() => {
    onCheckedChanges();
  }, [isChecked]);

  // jika pilih semua
  useEffect(() => {
    setIsChecked(isCheckedDefault);
    let listSkuChecked = sku;

    if (isCheckedDefault === true) {
      const isProductInArray = listSkuChecked.some(
        (sku) => sku == product.variant?.variantOption?.variantOptionValue?.sku
      );
      if (
        !isProductInArray &&
        product.variant?.variantOption?.variantOptionValue?.sku
      ) {
        listSkuChecked.push(
          product.variant?.variantOption?.variantOptionValue?.sku
        );
      }
    } else {
      listSkuChecked = [];
    }

    setProductSkuChecked(listSkuChecked);
  }, [isCheckedDefault]);

  useEffect(() => {
    setIsChecked(isCheckedDefault);
  }, []);

  function onCheckedChange() {
    setIsChecked(!isChecked);
    const listSkuChecked = sku;

    if (isChecked && product.variant?.variantOption?.variantOptionValue?.sku) {
      const index = listSkuChecked.indexOf(
        product.variant?.variantOption?.variantOptionValue?.sku
      );
      if (index !== -1) {
        listSkuChecked.splice(index, 1);
      }
    } else {
      const isProductInArray = listSkuChecked.some(
        (sku) => sku == product.variant?.variantOption?.variantOptionValue?.sku
      );
      if (
        !isProductInArray &&
        product.variant?.variantOption?.variantOptionValue?.sku
      ) {
        listSkuChecked.push(
          product.variant?.variantOption?.variantOptionValue?.sku
        );
      }
    }

    setProductSkuChecked(listSkuChecked);
  }

  return (
    <div className="flex flex-row gap-6 rounded-md shadow p-3 w-full">
      <div
        className="w-32 h-24 bg-cover"
        style={{ backgroundImage: `url(${product.attachments[0]})` }}
      />
      <div className="flex flex-col gap-1 w-full">
        <CardHeader text={product.name} />
        <CardBody
          price={
            product.variant?.variantOption?.variantOptionValue?.price || 0
          }
          stock={
            product.variant?.variantOption?.variantOptionValue?.stock || 0
          }
          sku={product.variant?.variantOption?.variantOptionValue?.sku || ""}
        ></CardBody>
        <CardFooter
          productSku={
            product.variant?.variantOption?.variantOptionValue?.sku || ""
          }
        />
      </div>
      <div>
        <CardSide
          productName={product.name}
          productSku={
            product.variant?.variantOption?.variantOptionValue?.sku || ""
          }
          isActive={
            product.variant?.variantOption?.variantOptionValue?.isActive ||
            false
          }
          isChecked={isChecked}
          onCheckedChange={onCheckedChange}
        />
      </div>
    </div>
  );
}
