import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Button } from "../ui/button";

export default function ChangeProductStockModal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Tombol Pemicu */}

      <Button
        variant={"outline"}
        className="text-xs"
        onClick={() => setOpen(true)}
      >
        Ubah Stok
      </Button>

      {/* Background Overlay */}
      {open && <div className="fixed inset-0 bg-black opacity-50 z-10"></div>}

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Ubah Stok
                    </DialogTitle>
                    <div className="mt-2 flex flex-col gap-4">
                      <p className="text-sm text-gray-500">
                        Ubah Stok untuk produk{" "}
                        <span className="font-semibold">
                          KAOS BASIC COTTON KENARI - DUSTY ROSE [ COTTON COMBED
                          30S ]
                        </span>
                      </p>
                      <form className="flex flex-col gap-1">
                        <div className="flex">
                          <div className="relative w-full">
                            <input
                              type="search"
                              id="search-dropdown"
                              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                              placeholder="Masukan stok barang"
                              required
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <Button
                  variant="outline"
                  className="bg-cyan text-white px-5 py-0"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Simpan
                </Button>
                <Button
                  variant="outline"
                  className="px-5 mx-2"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Batalkan
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}