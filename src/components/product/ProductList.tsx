import CardProduct from "./CardProduct";
import ProductFilter from "./ProductFilter";
import NonaktifProductsModal from "./NonaktifProductsModal";
import DeleteProductsModal from "./DeleteProductsModal";
import { Checkbox } from "@/components/ui/checkbox";
import NoResultProduct from "./NoResultProduct";
import { useProductCheckedContext } from "@/context/checkedProductContext";
import { useEffect, useState } from "react";
import { ProductBySku } from "@/types/ProductBySkuType";
import fuzzySkor from "@/lib/fuzzy";

interface ProductListProps {
  productsProps?: ProductBySku[];
  tabOptions: string;
}

export default function ProductList({
  productsProps,
  tabOptions,
}: ProductListProps) {
  const { sku } = useProductCheckedContext();
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [isCheckedChange, setIsCheckedChange] = useState(false);
  const [products, setProducts] = useState<ProductBySku[] | undefined>(
    productsProps
  );
  const [name, setName] = useState<string>("");

  const onCheckedChange = () => {
    setIsCheckedChange(!isCheckedChange);
  };

  // real product edit
  // useEffect(() => {
  //   if (sku.length < 1) {
  //     setIsAllChecked(false);
  //   }
  // }, [sku]);

  useEffect(() => {
    const namaProduct = productsProps?.map((product) => {
      return product.name;
    }) as string[];
    const namaSku = productsProps?.map((product) => {
      return product.variant?.variantOption?.variantOptionValue?.sku || "";
    }) as string[];

    if (name != "" && productsProps) {
      console.log("ini input", name);
      const fuzzyOptionByProductName = fuzzySkor(namaProduct, name);
      const fuzzyOptionBySku = fuzzySkor(namaSku, name);
      console.log("nilai", productsProps);
      console.log("nilai fuzzy per produk", fuzzyOptionByProductName);
      console.log("nilai fuzzy per sku", fuzzyOptionBySku);
      // Mengubah hasil fuzzy menjadi array string

      const fuzzyOptionArrayByProductName = fuzzySkor(namaProduct, name).map(
        (option) => option.original.toLowerCase()
      );
      const fuzzyOptionArrayBySku = fuzzySkor(namaSku, name).map((option) =>
        option.original.toLowerCase()
      );
      console.log("ini fuzzy input 1", fuzzyOptionArrayByProductName);
      console.log("ini fuzzy input 2", fuzzyOptionArrayBySku);
      console.log("ini hasil filter", products);

      const filteredProduct: ProductBySku[] = productsProps?.filter(
        (product) => {
          if (fuzzyOptionArrayByProductName.length != 0) {
            return fuzzyOptionArrayByProductName.includes(
              product.name.toLowerCase()
            );
          } else {
            return fuzzyOptionArrayBySku.includes(
              product.variant?.variantOption?.variantOptionValue?.sku.toLowerCase() ||
                ""
            );
          }
        }
      );
      setProducts(filteredProduct);
    } else {
      setProducts(productsProps);
    }
  }, [name, productsProps]);

  const onChange = (dataInput: string) => {
    setName(dataInput);
  };
  return productsProps ? (
    <div>
      <ProductFilter onChange={onChange} />
      {products?.length === 0 ? (
        <div>
          <NoResultProduct tabOptions={tabOptions} />
        </div>
      ) : (
        <div>
          <div className="w-full bg-white rounded-lg flex justify-between">
            <h3 className="font-semibold">{products?.length} produk</h3>
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
            {products &&
              products.map((product) => (
                <CardProduct
                  key={product.variant?.variantOption?.variantOptionValue?.sku}
                  product={product}
                  isCheckedDefault={isAllChecked}
                  onCheckedChanges={onCheckedChange}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex items-start">
        <h1 className="text-3xl text-cyan font-black aniamte-spin">Lakoe.</h1>
        <div className="inline-block h-2 w-2 animate-spin-fast rounded-full border-4 border-solid border-current border-e-transparent border-cyan mt-1 ml-1"></div>
      </div>
    </div>
  );
}
