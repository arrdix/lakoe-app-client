import { Button } from '@/components/ui/button'
import { BiImageAdd } from 'react-icons/bi'
import ValidatedInput from '../utils/ValidatedInput'
import { StoreInfoDto } from '@/dtos/StoreInfoDto';
import { useForm } from 'react-hook-form';
import ValidatedTextarea from '../utils/ValidatedTextarea';
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const StoreSchema = z.object({
    slogan: z
        .string()
        .min(4, { message: "Slogan harus memiliki minimal 4 karakter" })
        .max(100, { message: "Slogan maksimal 100 karakter" }),

    name: z
        .string()
        .min(4, { message: "Nama toko harus memiliki minimal 4 karakter" })
        .max(100, { message: "Nama toko maksimal 100 karakter" }),

    description: z
        .string()
        .min(4, { message: "Deskripsi harus memiliki minimal 4 karakter" })
        .max(3000, { message: "Deskripsi maksimal 3000 karakter" })
});

function StoreInfo() {
    const hookForm = useForm<StoreInfoDto>({
        resolver: zodResolver(StoreSchema)
    });

    // const [imagePreviews, setimagePreviews] = useState<string[]>([])

    // const maxImage = 1

    // function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    //     const files = e.target.files

    //     if (files?.length) {
    //         const imagePreviews = Array.from(files).map((file) => {
    //             return URL.createObjectURL(file)
    //         })

    //         setimagePreviews(imagePreviews)
    //     }
    // }

    const {
        register,
        formState: { errors },
        handleSubmit
    } = hookForm;

    return (
        <>
            <h2 className="text-black text-lg font-bold mt-2">Informasi Toko</h2>
            <div className="flex gap-4 w-full">
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="productName" className="text-sm">
                            Slogan <span className="text-red-500">*</span>
                        </label>
                        <ValidatedInput
                            error={errors.slogan}
                            name='slogan'
                            register={register}
                            type="text"
                            id="slogan"
                            placeholder="Prediksi Jaya Jaya Jaya"

                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="productName" className="text-sm">
                            Nama Toko <span className="text-red-500">*</span>
                        </label>
                        <ValidatedInput
                            error={errors.name}
                            name="name"
                            register={register}
                            type="text"
                            id="name"
                            placeholder="Toko Haram"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="storeDescription" className="text-sm">
                        Deskripsi Toko <span className="text-red-500">*</span>
                    </label>
                    <ValidatedTextarea
                        error={errors.description}
                        name='description'
                        id="description"
                        register={register}
                        placeholder="Toko ini menj"
                    />
                </div>
            </div>
            <div className="flex border-b border-lightGray pb-4">
                <Button onClick={handleSubmit((data) => console.log(data))} className="ml-auto rounded-lg">Simpan</Button>
            </div>
            <h2 className="text-black text-md font-bold">Logo Toko</h2>
            <div className="border border-gray border-dotted w-56 h-56 rounded-md relative">
                <div className="absolute flex flex-col justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray">
                    <BiImageAdd size={'4rem'} />
                    <p className="text-sm">Unggah Foto</p>
                </div>
            </div>
            <p className="text-gray text-sm">
                Ukuran optimal 300 x 300 piksel dengan Besar file: Maksimum 10 Megabytes. <br />
                Ekstensi file yang diperbolehkan: JPG, JPEG, PNG
            </p>
        </>
    )
}

export default StoreInfo
