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
          <p className="text-sm">Nama Kontak</p>
          <ValidatedInput
            error={errors.contactName}
            name="contactName"
            placeholder=""
            register={register}
            type="text"
            id="contactName"
          />
          <div className="flex justify-end">
            <p className="text-xs font-thin text-gray">0/50</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between p-0 m-0 items-end">
            <p className="text-sm">Masukan WhatsApp</p>

            <LoginModal />
          </div>

          <ValidatedInput
            error={errors.phoneNumber}
            name="phoneNumber"
            placeholder=""
            register={register}
            type="text"
            leftLabel="+62"
            id="phoneNumber"
          />

          <p className="text-sm font-thin">
            kami akan menginformasikan konfirmasi dan informasi perubahan status
            pesanan ke WhatsApp kamu
          </p>
        </div>
      </div>
    </div>
  );
}
