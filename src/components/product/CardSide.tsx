import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "../ui/switch";
import { useState } from "react";
import AktifProductModal from "./AktifProductModal";
import NonaktifProductModal from "./NonaktifProductModal";
import { CheckedState } from "@radix-ui/react-checkbox";
import API from "@/networks/api";

interface CardSideProops {
  isActive: boolean;
  isChecked: boolean;
  onCheckedChange: ((checked: CheckedState) => void) | undefined;
  productName: string;
  productSku: string;
}

export default function CardSide({
  isActive,
  isChecked,
  onCheckedChange,
  productName,
  productSku,
}: CardSideProops) {
  const [isToggleChecked, setIsToggleChecked] = useState<boolean>(isActive);
  const [isAktifModalView, setIsAktifModalView] = useState<boolean>(false);
  const [isNonaktifModalView, setIsNonaktifModalView] =
    useState<boolean>(false);

  async function UPDATE_IS_ACTIVED() {
    const update = await API.PRODUCT.UPDATE_IS_ACTIVE_BY_SKU(productSku);
    console.log(update);
  }

  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      <div className="pt-1">
        <Checkbox checked={isChecked} onCheckedChange={onCheckedChange} />
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <Switch
            checked={isToggleChecked}
            onCheckedChange={() => {
              setIsToggleChecked(!isToggleChecked);

              UPDATE_IS_ACTIVED();
              if (isToggleChecked) {
                setIsAktifModalView(true);
                setIsNonaktifModalView(false);
              } else {
                setIsAktifModalView(false);
                setIsNonaktifModalView(true);
              }
            }}
            id="airplane-mode"
          />
          <div className="w-0 h-0 overflow-hidden">
            {isNonaktifModalView && <AktifProductModal />}
            {isAktifModalView && (
              <NonaktifProductModal productName={productName} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
