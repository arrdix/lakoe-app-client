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

export default function AktifProductModal({productSku}:{productSku:string}) {
  const [open, setOpen] = useState(true);
  const hookForm = useForm<UpdateVariantOptionValueDto>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = hookForm;

  async function UPDATE_IS_ACTIVED() {
    const update = await API.PRODUCT.UPDATE_IS_ACTIVE_BY_SKU(productSku);
    console.log(update);
  }
  return (
    <div>
      {open && (
        // Overlay Latar Belakang
        <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
      )}

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
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
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

                      <div className="flex gap-2">
                        {/* input harga */}
                        <div className="flex flex-col gap-1 w-full">
                          <label className="text-sm">
                            Harga <span className="text-red-500">*</span>
                          </label>

                          <ValidatedInput
                            error={errors.price}
                            name="price"
                            placeholder="masukan harga"
                            register={register}
                            type="text"
                            id="price"
                            leftLabel="RP"
                          />
                        </div>

                        {/* input stok */}
                        <div className="flex flex-col gap-1 w-full">
                          <label className="text-sm">
                            stok <span className="text-red-500">*</span>
                          </label>

                          <ValidatedInput
                            error={errors.stock}
                            name="price"
                            placeholder="masukan stok"
                            register={register}
                            type="text"
                            id="stok"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <Button
                  variant="outline"
                  className="bg-cyan text-white px-5 py-0"
                //   onClick={() => {
                //     setOpen(false);
                //     UPDATE_IS_ACTIVED()
                //   }}
                onClick={handleSubmit((data)=>{
                    console.log(data)
                    setOpen(false)
                    UPDATE_IS_ACTIVED()
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
    </div>
  );
}
