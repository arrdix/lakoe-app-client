import AddressBox from "@/components/setting/AddressBox";
import LocationModal from "@/components/setting/LocationModal";
import { Button } from "@/components/ui/button";
import useStoreQuery from "@/hooks/useStoreQuery";
import { useState } from "react";

function StoreLocation() {
  const [renderModal, setRenderModal] = useState<boolean>(false);
  const { location, store } = useStoreQuery();

  function onRenderModal() {
    setRenderModal((oldVal) => !oldVal);
  }

  function onModalClose() {
    setRenderModal(false);
  }

  if (store) {
    return (
      <div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex flex-col">
            <h2 className="text-black text-lg font-bold">Lokasi Toko</h2>
            <p className="text-sm text-gray">
              Alamat ini akan digunakan sebagai alamat pengirimanmu
            </p>
          </div>
          {!location && (
            <Button
              className="bg-transparent text-black border border-lightgray hover:text-white"
              onClick={onRenderModal}
            >
              Tambah Lokasi
            </Button>
          )}
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
      </div>
    );
  } else {
    return (
      <div className="flex justify-between items-center mt-2">
        <div className="flex flex-col">
          <h2 className="text-black text-lg font-bold">Toko tidak ditemukan</h2>
          <p className="text-sm text-gray">
            silakan membuat toko terlebih dahulu
          </p>
        </div>
      </div>
    );
  }
}

export default StoreLocation;
