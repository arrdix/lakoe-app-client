import { UseFormReturn } from "react-hook-form";
// import ValidatedInput from "@/components/utils/ValidatedInput";
import ValidatedTextarea from "../utils/ValidatedTextarea";
import ValidatedSelect from "../utils/ValidatedSelect";
import { CreateOrderDto } from "@/dtos/OrderDto";

interface ValidatedInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hookForm: UseFormReturn<CreateOrderDto, any, undefined>;
}

export default function ShippingAddress({ hookForm }: ValidatedInputProps) {
  const {
    setValue,
    register,
    formState: { errors },
  } = hookForm;

  return (
    <div className="w-full bg-white rounded-lg p-8 border">
      <h1 className="text-black text-xl font-bold mb-4">Alamat Pengiriman</h1>

      <div className="flex flex-col gap-4">
        {/* <div className="flex flex-col gap-2">
          <p className="text-sm">Nama Penerima</p>
          <ValidatedInput
            error={errors.receiverName}
            name="receiverName"
            placeholder=""
            register={register}
            type="text"
            id="receiverName"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm">Masukan WhatsApp</p>
          <ValidatedInput
            error={errors.receiverPhone}
            name="receiverPhone"
            placeholder=""
            register={register}
            type="text"
            id="recipientNumber"
            leftLabel="+62"
          />
        </div> */}

        <div className="flex flex-col gap-2">
          <label htmlFor="productName" className="text-sm">
            Kecamatan
          </label>
          <ValidatedSelect
            error={errors.receiverDistrict}
            setValue={setValue}
            name="receiverDistrict"
            options={["kecamatan 1", "kecamatan 2"]}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="productName" className="text-sm">
            Kelurahan
          </label>
          <ValidatedSelect
            error={errors.receiverVillage}
            setValue={setValue}
            name="receiverVillage"
            options={["desa 1", "desa 2"]}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm">Detail Alamat</p>
          <ValidatedTextarea
            error={errors.receiverAddress}
            register={register}
            name="receiverAddress"
            id="receiverAddress"
            placeholder=""
          />
        </div>
      </div>
    </div>
  );
}
