import formatRupiah from "@/lib/idrUtils";

interface DeliveryOptionCardProops {
  deliveryName: string;
  price: number;
  img: string;
  IsAvailableForCOD: boolean;
}

export default function DeliveryOptionCard(props: DeliveryOptionCardProops) {
  //
  const { deliveryName, price, IsAvailableForCOD, img } = props;
  return (
    <>
      <div className="flex items-center justify-between h-full w-full">
        <div>
          <img src={img} alt={deliveryName} className="h-7" />
          <p className="text-gray font-thin text-xs">
            {IsAvailableForCOD
              ? "Tersedia untuk COD"
              : "Tidak tersedia untuk COD"}
          </p>
        </div>
        <div className="">
          <p className="text-blue-600 text-md">{formatRupiah(price)}</p>
        </div>
      </div>
    </>
  );
}
