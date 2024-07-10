import { Wallet, Banknote, ShieldAlert, HandCoins, SquareCheckBig } from "lucide-react";
import { CiCreditCard2, } from "react-icons/ci";
import { SiContactlesspayment } from "react-icons/si";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { HiCash } from "react-icons/hi";
import { HiOutlineDownload } from "react-icons/hi";
import DashboardBox from "@/components/DashboardBox";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function DashboardPage() {
  return (
    <div className="w-full h-full p-8 bg-lightgray">
      <div className=" flex justify-between gap-2.5 ">
        <div className="w-full h-full bg-white w-72 h-28  ">
          <div className="p-3 ">
            <div>Current Balance</div>
            <div className="text-green-700">Rp0</div>
            <button className="bg-lime-500 w-full h-8 text-white rounded-md ">
              Tarik Credit
            </button>
          </div>
        </div>

        <div className="w-full h-full bg-white w-64 h-28">
          <div className="p-3">
            <div >
              <Wallet />
              <div>Penarikan sedang dalam proses</div>
            </div>
            <div className="font-bold text-xl">Rp0</div>
          </div>
        </div>

        <div className="w-full h-full bg-white w-60 h-28">
          <div className="p-3">
            <Banknote />
            <div className="flex justify-between">
              Saldo Tertahan
              <ShieldAlert />
              <Link className="text-blue-500 " style={{fontSize:"12px"}} to="">Lihat semua</Link>
            </div>
            <div className="font-bold text-xl">Rp0</div>
          </div>
        </div>

        <div className="w-full h-full bg-white w-60 h-28 ">
          <div className="p-3">
            <HandCoins />
            <div className="flex justify-between">Tagihan Belum Bayar
              <Link className="text-blue-500 " style={{fontSize:"12px"}} to="">Lihat semua</Link>
            </div>
            <div className="font-bold text-xl text-red-700">Rp0</div>
          </div>
        </div>

      </div >

      <div className=" w-full  bg-white mt-5 p-4 ">


        <div className="text-black text-xl font-bold p-3" >Reporting Period</div>

        <div className="flex">
          <DashboardBox text="Penarikan Selesai" value={0} icon={<SquareCheckBig size={"2rem"} />} />
          <DashboardBox text="Pendapatan COD" value={0} icon={<FaMoneyCheckAlt size={"2rem"} />} />
          <DashboardBox text="CashBack Pengiriman" value={0} icon={<HiCash size={"2rem"} />} />
          <DashboardBox text="Pendapatan E-Payment" value={0} icon={<SiContactlesspayment size={"2rem"} />} />
        </div>

        <div className="flex">

          <DashboardBox text="Refund Biaya Pengiriman" value={0} icon={<FaMoneyBillTransfer size={"2rem"} />} />
          <DashboardBox text="Kredit Lainnya" value={0} icon={<CiCreditCard2 size={"2rem"} />} />
          <DashboardBox text="Klaim Pengiriman " value={0} icon={<FaMapLocationDot size={"2rem"} />} />
          <DashboardBox text="Pembayaran Penagihan" value={0} icon={<HandCoins size={"2rem"} />} />
        </div>

      </div>

      <div className=" w-full  bg-white mt-5 p-4  ">
        <div className="flex justify-between  ">
          <div className="flex gap-2 "> <HiOutlineDownload size={"1.5rem"} />Eksport</div>
          <div>All Type</div>
          <div>All Status</div>
        </div>
      </div>



      <div className=" w-full  bg-white mt-5 p-4 flex gap-20 font-bold ">
        <div >No.</div>
        <div>Descripsi</div>
        <div>Nilai</div>
        <div>Status</div>
        <div>Tipe</div>
        <div>Tanggal</div>
      </div>


    </div>
  );
}

export default DashboardPage
