import LoginModal from "./LoginModal";

export default function ContactInformation() {
  return (
    <div className="w-full bg-white rounded-lg p-8 border">
      <h1 className="text-black text-xl font-bold mb-4">Informasi Kontak</h1>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-2">
          <label htmlFor="productName" className="text-sm">
            Nama Kontak
          </label>
          <input
            type="text"
            id="productName"
            className="border rounded-md h-10 pl-2 text-sm"
          />
          <div className="flex justify-end">
            <p className="text-xs font-thin text-gray">0/50</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between p-0 m-0 items-end">
            <label htmlFor="productName" className="text-sm">
              Masukan WhatsApp
            </label>

            <LoginModal />
          </div>

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

          <p className="text-sm font-thin">
            kami akan menginformasikan konfirmasi dan informasi perubahan status
            pesanan ke WhatsApp kamu
          </p>
        </div>
      </div>
    </div>
  );
}
