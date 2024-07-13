import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";

export default function ShippingAddress() {
  return (
    <div className="w-full bg-white rounded-lg p-8 border">
      <h1 className="text-black text-xl font-bold mb-4">Alamat Pengiriman</h1>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-2">
          <label htmlFor="productName" className="text-sm">
            Nama Penerima
          </label>
          <input
            type="text"
            id="productName"
            className="border rounded-md h-10 pl-2 text-sm"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label htmlFor="productName" className="text-sm">
            Masukan WhatsApp
          </label>

          <div className="flex">
            <div
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0 text-black font-thin z-10 inline-flex items-center py-2.5 px-4 text-sm bg-slate-200 text-center border rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
               >
              +62
            </div>

            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="productName" className="text-sm">
              Kecamatan
            </label>
            <Select>
              <SelectTrigger className="w-full ml-auto">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Semua Kategori</SelectItem>
                  <SelectItem value="banana">kategori 1</SelectItem>
                  <SelectItem value="blueberry">kategori 2</SelectItem>
                  <SelectItem value="grapes">kategori 3</SelectItem>
                  <SelectItem value="pineapple">kategori 4</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="productName" className="text-sm">
              Kelurahan
            </label>
            <Select>
              <SelectTrigger className="w-full ml-auto">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Semua Kategori</SelectItem>
                  <SelectItem value="banana">kategori 1</SelectItem>
                  <SelectItem value="blueberry">kategori 2</SelectItem>
                  <SelectItem value="grapes">kategori 3</SelectItem>
                  <SelectItem value="pineapple">kategori 4</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="productName" className="text-sm">
              Detail Alamat
            </label>
            <Textarea/>
          </div>
        </div>

      </div>
    </div>
  );
}
