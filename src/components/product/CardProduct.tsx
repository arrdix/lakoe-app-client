import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardSide from "./CardSide";
import { ProductType } from "@/dummy/productDummy";
import { useEffect, useState } from "react";
import { useProductCheckedContext } from "@/context/checkedProductContext";
import { Product } from "@/types/ProductType";
import { Variant } from "@/types/VariantType";
import { VariantOption } from "@/types/VariantOptionType";
import { VariantOptionValue } from "@/types/VariantOptionValueType";

interface CardProductProps {
  realProduct: Product;
  product?: ProductType | Product;
  isCheckedDefault: boolean;
  onCheckedChanges: () => void;
}

export default function CardProduct({
  realProduct,
  isCheckedDefault,
  onCheckedChanges,
}: CardProductProps) {
  const [isChecked, setIsChecked] = useState<boolean>(isCheckedDefault);
  const {setProductSkuChecked, sku} = useProductCheckedContext();

  // useEffect(() => {
  //     onCheckedChanges()
  // }, [isChecked])

  // useEffect(() => {
  //     setIsChecked(isCheckedDefault)
  //     let listIdChecked = id

  //     if (isCheckedDefault === true) {
  //         if (isChecked) {
  //             const index = listIdChecked.indexOf(product.id)
  //             if (index !== -1) {
  //                 listIdChecked.splice(index, 1)
  //             }
  //         } else {
  //             const isProductInArray = listIdChecked.some((id) => id == product.id)
  //             if (!isProductInArray) {
  //                 listIdChecked.push(product.id)
  //             }
  //         }
  //     } else {
  //         listIdChecked = []
  //     }

  //     setProductIdChecked(listIdChecked)
  // }, [isCheckedDefault])

  // useEffect(() => {
  //     setIsChecked(isCheckedDefault)
  // }, [])

  // function onCheckedChange() {
  //     setIsChecked(!isChecked)
  //     const listIdChecked = id

  //     if (isChecked) {
  //         const index = listIdChecked.indexOf(product.id)
  //         if (index !== -1) {
  //             listIdChecked.splice(index, 1)
  //         }
  //     } else {
  //         const isProductInArray = listIdChecked.some((id) => id == product.id)
  //         if (!isProductInArray) {
  //             listIdChecked.push(product.id)
  //         }
  //     }

  //     setProductIdChecked(listIdChecked)
  // }

  const [variant, setVariant] = useState<Variant | null>(null);
  const [variantOption, setVariantOption] = useState<VariantOption | null>(
    null
  );
  const [variantOptionValue, setVariantOptionValue] =
    useState<VariantOptionValue | null>(null);

  useEffect(() => {
    setVariant((realProduct.variant && realProduct.variant) || null);
    setVariantOption(
      (realProduct.variant && realProduct.variant.variantOption) || null
    );
    setVariantOptionValue(
      (realProduct.variant &&
        realProduct.variant.variantOption &&
        realProduct.variant.variantOption.variantOptionValue) ||
        null
    );
  }, []);

  useEffect(() => {
    onCheckedChanges();
  }, [isChecked]);

  // jika pilih semua
  useEffect(() => {
    setIsChecked(isCheckedDefault);
    let listSkuChecked = sku;

    if (isCheckedDefault === true) {
      const isProductInArray = listSkuChecked.some((sku) => sku ==variantOptionValue?.sku );
      if (!isProductInArray && variantOptionValue?.sku ) {
        listSkuChecked.push(variantOptionValue?.sku);
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

    if (isChecked && variantOptionValue?.sku ) {
      const index = listSkuChecked.indexOf(variantOptionValue?.sku);
      if (index !== -1) {
        listSkuChecked.splice(index, 1);
      }
    } else {
      const isProductInArray = listSkuChecked.some((sku) => sku == variantOptionValue?.sku);
      if (!isProductInArray && variantOptionValue?.sku) {
        listSkuChecked.push(variantOptionValue?.sku);
      }
    }

    setProductSkuChecked(listSkuChecked);
  }

  // console.log('PRODUCT:', realProduct)
  // console.log('VARIANT:', variant)
  // console.log('VARIANT OPTION', variantOption)
  // console.log('VARIANT OPTION VALUE', variantOptionValue)\

  return (
    <div className="flex flex-row gap-6 rounded-md shadow p-3 w-full">
      <div
        className="w-32 h-24 bg-cover"
        style={{ backgroundImage: `url(${realProduct.attachments[0]})` }}
      />
      <div className="flex flex-col gap-1 w-full">
        <CardHeader text={realProduct.name} />
        <CardBody
          price={variantOptionValue?.price || 0}
          stock={variantOptionValue?.stock||0}
          sku={variantOptionValue?.sku || ""}
        ></CardBody>
        <CardFooter productName={realProduct.name} productSku={realProduct.variant?.variantOption?.variantOptionValue?.sku||""} />
      </div>
      <div>
        <CardSide
          productName={realProduct.name}
          isActive={realProduct.variant?.variantOption?.variantOptionValue?.isActive||false}
          isChecked={isChecked}
          onCheckedChange={onCheckedChange}
        />
      </div>
    </div>
  );
}
