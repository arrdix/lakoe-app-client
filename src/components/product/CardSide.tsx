import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "../ui/switch";
import { useState } from "react";
import AktifProductModal from "./AktifProductModal";
import NonaktifProductModal from "./NonaktifProductModal";
import { CheckedState } from "@radix-ui/react-checkbox";
import SwitchModal from "./SwitchModal";

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
  const [isAktifModalView, setIsAktifModalView] = useState<boolean>(false);
  const [isNonaktifModalView, setIsNonaktifModalView] =
    useState<boolean>(false);

  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      <div className="pt-1">
        <Checkbox checked={isChecked} onCheckedChange={onCheckedChange} />
      </div>
      <div>
        <div className="flex items-center space-x-2">
          {/* <Switch
            checked={isActive}
            onCheckedChange={() => {
              // setIsToggleChecked(!isToggleChecked);
              console.log("ini diklik");
              console.log("is aktif", isActive);
              if (isActive) {
                setIsAktifModalView(true);
                setIsNonaktifModalView(false);
              } else {
                setIsAktifModalView(false);
                setIsNonaktifModalView(true);
              }

              console.log("aktif modal", isAktifModalView);
              console.log("nonaktif modal", isAktifModalView);
            }}
            id="airplane-mode"
          />
          <div className="w-0 h-0 overflow-hidden"> 
            {isNonaktifModalView && (
              <AktifProductModal productSku={productSku} />
            )} 
            {isAktifModalView && (
              <NonaktifProductModal productName={productName} />
            )}

            <AktifProductModal productSku={productSku} /> 
           </div>  */}

           <SwitchModal isActive={isActive} productSku={productSku}/>
        </div>
      </div>
    </div>
  );
}
