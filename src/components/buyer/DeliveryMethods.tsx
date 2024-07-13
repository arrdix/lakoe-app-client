import React from "react";
import DeliveryMethodsModal from "./DeliveryMethodsModal";

export default function DeliveryMethods() {
  return (
    <div className="w-full bg-white rounded-lg p-8 flex flex-col gap-4 border">
      <h1 className="text-black text-xl font-bold mb-4">Metode Pengiriman</h1>

      <DeliveryMethodsModal />
    </div>
  );
}
