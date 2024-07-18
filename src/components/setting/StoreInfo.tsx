import { Button } from '@/components/ui/button';
import { BiImageAdd } from 'react-icons/bi';
import ValidatedInput from '../utils/ValidatedInput';
import { StoreInfoDto } from '@/dtos/StoreInfoDto';
import { useForm } from 'react-hook-form';
import ValidatedTextarea from '../utils/ValidatedTextarea';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';

function StoreInfo() {
    const { register, setValue, formState: { errors }, handleSubmit } = useForm<StoreInfoDto>();

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];

        if (file) {
            const imagePreview = URL.createObjectURL(file);
            setImagePreview(imagePreview);
            setValue('logo', file);
        }
    }

    function removeImage() {
        setImagePreview(null);
        setValue('logo', null as any);
    }

    return (
        <>
            <h2 className="text-black text-lg font-bold mt-2">Informasi Toko</h2>
            <div className="flex gap-4 w-full">
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="slogan" className="text-sm">
                            Slogan <span className="text-red-500">*</span>
                        </label>
                        <ValidatedInput
                            error={errors.slogan}
                            name='slogan'
                            register={register}
                            type="text"
                            id="slogan"
                            placeholder="Slogan Toko"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-sm">
                            Nama Toko <span className="text-red-500">*</span>
                        </label>
                        <ValidatedInput
                            error={errors.name}
                            name="name"
                            register={register}
                            type="text"
                            id="name"
                            placeholder="Toko Dumbways"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="description" className="text-sm">
                        Deskripsi Toko <span className="text-red-500">*</span>
                    </label>
                    <ValidatedTextarea
                        error={errors.description}
                        name='description'
                        id="description"
                        register={register}
                        placeholder="Toko ini menjual ?"
                    />
                </div>
            </div>
            <div className="flex border-b border-lightGray pb-4">
                <Button onClick={handleSubmit((data) => console.log(data))} className="ml-auto rounded-lg">Simpan</Button>
            </div>
            <h2 className="text-black text-md font-bold">Logo Toko</h2>
            <div className="border border-gray border-dotted w-56 h-56 rounded-md relative">
                {imagePreview ? (
                    <div className="relative w-full h-full">
                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-md" />
                        <button
                            className="flex justify-center items-center absolute top-1 right-1 w-6 h-6 bg-white rounded-full"
                            onClick={removeImage}
                        >
                            <IoIosClose className="text-lg" />
                        </button>
                    </div>

                ) : (
                    <div className="absolute flex flex-col justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray">
                        <label htmlFor="attachments" className="cursor-pointer">
                            <BiImageAdd size={'4rem'} />
                        </label>
                        <span className="text-gray">Unggah Foto</span>

                    </div>
                )}
                <input
                    type="file"
                    id="attachments"
                    accept="image/*"
                    onChange={onImageChange}
                    className="hidden"
                />
            </div>
            <p className="text-gray text-sm">
                Ukuran optimal 300 x 300 piksel dengan Besar file: Maksimum 10 Megabytes. <br />
                Ekstensi file yang diperbolehkan: JPG, JPEG, PNG
            </p>
        </>
    );
}

export default StoreInfo;
