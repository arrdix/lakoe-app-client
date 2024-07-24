import { FaLocationDot } from "react-icons/fa6";
import DeleteLocationModal from "./DeleteLocationModal";

interface AddressBoxProps {
  nameLocation: string;
  adress: string;
  city: string;
  pos: number;
}

function AddressBox({ adress, city, nameLocation, pos }: AddressBoxProps) {
  return (
    <div className="flex border border-lightGray rounded-md p-4 relative">
      <div className="flex flex-col gap-2 w-1/3">
        <p className="text-sm font-light">Nama Lokasi</p>
        <p className="text-sm font-light">Alamat</p>
        <p className="text-sm font-light">Kota</p>
        <p className="text-sm font-light">Kode Pos</p>
        <p className="text-sm font-light">Pinpoint</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex">
          <p className="text-sm font-semibold ">{nameLocation}</p>
        </div>
        <p className="text-sm font-light">{adress}</p>
        <p className="text-sm font-light">{city}</p>
        <p className="text-sm font-light">{pos}</p>
        <p className="flex items-center gap-1 text-sm text-cyan font-light">
          <FaLocationDot />
          Sudah dipinpoint
        </p>
      </div>

      <div className="flex absolute top-2 right-2">
        <DeleteLocationModal/>
      </div>
    </div>
  );
}

export default AddressBox;
