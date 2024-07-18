import CardProduct from "./CardProduct";
import ProductFilter from "./ProductFilter";
import NonaktifProductsModal from "./NonaktifProductsModal";
import DeleteProductsModal from "./DeleteProductsModal";
import { Checkbox } from "@/components/ui/checkbox";
import NoResultProduct from "./NoResultProduct";
import { ProductType } from "@/dummy/productDummy";
import { useProductCheckedContext } from "@/context/checkedProductContext";
import { useEffect, useState } from "react";
import { Product } from "@/types/ProductType";

interface ProductListProps {
  realProducts?: Product[];
  products: ProductType[];
  tabOptions: string;
}

export default function ProductList({
  realProducts,
  tabOptions,
}: ProductListProps) {
  const { sku } = useProductCheckedContext();
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [isCheckedChange, setIsCheckedChange] = useState(false);

  const onCheckedChange = () => {
    setIsCheckedChange(!isCheckedChange);
  };

  // real product edit
  useEffect(() => {
    if (sku.length < 1) {
      setIsAllChecked(false);
    }
  }, [sku]);

  console.log("id",sku)
  return (
    <div>
      {realProducts?.length === 0 ? (
        <div>
          <NoResultProduct tabOptions={tabOptions} />
        </div>
      ) : (
        <div>
          <ProductFilter />
          <div className="w-full bg-white rounded-lg flex justify-between">
            <h3 className="font-semibold">{realProducts?.length} produk</h3>
            <div className="flex items-center gap-4 mb-4">
              {sku.length > 0 && (
                <div className="flex gap-2 items-center">
                  <NonaktifProductsModal />
                  <DeleteProductsModal />
                </div>
              )}
              <div className="flex gap-4 items-center pr-7">
                <label
                  htmlFor="default-checkbox"
                  className="text-sm font-thin text-gray-600"
                >
                  {!isAllChecked ? "Pilih Semua" : "Batalkan Semua"}
                </label>
                <div className="pt-1">
                  <Checkbox
                    checked={isAllChecked}
                    onCheckedChange={() => {
                      setIsAllChecked(!isAllChecked);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {/* {products.map((product) => (
                            <CardProduct
                                key={product.id}
                                product={product}
                                isCheckedDefault={isAllChecked}
                                onCheckedChanges={onCheckedChange}
                            />
                        ))} */}
            {realProducts &&
              realProducts.map((realProduct) => (
                <CardProduct
                  key={realProduct.variant?.variantOption?.variantOptionValue?.sku}
                  realProduct={realProduct}
                  isCheckedDefault={isAllChecked}
                  onCheckedChanges={onCheckedChange}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
