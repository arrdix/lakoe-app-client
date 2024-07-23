import { Button } from '../ui/button'
import { BiImageAdd, BiPlus } from 'react-icons/bi'
import { Switch } from '../ui/switch'
import { GiSettingsKnobs } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import React, { useEffect, useState } from 'react'
import { CreateProductDto } from '@/dtos/ProductDto'
import { useForm, UseFormReturn } from 'react-hook-form'
import ValidatedInput from '@/components/utils/ValidatedInput'

interface VariantProductProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hookForm: UseFormReturn<CreateProductDto, any, undefined>
}

interface VariantInput {
    variantOptionName: string
}

interface ActiveVariant {
    name: string | null
    isActive: boolean
}

export default function VariantProduct({ hookForm }: VariantProductProps) {
    const [activeVariant, setActiveVariant] = useState<ActiveVariant>({
        name: null,
        isActive: false,
    })
    const [variantOptions, setVariantOptions] = useState<string[]>([])

    // used for add product form
    const {
        register,
        formState: { errors },
        setValue,
    } = hookForm

    // used for add variant form
    const {
        register: registerOption,
        formState: { errors: errorsOption },
        handleSubmit,
        resetField,
    } = useForm<VariantInput>()

    useEffect(() => {
        const variantColor = 'Warna'
        const variantSize = 'Ukuran'

        switch (activeVariant.name) {
            case variantColor:
                setValue('variant.name', variantColor)
                break
            case variantSize:
                setValue('variant.name', variantSize)
                break
        }

        setVariantOptions([])
    }, [activeVariant])

    useEffect(() => {
        variantOptions.map((variantOption, index) => {
            setValue(`variant.variantOptions.${index}.name`, variantOption)
        })
    }, [variantOptions])

    function onAddVariantOption(data: VariantInput) {
        setVariantOptions((oldVal) => [...oldVal, data.variantOptionName])
        resetField('variantOptionName')
    }

    function onDeleteVariantOption(variantOption: string) {
        setVariantOptions((oldVal) => oldVal.filter((val) => val !== variantOption))
    }

    return (
        <div className="w-full bg-white rounded-lg p-8">
            <div className="flex flex-col w-full bg-white rounded-lg">
                <div className="flex flex-col mb-4">
                    <div className=" flex justify-between items-center">
                        <h1 className="text-black text-xl font-bold ">Varian Produk</h1>
                    </div>
                    <div className="text-stone-400">
                        Tambah varian agar pembeli memilih produk yang sesuai.
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2">
                        <Button
                            onClick={() => {
                                setActiveVariant({
                                    name: 'Warna',
                                    isActive: true,
                                })
                            }}
                            className={`py-3 px-6 rounded-3xl border border-cyan text-cyan hover:bg-cyan hover:bg-opacity-20 ${
                                activeVariant.name === 'Warna'
                                    ? 'bg-cyan bg-opacity-20'
                                    : 'bg-transparent'
                            }`}
                        >
                            Warna
                        </Button>
                        <Button
                            onClick={() => {
                                setActiveVariant({
                                    name: 'Ukuran',
                                    isActive: true,
                                })
                            }}
                            className={`py-3 px-6 rounded-3xl border border-cyan text-cyan hover:bg-cyan hover:bg-opacity-20 ${
                                activeVariant.name === 'Ukuran'
                                    ? 'bg-cyan bg-opacity-20'
                                    : 'bg-transparent'
                            }`}
                        >
                            Ukuran
                        </Button>
                    </div>
                    {activeVariant.name && (
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-1">
                                {activeVariant.name} <span className="text-red-500">*</span>
                            </div>
                            <ValidatedInput
                                error={errorsOption.variantOptionName}
                                register={registerOption}
                                name="variantOptionName"
                                id="variantOptionName"
                                placeholder="Nama Opsi Varian"
                                type="text"
                                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault()

                                        handleSubmit(onAddVariantOption)()
                                    }
                                }}
                            />
                            <div className="flex gap-2 w-max mt-2">
                                {variantOptions.map((variantOption) => {
                                    return (
                                        <div
                                            key={variantOption}
                                            className="flex items-center gap-2 text-cyan bg-cyan bg-opacity-10 border border-cyan py-1 px-3 rounded-md w-max"
                                        >
                                            {variantOption}
                                            <button
                                                className="border border-black rounded-full"
                                                onClick={() => onDeleteVariantOption(variantOption)}
                                            >
                                                <IoClose size={'.75rem'} />
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                    {variantOptions.length > 0 && (
                        <div>
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex flex-col">
                                    <p className="text-xl font-bold">Daftar Varian</p>
                                    <p className="text-sm text-stone-400">
                                        Kamu dapat mengatur harga, stok dan SKU sekaligus.
                                    </p>
                                </div>
                            </div>
                            {variantOptions.map((variantOption, index) => (
                                <div key={index} className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2">
                                        <p className="font-bold">{variantOption}</p>
                                        <Switch
                                            defaultChecked={true}
                                            onCheckedChange={(state) => {
                                                setValue(
                                                    `variant.variantOptions.${index}.variantOptionValue.isActive`,
                                                    JSON.stringify(state)
                                                )
                                            }}
                                        />
                                    </div>
                                    <div className="flex gap-4 w-full">
                                        <div className="flex flex-col gap-1 w-3/5">
                                            <label
                                                htmlFor="variantOptionValuePrice"
                                                className="text-sm"
                                            >
                                                Harga <span className="text-red-500">*</span>
                                            </label>
                                            <ValidatedInput
                                                register={register}
                                                error={
                                                    errors.variant &&
                                                    errors.variant.variantOptions &&
                                                    errors.variant.variantOptions[index] &&
                                                    errors.variant.variantOptions[index]
                                                        .variantOptionValue &&
                                                    errors.variant.variantOptions[index]
                                                        .variantOptionValue.price
                                                }
                                                name={`variant.variantOptions.${index}.variantOptionValue.price`}
                                                id="variantOptionValuePrice"
                                                type="text"
                                                placeholder="Harga produk"
                                                leftLabel="Rp."
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1 w-2/5">
                                            <label
                                                htmlFor="variantOptionValueStock"
                                                className="text-sm"
                                            >
                                                Stok <span className="text-red-500">*</span>
                                            </label>
                                            <ValidatedInput
                                                register={register}
                                                error={
                                                    errors.variant &&
                                                    errors.variant.variantOptions &&
                                                    errors.variant.variantOptions[index] &&
                                                    errors.variant.variantOptions[index]
                                                        .variantOptionValue &&
                                                    errors.variant.variantOptions[index]
                                                        .variantOptionValue.stock
                                                }
                                                name={`variant.variantOptions.${index}.variantOptionValue.stock`}
                                                id="variantOptionValueStock"
                                                type="text"
                                                placeholder="Jumlah stok barang"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-4 w-full mb-8">
                                        <div className="flex flex-col gap-1 w-3/5">
                                            <label
                                                htmlFor="variantOptionValueSKU"
                                                className="text-sm"
                                            >
                                                SKU <span className="text-red-500">*</span>
                                            </label>
                                            <ValidatedInput
                                                register={register}
                                                error={
                                                    errors.variant &&
                                                    errors.variant.variantOptions &&
                                                    errors.variant.variantOptions[index] &&
                                                    errors.variant.variantOptions[index]
                                                        .variantOptionValue &&
                                                    errors.variant.variantOptions[index]
                                                        .variantOptionValue.sku
                                                }
                                                name={`variant.variantOptions.${index}.variantOptionValue.sku`}
                                                id="variantOptionValueSKU"
                                                type="text"
                                                placeholder="SKU (Stock Keeping Unit) Produk"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1 w-2/5">
                                            <label
                                                htmlFor="variantOptionValueWeight"
                                                className="text-sm"
                                            >
                                                Berat <span className="text-red-500">*</span>
                                            </label>
                                            <ValidatedInput
                                                register={register}
                                                error={
                                                    errors.variant &&
                                                    errors.variant.variantOptions &&
                                                    errors.variant.variantOptions[index] &&
                                                    errors.variant.variantOptions[index]
                                                        .variantOptionValue &&
                                                    errors.variant.variantOptions[index]
                                                        .variantOptionValue.weight
                                                }
                                                name={`variant.variantOptions.${index}.variantOptionValue.weight`}
                                                id="variantOptionValueWeight"
                                                type="text"
                                                placeholder="Berat Produk"
                                                rightLabel="Gram"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
