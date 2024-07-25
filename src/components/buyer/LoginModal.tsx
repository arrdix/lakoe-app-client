import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Button } from "../ui/button";
import { LiaTimesSolid } from "react-icons/lia";

export default function LoginModal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Tombol Pemicu */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg p-1 border=none"
      >
        <p className="mx-2 text-md font-semibold text-cyan">Masuk</p>
      </button>

      {/* Background Overlay */}
      {open && <div className="fixed inset-0 bg-black opacity-50 z-50"></div>}

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <Button
            variant="outline"
            className="p-2 border-none hover:bg-white absolute top-0 right-2"
            onClick={() => {
              setOpen(false);
            }}
          >
            <LiaTimesSolid />
          </Button>
          <div className="bg-white p-6">
            <div className="flex flex-col gap-5 text-center w-full">
              <h2 className="text-xl font-semibold">SuryaElz Store</h2>
              <h3 className="text-lg font-semibold">Masuk</h3>
              <p> Welcome back!</p>
              <div className="flex flex-col gap-5 w-full">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col text-start gap-2">
                    <label htmlFor="emailOrPhone" className="text-sm">
                      Nomor HP atau Email{" "}
                      <span className="text-gray-500 sm:text-sm">ℹ️</span>
                    </label>
                    <input
                      type="text"
                      id="productName"
                      className="border rounded-md h-10 pl-2 text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-500 text-white rounded-md py-2"
                  >
                    Masuk
                  </Button>
                  <div className="mt-4 text-center">
                    <p className="text-sm">
                      Belum punya akun?{" "}
                      <a href="#" className="text-blue-500">
                        Daftar
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
