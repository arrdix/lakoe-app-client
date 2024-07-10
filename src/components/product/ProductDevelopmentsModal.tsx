import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import DeleteProductModal from "./DeleteProductModal";
import NonaktifProductModal from "./NonaktifProductModal";

export default function ProductDevelopmentsModal() {
  const [isDeleteProductModalView, setIsDeleteProductModalView] =
    useState<boolean>(false);

  useEffect(() => {
    setIsDeleteProductModalView(false);
    console.log(isDeleteProductModalView);
  }, []);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button className="px-3" variant={"outline"}>
            <BiDotsHorizontalRounded />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <button
              onClick={() => {
                setIsDeleteProductModalView(true);
              }}
            >
              Hapus Produk
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div>{isDeleteProductModalView && <NonaktifProductModal />}</div>
    </div>
  );
}
