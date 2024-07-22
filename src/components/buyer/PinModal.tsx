import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { LiaTimesSolid } from "react-icons/lia";
import { IoIosWarning } from "react-icons/io";
import SimpleMap from "../Map";

export default function PinModal() {
  const [open, setOpen] = useState(false);
  const [isPointed, setIsPointed] = useState(false);

  return (
    <div>
      {/* Tombol Pemicu */}

      <Button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-md border border-blue-600 bg-white px-2 hover:bg-transparent"
      >
        <p className="mx-2 text-md text-blue-600 font-semibold">
          Tandai Pinpoint
        </p>
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
                <p className="text-md font-semibold">Tandai Pinpoin</p>
              </div>

              <div className="bg-blue-300 flex p-4 rounded-md">
                <p className="text-sm flex items-center gap-2">
                  {" "}
                  <IoIosWarning size={25} className="text-yellow-500" />
                  pastikan pinpoint lokasi kamu benar !
                </p>
              </div>

              <div className="border mt-6 flex flex-col p-4 rounded-md gap-2">
                <input
                  type="text"
                  id="productName"
                  className="border rounded-3xl h-10 px-4 text-sm font-thin w-full"
                  placeholder="Cari Alamat"
                />
                <div className="h-60 w-60">
                  <SimpleMap />
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
