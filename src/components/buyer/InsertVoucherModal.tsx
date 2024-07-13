import React, { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function InsertVoucherModal() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* Tombol Pemicu */}
      <Button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg p-1 bg-white text-black px-4 py-6 border border-black w-full hover:bg-blue-50"
      >
        <FaMoneyCheckDollar fontSize={20} className="text-cyan" />
        <p className="text-md font-bold ml-4 mr-7">Gunakan / Masukan Voucher</p>
        <FaChevronRight />
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
              <div className="p-6">
                <Button
                  variant="outline"
                  className="p-2 border-none hover:bg-white absolute top-0 right-2"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <LiaTimesSolid />
                </Button>
                <div className="bg-gray-50 flex items-center justify-center border-b pb-3 mb-6">
                  <p className="text-xl font-semibold">Pilih Diskon Voucher</p>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          id="productName"
                          className="border rounded-md h-10 pl-2 text-sm w-3/4"
                          placeholder="Masukan kode voucher"
                        />

                        <Button
                          type="submit"
                          className="w-1/4 bg-blue-500 text-white rounded-md py-2"
                        >
                          Terapkan
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>
                          <p className="text-lg font-semibold">
                            Pilih voucher yang tersedia
                          </p>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col justify-center py-2">
                          <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg pl-12 hover:text-cyan hover:bg-lightergray cursor-pointer">
                            Atur Toko
                          </h1>

                          <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg pl-12 hover:text-cyan hover:bg-lightergray cursor-pointer">
                            Pengiriman
                          </h1>
                          <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg pl-12 hover:text-cyan hover:bg-lightergray cursor-pointer">
                            Metode Pembayaran
                          </h1>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <div className="w-full h-1 bg-white border-b"></div>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>
                          <p className="text-lg font-semibold">
                            Voucher yang tidak tersedia
                          </p>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col justify-center py-2">
                          <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg pl-12 hover:text-cyan hover:bg-lightergray cursor-pointer">
                            Atur Toko
                          </h1>

                          <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg pl-12 hover:text-cyan hover:bg-lightergray cursor-pointer">
                            Pengiriman
                          </h1>
                          <h1 className="flex items-center gap-2 px-4 py-2 text-lg font-light rounded-lg pl-12 hover:text-cyan hover:bg-lightergray cursor-pointer">
                            Metode Pembayaran
                          </h1>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
