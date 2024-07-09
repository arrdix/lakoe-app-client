function NewProductPage() {
    return (
        <div className="w-full h-full bg-gray-100 p-8">
            <div className="w-full bg-white rounded-lg p-8">
                <h1 className="text-black text-xl font-bold mb-4">Informasi Produk</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="productName" className="text-sm">
                            Nama Produk <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="productName"
                            placeholder="Baju Spiderman - Hitam"
                            className="border-2 border-gray-200 rounded-md h-10 pl-2 text-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="productName" className="text-sm">
                            URL Halaman Checkout <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="productName"
                            placeholder="baju-spiderman-hitam"
                            className="border-2 border-gray-200 rounded-md h-10 pl-2 text-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="productName" className="text-sm">
                            Kategori <span className="text-red-500">*</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProductPage
