import React from "react";
import { Product } from '@/types/ProductType';


  

 
  




const PaymentSummary: React.FC<Product> = ({ }) => {
  return (
    <div className="w-full bg-blue-50 rounded-lg p-7 flex flex-col border gap-6">
      <div>
        <h1 className="text-black text-xl font-bold mb-4">Ringkasan pesanan</h1>
        <div className="flex bg-transparent w-full items-center gap-4">
          <div className=" w-16 h-16 bg-cyan rounded-md"></div>
          <div className="">
            <p className="text-md font-semibold">sepatu mantap</p>
            <p className="text-sm text-gray">2 items (100 g)</p>
            <p className="text-sm">RP 200.000</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        {/* total harga */}
        <div className="flex justify-between">
          <p className="text-slate-500"> Total harga ()</p>
          <p className="font-semibold"> RpNaN</p>
        </div>
        {/* biaya pengiriman */}
        <div className="flex justify-between">
          <p className="text-slate-500"> Biaya pengiriman ()</p>
          <p className="font-semibold"> RpNaN</p>
        </div>
        {/* biaya pembayaran */}
        <div className="flex justify-between pb-4 border-b-2 border-b-slate-500">
          <p className="text-slate-500"> Biaya Pembayaran ()</p>
          <p className="font-semibold"> RpNaN</p>
        </div>
        {/* total pembayaran */}
        <div className="flex justify-between mt-2">
          <p className="text-slate-500"> Total pembayaran ()</p>
          <p className="font-bold"> RpNaN</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentSummary;
