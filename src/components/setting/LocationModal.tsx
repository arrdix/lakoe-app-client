import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
// import ValidatedInput from "../utils/ValidatedInput";
import ValidatedTextarea from "../utils/ValidatedTextarea";
import { LocationDto } from "@/dtos/LocationDto";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import API from "@/networks/api";
import ValidatedInput from "../utils/ValidatedInput";
import SimpleMap from "../Map";
import { LatLngExpression } from "leaflet";
import useStoreQuery from "@/hooks/useStoreQuery";

interface LocationModalProps {
  isOpen: boolean;
  onModalClose: () => void;
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

interface LatLngType {
  lat: number;
  lng: number;
}

export default function LocationModal({
  isOpen,
  onModalClose,
}: LocationModalProps) {
  const [isModalOpen, setOpen] = useState(isOpen);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<LocationDto>();
  const [receiverLocation, setReceiverLocation] =
    useState<LatLngExpression | null>();
  const { store, createLocation } = useStoreQuery();

  function onPositionChange(pos: LatLngExpression | null) {
    setReceiverLocation(pos);
  }
  const hookForm = useForm<LocationDto>();

  const [provinces, setProvince] = useState<GetProvinceType[] | null>();
  const [cities, setCity] = useState<GetCityType[] | null>();

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
  }

  //   create location
  async function createLocationHandle(data: LocationDto) {
    const { mutateAsync } = createLocation;
    await mutateAsync({
      data,
    });
  }

  useEffect(() => {
    console.log("store", store);
    if(store) {
      setValue("profileId", store.userId);
      setValue("storeId", store.id);
      setValue("isMainLocation", true);
    }
    GET_PROVINCE();
    if (receiverLocation) {
      const location = receiverLocation as LatLngType;
      setValue("latitude", location.lat);
      setValue("longtitude", location.lng);
    }
    if (!isModalOpen) {
      onModalClose();
    }
  }, [isModalOpen, receiverLocation,store]);

  const onSubmit = (data: LocationDto) => {
    console.log(data);
    createLocationHandle(data);
    setOpen(false);
  };

  return (
    <div className="bg-black">
      <Button
        variant={"outline"}
        className="text-xs"
        onClick={() => setOpen(true)}
      >
        Ubah Stok
      </Button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
      )}

      <Dialog
        open={isModalOpen}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
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
                <div className="w-full sm:flex sm:items-start">
                  <div className="flex flex-col gap-4 w-full mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="flex justify-between text-base font-semibold leading-6 text-gray-900"
                    >
                      <p className="text-black text-lg font-bold">
                        Tambah Lokasi Baru
                      </p>
                      <Button
                        className="text-xs bg-transparent border border-gray text-black p-2 h-auto hover:bg-black hover:text-white"
                        onClick={() => setOpen(false)}
                      >
                        <IoMdClose />
                      </Button>
                    </DialogTitle>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col gap-4 w-full h-full"
                    >
                      {/* <div className="flex flex-col gap-1">
                                                <label htmlFor="locationName" className="text-sm">
                                                    Nama Lokasi
                                                    <span className="text-red-500"> *</span>
                                                </label>
                                                <ValidatedInput
                                                    error={errors.locationName}
                                                    name="locationName"
                                                    register={register}
                                                    type="text"
                                                    id="locationName"
                                                    placeholder="Toko Dumbways"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label htmlFor="city" className="text-sm">
                                                    Kota/Kecamatan
                                                    <span className="text-red-500"> *</span>
                                                </label>
                                                <ValidatedSelect
                                                    name="city"
                                                    setValue={setValue}
                                                    error={errors.city}
                                                    options={["Ciputat", "Jakarta", "Bandung"]}
                                                />
                                            </div> */}

                      {/* nama lokasi */}
                      <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-sm">
                          Nama Lokasi
                          <span className="text-red-500"> *</span>
                        </label>
                        <ValidatedInput
                          name="name"
                          register={register}
                          error={errors.name}
                          id="name"
                          type="text"
                          placeholder=""
                        />
                      </div>

                      {/* opsi provinsi */}
                      <div className="flex flex-col gap-1">
                        <label className="text-sm">
                          Provinsi <span className="text-red-500"> *</span>
                        </label>

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
                      <div className="flex flex-col gap-1">
                        <label className="text-sm">
                          Kota <span className="text-red-500"> *</span>
                        </label>
                        <Select
                          onValueChange={(value) => {
                            setValue("cityDistrict", value);
                          }}
                        >
                          <SelectTrigger className="w-full ml-auto">
                            <SelectValue />
                          </SelectTrigger>
                          {cities && (
                            <SelectContent>
                              <SelectGroup>
                                {cities.map((option) => (
                                  <SelectItem
                                    key={option.id}
                                    value={option.name}
                                  >
                                    {option.name}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          )}
                        </Select>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label htmlFor="codePost" className="text-sm">
                          Kode Pos
                          <span className="text-red-500"> *</span>
                        </label>
                        <ValidatedInput
                          name="postalCode"
                          register={register}
                          error={errors.postalCode}
                          id="codePost"
                          type="text"
                          placeholder=""
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="address" className="text-sm">
                          Alamat Lengkap
                          <span className="text-red-500"> *</span>
                        </label>
                        <ValidatedTextarea
                          error={errors.address}
                          name="address"
                          id="address"
                          register={register}
                          placeholder="Jl. Dumbways no. ID"
                        />
                      </div>
                      <div className="h-72">
                        <SimpleMap
                          onPositionChange={onPositionChange}
                          hookForm={hookForm}
                        />
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <Button
                          type="submit"
                          variant="outline"
                          className="bg-cyan text-white px-5 py-0"
                        >
                          Simpan
                        </Button>
                        <Button
                          variant="outline"
                          className="px-5 mx-2"
                          onClick={() => setOpen(false)}
                        >
                          Batalkan
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
