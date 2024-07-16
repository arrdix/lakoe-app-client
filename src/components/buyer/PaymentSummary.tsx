import React from "react";
import { Product } from '@/types/ProductType';

interface PaymentSummaryProps {
  totalHarga: number;
  biayaPengiriman: number;
  totalPembayaran: number;
  

 
  


}

const PaymentSummary: React.FC<PaymentSummaryProps> = ({ totalHarga, biayaPengiriman, totalPembayaran}) => {
  return (
    <div className="w-full bg-blue-200 border-cyan rounded-sm p-7 flex flex-col border">
      <h1 className="text-black text-xl font-bold mb-4">Ringkasan pesanan</h1>
      <div className="flex flex-col gap-2">
        <div className="flex gap-5 ">
          <div className="flex flex-col border w-20 h-20 ">
            <img src="" alt="" />

          </div>
          <div>
          <p className="text-sm ">celana </p>
          <p className="text-sm"></p>
          <p className="text-sm"></p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-slate-500"> Total harga </p>
          <p className="font-semibold"> Rp{totalHarga.toLocaleString()}</p>
        </div>
        <div className="flex justify-between pb-4 border-b-2 border-b-slate-500">
          <p className="text-slate-500"> Biaya pengiriman </p>
          <p className="font-semibold"> Rp{biayaPengiriman.toLocaleString()}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-slate-500"> Total pembayaran </p>
          <p className="font-bold"> Rp{totalPembayaran.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentSummary;
