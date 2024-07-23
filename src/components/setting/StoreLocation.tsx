import AddressBox from "@/components/setting/AddressBox";
import LocationModal from "@/components/setting/LocationModal";
import { Button } from "@/components/ui/button";
import { LocationDto } from "@/dtos/LocationDto";
import API from "@/networks/api";
import { useEffect, useState } from "react";

function StoreLocation() {
  const [renderModal, setRenderModal] = useState<boolean>(false);
  const [location, setLocation] = useState<LocationDto | null>();

  function onRenderModal() {
    setRenderModal((oldVal) => !oldVal);
  }

  function onModalClose() {
    setRenderModal(false);
  }

  // get store location
  async function GET_STORE_LOCATION() {
    const location = (await API.STORE.GET_STORE_LOCATION()) as LocationDto;
    setLocation(location);
    console.log("ini lokasi", location);
  }

  useEffect(() => {
    GET_STORE_LOCATION();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mt-2">
        <div className="flex flex-col">
          <h2 className="text-black text-lg font-bold">Lokasi Toko</h2>
          <p className="text-sm text-gray">
            Alamat ini akan digunakan sebagai alamat pengirimanmu
          </p>
        </div>
        <Button
          className="bg-transparent text-black border border-lightgray hover:text-white"
          onClick={onRenderModal}
        >
          Tambah Lokasi
        </Button>
      </div>
      {location && (
        <AddressBox
          adress={location.address}
          city={location.cityDistrict}
          nameLocation={location.name}
          pos={location.postalCode}
        />
      )}

      {renderModal && (
        <LocationModal isOpen={renderModal} onModalClose={onModalClose} />
      )}
    </>
  );
}

export default StoreLocation;
