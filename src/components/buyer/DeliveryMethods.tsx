import React from "react";
import DeliveryMethodsModal from "./DeliveryMethodsModal";
import { UseFormReturn } from "react-hook-form";
import { CheckoutDto } from "@/dtos/CheckoutDto";

interface ValidatedInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hookForm: UseFormReturn<CheckoutDto, any, undefined>;
}

export default function DeliveryMethods({ hookForm }: ValidatedInputProps) {
  return (
    <div className="w-full bg-white rounded-lg p-8 flex flex-col gap-4 border">
      <h1 className="text-black text-xl font-bold mb-4">Metode Pengiriman</h1>

      <DeliveryMethodsModal hookForm={hookForm} />
    </div>
  );
}
