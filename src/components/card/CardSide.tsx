import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "../ui/switch";
import { useState } from "react";
import AktifProductModal from "../product/AktifProductModal";
import NonaktifProductModal from "../product/NonaktifProductModal";

export default function CardSide() {
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [isAktifModalView, setIsAktifModalView] = useState<boolean>(false);
  const [isNonaktifModalView, setIsNonaktifModalView] =
    useState<boolean>(false);
  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      <div className="pt-1">
        <Checkbox />
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <Switch
            onCheckedChange={() => {
              setIsChecked(!isChecked);
              if (isChecked) {
                setIsAktifModalView(true);
                setIsNonaktifModalView(false);
              } else {
                setIsAktifModalView(false);
                setIsNonaktifModalView(true);
              }
              console.log(isChecked);
              console.log(`aktifmodal= ${isAktifModalView}`);
              console.log(`nonaktifmodal= ${isNonaktifModalView}`);
            }}
            id="airplane-mode"
          />
          <div className="w-0 h-0 overflow-hidden">
            {isAktifModalView && <AktifProductModal />}
            {isNonaktifModalView && <NonaktifProductModal />}
          </div>
        </div>
      </div>
    </div>
  );
}
