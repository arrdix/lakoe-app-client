import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Button } from "../ui/button";
import ValidatedInput from "../utils/ValidatedInput";
import { useForm } from "react-hook-form";
import { UpdateVariantOptionValueDto } from "@/dtos/ProductDto";
import API from "@/networks/api";
import { Switch } from "../ui/switch";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useToast } from "../ui/use-toast";

export default function SwitchModal({
  productSku,
  isActive,
}: {
  productSku: string;
  isActive: boolean;
}) {
  const [open, setOpen] = useState(false);
  const hookForm = useForm<UpdateVariantOptionValueDto>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = hookForm;

  const { toast } = useToast();

  async function UPDATE_IS_ACTIVED() {
    try {
      const update = await API.PRODUCT.UPDATE_IS_ACTIVE_BY_SKU(productSku);
      console.log(update);
      toast({
        title: "Produk Berhasil diubah!",
        description: "Kami berhasil mengubah produk kamu.",
        variant: "success",
      });
    } catch (error) {
      toast({
        title: "Gagal mengubah Produk",
        description: "Terjadi kesalahan saat mengubah produk kamu.",
        variant: "failed",
      });
    }
  }

  async function UPDATE_STOK_PRICE(data: UpdateVariantOptionValueDto) {
    const update = await API.PRODUCT.UPDATE_BY_SKU(productSku, data);
    console.log(update);
  }

  return (
    <div>
      {/* Tombol Pemicu */}
      <Switch checked={isActive} onClick={() => setOpen(true)} />
      {open && (
        // Overlay Latar Belakang
        <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
      )}

      {/* jika isActive is true*/}
      {isActive ? (
        <Dialog open={open} onClose={setOpen} className="relative z-50">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          />

          <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
              >
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        aria-hidden="true"
                        className="h-6 w-6 text-red-600"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Nonaktifkan Produk
                      </DialogTitle>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Nonaktifkan produk{" "}
                          <span className="font-semibold uppercase">
                            {productSku}
                          </span>
                        </p>
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
                      UPDATE_IS_ACTIVED();
                    }}
                  >
                    Ya, Nonaktifkan
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
      ) : (
        <Dialog open={open} onClose={setOpen} className="relative z-50">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          />

          <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
              >
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                      <DialogTitle
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Aktifkan Produk
                      </DialogTitle>
                      <div className="mt-2 flex flex-col gap-4">
                        <p className="text-sm text-gray-500">
                          Pastikan stok tersedia untuk mengaktifkan produk
                        </p>

                        <ValidatedInput
                          error={errors.stock}
                          name="stock"
                          placeholder="masukan stok"
                          register={register}
                          type="text"
                          id="stok"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <Button
                    variant="outline"
                    className="bg-cyan text-white px-5 py-0"
                    onClick={handleSubmit((data) => {
                      console.log("ini data mau dikirim", data);
                      setOpen(false);
                      UPDATE_IS_ACTIVED();
                      UPDATE_STOK_PRICE(data);
                    })}
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
      )}
    </div>
  );
}
