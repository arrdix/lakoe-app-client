import LoginModal from "./LoginModal";
import { UseFormReturn } from "react-hook-form";
import ValidatedInput from "@/components/utils/ValidatedInput";
import { CheckoutDto } from "@/dtos/CheckoutDto";

interface ValidatedInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hookForm: UseFormReturn<CheckoutDto, any, undefined>;
}

export default function ContactInformation({ hookForm }: ValidatedInputProps) {
  const {
    register,
    formState: { errors },
  } = hookForm;
  return (
    <div className="w-full bg-white rounded-lg p-8 border">
      <h1 className="text-black text-xl font-bold mb-4">Informasi Kontak</h1>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-2">
          <label htmlFor="productName" className="text-sm">
            Nama Kontak
          </label>
          <ValidatedInput
            error={errors.contactName}
            name="contactName"
            placeholder=""
            register={register}
            type="text"
          />
          <div className="flex justify-end">
            <p className="text-xs font-thin text-gray">0/50</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between p-0 m-0 items-end">
            <label htmlFor="productName" className="text-sm">
              Masukan WhatsApp
            </label>

            <LoginModal />
          </div>

          <div className="flex">
            <div
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0 text-black font-thin z-2 inline-flex items-center py-2.5 px-4 text-sm bg-slate-200 text-center border rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            >
              +62
            </div>

            <div className="relative w-full">
              <ValidatedInput
                error={errors.phoneNumber}
                name="phoneNumber"
                placeholder=""
                register={register}
                type="text"
              />
            </div>
          </div>

          <p className="text-sm font-thin">
            kami akan menginformasikan konfirmasi dan informasi perubahan status
            pesanan ke WhatsApp kamu
          </p>
        </div>
      </div>
    </div>
  );
}
