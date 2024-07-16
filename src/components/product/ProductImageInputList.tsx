import { useState } from 'react'
import { BiImageAdd } from 'react-icons/bi'
import { IoIosClose } from 'react-icons/io'

function ProductImageInputList() {
    const [imagePreviews, setimagePreviews] = useState<string[]>([])

    const maxImage = 5

    function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files

        if (files?.length) {
            const imagePreviews = Array.from(files).map((file) => {
                return URL.createObjectURL(file)
            })

            setimagePreviews(imagePreviews)
        }
    }

    return (
        <div className="flex flex-row gap-2 w-full h-max">
            <div className="flex flex-row gap-2 w-full h-max">
                {imagePreviews.length ? (
                    Array.from({ length: maxImage }).map((_, index) => {
                        const imageCount = imagePreviews.length

                        if (index < imageCount) {
                            return (
                                <div
                                    key={index}
                                    className="w-full h-52 border border-gray rounded-md relative"
                                >
                                    <img
                                        src={imagePreviews[index]}
                                        alt="Foto Produk"
                                        className="w-full h-full object-cover"
                                    />
                                    <button className="flex justify-center items-center absolute top-1 right-1 w-6 h-6 bg-white rounded-full">
                                        <IoIosClose className="text-lg" />
                                    </button>
                                </div>
                            )
                        }

                        return (
                            <div
                                key={index}
                                className="w-full h-52 flex flex-col border-dashed border border-gray rounded items-center justify-center"
                            >
                                <label htmlFor="attachments" className="cursor-pointer">
                                    <BiImageAdd className="size-10 fill-gray hover:fill-black transition ease-in-out hover:ease-in-out" />
                                </label>
                                <span className="text-gray">Foto Produk</span>
                            </div>
                        )
                    })
                ) : (
                    <div className="flex flex-row gap-4">
                        <div className="w-72 h-72 flex flex-col border-dashed border border-gray rounded items-center justify-center">
                            <label htmlFor="attachments" className="cursor-pointer">
                                <BiImageAdd className="size-10 fill-gray hover:fill-black transition ease-in-out hover:ease-in-out" />
                            </label>
                            <span className="text-gray">Foto Produk</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h1 className="font-medium">Upload foto sekaligus, yuk!</h1>
                            <p className="text-stone-400 text-sm">
                                Kamu bisa meng-upload foto sekaligus <br />
                                hingga maksimal 5 foto.
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <input
                type="file"
                id="attachments"
                className="hidden"
                onChange={(e) => onImageChange(e)}
                multiple
            />
        </div>
    )
}

export default ProductImageInputList
