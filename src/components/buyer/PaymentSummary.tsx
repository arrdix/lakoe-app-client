import React from "react";

interface PaymentSummaryProps {
  totalHarga: number;
  biayaPengiriman: number;
  totalPembayaran: number;
}

const PaymentSummary: React.FC<PaymentSummaryProps> = ({
  totalHarga,
  biayaPengiriman,
  totalPembayaran,
}) => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-200 via-blue-300 to-blue-300 border border-gray-300 rounded-lg shadow p-7 flex flex-col gap-6">
      <div>
        <h1 className="text-black text-xl font-bold mb-4">Ringkasan Pesanan</h1>
        <div className="flex bg-transparent w-full items-center gap-4">
          <div className="w-16 h-16 bg-cyan-500 rounded-md flex items-center justify-center shadow-md">
            <img
              src="https://th.bing.com/th/id/OIP.Q2_R_dwM0Bv4wiwibFQ_jQHaHa?rs=1&pid=ImgDetMain" // Ganti dengan path gambar sepatu
              alt="sepatu"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="">
            <p className="text-sm font-semibold">Sepatu Mantap</p>
            <p className="text-xs text-gray-600">2 items (100 g)</p>
            <p className="text-xs">RP 200.000</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {/* total harga */}
        <div className="flex justify-between">
          <p className="text-gray-700">Total Harga</p>
          <p className="font-semibold">Rp {totalHarga.toLocaleString()}</p>
        </div>
        {/* biaya pengiriman */}
        <div className="flex justify-between">
          <p className="text-gray-700">Biaya Pengiriman</p>
          <p className="font-semibold">Rp {biayaPengiriman.toLocaleString()}</p>
        </div>
        {/* biaya pembayaran */}
        <div className="flex justify-between pb-4 border-b-2 border-gray-300">
          <p className="text-gray-700">Biaya Pembayaran</p>
          <p className="font-semibold">Rp {totalPembayaran.toLocaleString()}</p>
        </div>
        {/* total pembayaran */}
        <div className="flex justify-between mt-2">
          <p className="text-gray-700 font-semibold">Total Pembayaran</p>
          <p className="text-xl font-bold text-gray-800">
            Rp {(totalHarga + biayaPengiriman + totalPembayaran).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
