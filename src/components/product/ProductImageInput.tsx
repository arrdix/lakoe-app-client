import { useState } from 'react'
import { BiImageAdd } from 'react-icons/bi'

function ProductImageInput() {
    const [imagePreview, setImagePreview] = useState<string | null>('')

    function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files

        if (files?.length) {
            setImagePreview(URL.createObjectURL(files[0]))
        }
    }
    return (
        <div className="w-full h-52 relative">
            {imagePreview ? (
                <div className="w-full h-52 border border-gray rounded-md">
                    <img
                        src={imagePreview}
                        alt="Foto Produk"
                        className="w-full h-full object-cover"
                    />
                </div>
            ) : (
                <div className="w-full h-52 flex flex-col border-dashed border border-gray rounded items-center justify-center">
                    <label htmlFor="attachments" className="cursor-pointer">
                        <BiImageAdd className="size-10 fill-gray hover:fill-black transition ease-in-out hover:ease-in-out" />
                    </label>
                    <span className="text-gray">Foto Produk</span>
                    <input
                        type="file"
                        id="attachments"
                        className="hidden"
                        onChange={(e) => onImageChange(e)}
                        multiple
                    />
                </div>
            )}
        </div>
    )
}

export default ProductImageInput
