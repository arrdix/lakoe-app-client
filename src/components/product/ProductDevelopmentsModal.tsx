import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import DeleteProductModal from "./DeleteProductModal";

export default function ProductDevelopmentsModal({
  productName,
}: {
  productName: string;
}) {
  const [isDeleteProductModalView, setIsDeleteProductModalView] =
    useState<boolean>(false);

  function onModalClose() {
    setIsDeleteProductModalView(false);
  }

  return (
    // Edit fix modal bug
    <div className="h-full flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center h-full rounded-full border border-lightgray hover:bg-lightergray p-2">
            <BiDotsHorizontalRounded />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <button onClick={() => setIsDeleteProductModalView(true)}>
              Hapus Produk
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>Edit Produk</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div>
        {isDeleteProductModalView && (
          <DeleteProductModal
            productName={productName}
            onModalClose={onModalClose}
          />
        )}
      </div>
    </div>
  );
}
