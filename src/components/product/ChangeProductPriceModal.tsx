import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Button } from '../ui/button'
import ValidatedInput from '../utils/ValidatedInput'
import { UpdateVariantOptionValueDto } from '@/dtos/ProductDto'
import { useForm } from 'react-hook-form'
import useProductsQuery from '@/hooks/useProductsQuery'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface ChangeProductPriceModalProps {
  productSku: string
}

const ChangePriceSchema = z.object({
  price: z
    .string()
    .min(1, { message: "Harga satuan harus diisi" })
    .refine(value => /^\d+$/.test(value), {
      message: "Harga satuan harus berupa angka",
    })
})

export default function ChangeProductPriceModal({ productSku }: ChangeProductPriceModalProps) {
  const { updateProduct } = useProductsQuery()
  const [open, setOpen] = useState(false)
  const hookForm = useForm<UpdateVariantOptionValueDto>({
    resolver: zodResolver(ChangePriceSchema)
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = hookForm

  async function onChangePrice(sku: string, data: UpdateVariantOptionValueDto) {
    const { mutateAsync } = updateProduct

    await mutateAsync({
      sku: sku,
      data: data,
    })
  }

  return (
    <div>
      {/* Tombol Pemicu */}

      <Button variant={'outline'} className="text-xs" onClick={() => setOpen(true)}>
        Ubah Harga
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
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start ">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Ubah Harga
                    </DialogTitle>
                    <div className="mt-2 flex flex-col gap-4">
                      <p className="text-sm text-gray-500">
                        Ubah harga untuk produk{' '}
                        <span className="font-semibold uppercase">
                          {productSku}
                        </span>
                      </p>
                      <form className="flex flex-col gap-1">
                        <div className="flex">
                          <div className="relative w-full">
                            <ValidatedInput
                              type="text"
                              id="price"
                              placeholder="Masukan harga satuan barang"
                              register={register}
                              name="price"
                              autoFocus={true}
                              error={errors.price}
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
                  onClick={handleSubmit((data) => {
                    setOpen(false)
                    onChangePrice(productSku, data)
                    console.log('data frontend', data)
                  })}
                >
                  Simpan
                </Button>
                <Button
                  variant="outline"
                  className="px-5 mx-2"
                  onClick={() => {
                    setOpen(false)
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
  )
}
