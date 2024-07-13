import React from "react";
export default function PaymentSummary() {
  return (
    <div className="w-full bg-blue-200  border-cyan rounded-sm p-7 flex flex-col border">
      <h1 className="text-black text-xl font-bold mb-4">Ringkasan pesanan</h1>
      <div className="flex flex-col gap-2">
        {/* total harga */}
        <div className="flex justify-between">
          <p className="text-slate-500"> Total harga ()</p>
          <p className="font-semibold"> RpNaN</p>
        </div>
        {/* biaya pengiriman */}
        <div className="flex justify-between pb-4 border-b-2 border-b-slate-500">
          <p className="text-slate-500"> Biaya pengiriman ()</p>
          <p className="font-semibold"> RpNaN</p>
        </div>
        {/* total pembayaran */}
        <div className="flex justify-between">
          <p className="text-slate-500"> Total pembayaran ()</p>
          <p className="font-bold"> RpNaN</p>
        </div>
      </div>
    </div>
  );
}
