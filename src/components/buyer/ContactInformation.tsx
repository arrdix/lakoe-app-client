import LoginModal from "./LoginModal";
import { UseFormReturn } from "react-hook-form";
import ValidatedInput from "@/components/utils/ValidatedInput";
import { CreateOrderDto } from "@/dtos/OrderDto";

interface ValidatedInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hookForm: UseFormReturn<CreateOrderDto, any, undefined>;
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
          <p className="text-sm">Nama Penerima</p>
          <ValidatedInput
            error={errors.receiverName}
            name="receiverName"
            placeholder=""
            register={register}
            type="text"
            id="receiverName"
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
            error={errors.receiverPhone}
            name="receiverPhone"
            placeholder=""
            register={register}
            type="text"
            leftLabel="+62"
            id="receiverPhone"
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

