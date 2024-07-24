import { UseFormReturn } from "react-hook-form";
// import ValidatedInput from "@/components/utils/ValidatedInput";
import ValidatedTextarea from "../utils/ValidatedTextarea";
import { CreateOrderDto } from "@/dtos/OrderDto";
import { IoIosWarning } from "react-icons/io";
import SimpleMap from "../Map";
import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import API from "@/networks/api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ShippingAddressProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hookForm: UseFormReturn<CreateOrderDto, any, undefined>;
  onPositionChange: (pos: LatLngExpression | null) => void;
}

interface GetProvinceType {
  id: string;
  name: string;
}

interface GetCityType {
  id: string;
  province_id: string;
  name: string;
}

interface GetDistrictType {
  id: string;
  regency_id: string;
  name: string;
}

interface GetVillageType {
  id: string;
  district_id: string;
  name: string;
}

export default function ShippingAddress({
  hookForm,
  onPositionChange,
}: ShippingAddressProps) {
  const {
    setValue,
    register,
    formState: { errors },
  } = hookForm;

  const [provinces, setProvince] = useState<GetProvinceType[] | null>();
  const [cities, setCity] = useState<GetCityType[] | null>();
  const [districts, setDistricts] = useState<GetDistrictType[] | null>();
  const [villages, setVillages] = useState<GetVillageType[] | null>();

  //   function to get location
  //   get province
  async function GET_PROVINCE() {
    const provinsi = await API.LOCATION.GET_PROVINCE();
    setProvince(provinsi);
  }

  //   get city
  async function GET_CITY(province_id: number) {
    const city = await API.LOCATION.GET_CITY(province_id);
    setCity(city);
    setDistricts(null);
    setVillages(null);
    setValue("receiverDistrict","")
    setValue("receiverVillage","")
  }

  //   get district
  async function GET_DISTRICTS(city_id: number) {
    const district = await API.LOCATION.GET_DISTRICT(city_id);
    setDistricts(district);
    setVillages(null);
    setValue("receiverVillage","")
  }

  //   get village
  async function GET_VILLAGE(district_Id: number) {
    const village = await API.LOCATION.GET_VILLAGE(district_Id);
    setVillages(village);
  }

  useEffect(() => {
    GET_PROVINCE();
  }, []);

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

        {/* <div className="flex flex-col gap-2">
                    <label htmlFor="productName" className="text-sm">
                        Provinsi
                    </label>
                    <ValidatedSelect
                        error={errors.receiverProvince}
                        setValue={setValue}
                        name="receiverProvince"
                        options={['kecamatan 1', 'kecamatan 2']}
                    />
                </div> */}

        {/* <div className="flex flex-col gap-2">
                    <label htmlFor="productName" className="text-sm">
                        Kecamatan
                    </label>
                    <ValidatedSelect
                        error={errors.receiverDistrict}
                        setValue={setValue}
                        name="receiverDistrict"
                        options={['kecamatan 1', 'kecamatan 2']}
                    />
                </div> */}

        {/* opsi provinsi */}
        <div className="flex flex-col gap-2">
          <label className="text-sm">Provinsi</label>
          <Select
            onValueChange={(value) => {
              GET_CITY(Number(value));
            }}
          >
            <SelectTrigger className="w-full ml-auto">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {provinces && (
                <SelectGroup>
                  {provinces.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              )}
            </SelectContent>
          </Select>
        </div>

        {/* opsi kota */}
        <div className="flex flex-col gap-2">
          <label className="text-sm">Kota</label>
          <Select
            onValueChange={(value) => {
              GET_DISTRICTS(Number(value));
            }}
          >
            <SelectTrigger className="w-full ml-auto">
              <SelectValue />
            </SelectTrigger>
            {cities && (
              <SelectContent>
                <SelectGroup>
                  {cities.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            )}
          </Select>
        </div>

        {/* opsi kecamatan */}
        <div className="flex flex-col gap-2">
          <label className="text-sm">Kecamatan</label>
          <Select
            onValueChange={(value) => {
              const id = value.split(",")[0];
              const name = value.split(",")[1];
              console.log("kecamatan", id, name);
              GET_VILLAGE(Number(id));
              setValue("receiverDistrict", name);
            }}
          >
            <SelectTrigger className="w-full ml-auto">
              <SelectValue />
            </SelectTrigger>
            {districts && (
              <SelectContent>
                <SelectGroup>
                  {districts.map((option) => (
                    <SelectItem
                      key={option.id}
                      value={`${option.id},${option.name}`}
                    >
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            )}
          </Select>
        </div>

        {/* opsi kelurahan */}
        <div className="flex flex-col gap-2">
          <label className="text-sm">Kelurahan</label>
          <Select
            onValueChange={(value) => {
              const id = value.split(",")[0];
              const name = value.split(",")[1];
              console.log("desa", id, name);
              setValue("receiverVillage", name);
            }}
          >
            <SelectTrigger className="w-full ml-auto">
              <SelectValue />
            </SelectTrigger>
            {villages && (
              <SelectContent>
                <SelectGroup>
                  {villages.map((option) => (
                    <SelectItem
                      key={option.id}
                      value={`${option.id},${option.name}`}
                    >
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            )}
          </Select>
        </div>

        {/* <div className="flex flex-col gap-2">
          <label htmlFor="productName" className="text-sm">
            Kecamatan
          </label>
          <ValidatedSelect
            error={errors.receiverDistrict}
            setValue={setValue}
            name="receiverDistrict"
            options={districtsName || ["hi"]}
          />
        </div> */}

        {/* <div className="flex flex-col gap-2">
          <label htmlFor="productName" className="text-sm">
            Kelurahan
          </label>
          <ValidatedSelect
            error={errors.receiverVillage}
            setValue={setValue}
            name="receiverVillage"
            options={["desa 1", "desa 2"]}
          />
        </div> */}

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

        <div className="flex flex-col gap-2">
          <div className="flex px-3 py-3 rounded-md">
            <div className="text-sm flex items-center gap-4">
              <IoIosWarning size={35} className="text-yellow-500" />
              <div>
                <p className="font-bold">Tandai Lokasimu!</p>
                <p>pastikan pinpoint lokasi kamu benar</p>
              </div>
            </div>
          </div>
          <div className="h-72">
            <SimpleMap
              onPositionChange={onPositionChange}
              hookForm={hookForm}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
