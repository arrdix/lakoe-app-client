import React, { createContext, ReactNode, useContext, useState } from "react";

// Definisikan tipe data untuk konteks
interface SkuProductCheckedType {
  sku: string[];
  setProductSkuChecked: React.Dispatch<React.SetStateAction<string[]>>;
}

// buat nilai default
const defaultIdProductChecked: SkuProductCheckedType = {
  sku: [],
  setProductSkuChecked: () => {}, // dummy function
};

// Buat konteks
export const IdProductCheckedContext = createContext<SkuProductCheckedType>(defaultIdProductChecked);

// Buat hook kustom untuk mengakses nilai dari konteks
export const useProductCheckedContext = (): SkuProductCheckedType => {
  const context = useContext(IdProductCheckedContext);
  if (!context) {
    throw new Error("useProductCheckedContext must be used within a IdProductCheckedProvider");
  }
  return context;
};

// Buat provider yang menyediakan nilai untuk konteks
export const IdProductCheckedProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sku, setProductSkuChecked] = useState<string[]>(defaultIdProductChecked.sku);

  return (
    <IdProductCheckedContext.Provider value={{ sku, setProductSkuChecked }}>
      {children}
    </IdProductCheckedContext.Provider>
  );
};
