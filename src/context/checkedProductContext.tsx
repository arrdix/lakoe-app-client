import React, { createContext, ReactNode, useContext, useState } from "react";

// Definisikan tipe data untuk konteks
interface IdProductCheckedType {
  id: number[];
  setProductIdChecked: React.Dispatch<React.SetStateAction<number[]>>;
}

// buat nilai default
const defaultIdProductChecked: IdProductCheckedType = {
  id: [],
  setProductIdChecked: () => {}, // dummy function
};

// Buat konteks
export const IdProductCheckedContext = createContext<IdProductCheckedType>(defaultIdProductChecked);

// Buat hook kustom untuk mengakses nilai dari konteks
export const useProductCheckedContext = (): IdProductCheckedType => {
  const context = useContext(IdProductCheckedContext);
  if (!context) {
    throw new Error("useProductCheckedContext must be used within a IdProductCheckedProvider");
  }
  return context;
};

// Buat provider yang menyediakan nilai untuk konteks
export const IdProductCheckedProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [id, setProductIdChecked] = useState<number[]>(defaultIdProductChecked.id);

  return (
    <IdProductCheckedContext.Provider value={{ id, setProductIdChecked }}>
      {children}
    </IdProductCheckedContext.Provider>
  );
};
