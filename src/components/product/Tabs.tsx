import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Tabs() {
  type ButtonType = "semua" | "aktif" | "nonaktif";
  const [buttonActive, setButtonActive] = useState<ButtonType>("semua");

  return (
    <div className="flex w-full shadow-md">
      <div className="w-auto flex flex-col">
        <Button
          className={`bg-white rounded-none mx-4 hover:bg-white p-0 ${
            buttonActive === "semua" ? "text-cyan" : "text-black"
          }`}
          onClick={() => setButtonActive("semua")}
        >
          Semua
        </Button>
        {buttonActive === "semua" && (
          <div className="mx-auto w-3/5 bg-cyan h-1 rounded-full w-"></div>
        )}
      </div>

      <div className="w-auto flex flex-col">
        <Button
          className={`bg-white rounded-none mx-4 hover:bg-white p-0 ${
            buttonActive === "aktif" ? "text-cyan" : "text-black"
          }`}
          onClick={() => setButtonActive("aktif")}
        >
          Aktif
        </Button>
        {buttonActive === "aktif" && (
          <div className="mx-auto w-3/5 bg-cyan-600 h-1 rounded-full"></div>
        )}
      </div>

      <div className="w-auto flex flex-col">
        <Button
          className={`bg-white rounded-none mx-4 hover:bg-white  p-0 ${
            buttonActive === "nonaktif" ? "text-cyan-600" : "text-black"
          }`}
          onClick={() => setButtonActive("nonaktif")}
        >
          Nonaktif
        </Button>
        {buttonActive === "nonaktif" && (
          <div className="mx-auto w-3/5 bg-cyan-600 h-1 rounded-full"></div>
        )}
      </div>
    </div>
  );
}
