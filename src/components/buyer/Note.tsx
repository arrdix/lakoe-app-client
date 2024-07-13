import React from "react";
import { Textarea } from "../ui/textarea";

export default function Note() {
  return (
    <div className="w-full bg-white rounded-lg p-4 border">
      <h1 className="text-black text-xl font-bold mb-4">Catatan <span className="text-slate-500 font-semibold">(Pilihan)</span></h1>
      <div className="flex flex-col gap-1">
        <Textarea placeholder="Tulis catatan / intruksi" />
        <div className="flex justify-end text-gray">
          <p className="text-xs">0/3000</p>
        </div>
      </div>
    </div>
  );
}
