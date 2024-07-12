import { BiSearchAlt } from "react-icons/bi";

export default function CardEmpty() {
  return (
    <div className="flex flex-row gap-3 rounded-md shadow p-2 w-full items-center justify-center py-5">
      <div className="flex items-center gap-3">
        <div>
          <BiSearchAlt className="size-14" />
        </div>
        <div>
          <p className="text-base font-semibold">Oops, produk yang kamu cari tidak ditemukan</p>
          <span className="text-sm text-gray">Coba kata kunci atau tambahkan produk baru</span>
        </div>
      </div>
    </div>
  )
}
