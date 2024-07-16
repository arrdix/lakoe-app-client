import React, { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Button } from "../ui/button";
import { LiaTimesSolid } from "react-icons/lia";
import DeliveryOptionCard from "./DeliveryOptionCard";
import { UseFormReturn } from "react-hook-form";
import { CheckoutDto } from "@/dtos/CheckoutDto";

interface ValidatedInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hookForm: UseFormReturn<CheckoutDto, any, undefined>;
}

const dataPengiriman = ["jnt", "jnt2", "jnt3"];

export default function DeliveryMethodsModal({
  hookForm,
}: ValidatedInputProps) {
  const [open, setOpen] = useState(false);
  const { setValue } = hookForm;
  return (
    <div>
      {/* Tombol Pemicu */}
      <Button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg p-1 border=none bg-cyan px-14 py-6"
      >
        <p className="mx-2 text-md font-semibold">Pilih Metode Pengiriman</p>
      </Button>

      {/* Background Overlay */}
      {open && <div className="fixed inset-0 bg-black opacity-50 z-50"></div>}

      <Dialog open={open} onClose={setOpen} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform px-8 py-3 overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-gray-50 flex items-center justify-center border-b pb-3 mb-6">
                <Button
                  variant="outline"
                  className="p-2 border-none hover:bg-white absolute top-0 right-2"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <LiaTimesSolid />
                </Button>
                <p className="text-xl font-semibold">Pilih metode pengiriman</p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold">Reguler (2-4 hari)</p>
                <p>Pengiriman diatas jam 3 berpotensi dikirim besok</p>

                <div className="flex flex-col gap-2">
                  {dataPengiriman.map((data) => (
                    <Button
                      key={data}
                      onClick={() => {
                        setOpen(false);
                        setValue("deliveryMethod", data);
                      }}
                      className="bg-white p-2 h-14 hover:bg-blue-200 rounded-sm"
                    >
                      <DeliveryOptionCard
                        key={data}
                        IsAvailableForCOD={true}
                        deliveryName={data}
                        img="https://static.desty.app/desty-store/jnt.png"
                        price={500}
                      />
                    </Button>
                  ))}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
