import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { LuPackageSearch } from 'react-icons/lu'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

interface data {
    dataInput: string
    sortFilter: string
}

interface FilterProps {
    onChange: (data: data) => void
}

export default function ProductFilter({ onChange }: FilterProps) {
    const { setValue, getValues } = useForm()
    const [dataInput, setDataInput] = useState<string>('')
    const [sortfilter, setSorFilter] = useState<string>('')

    useEffect(() => {
        const data: data = {
            dataInput: dataInput,
            sortFilter: sortfilter,
        }
        onChange(data)
    }, [dataInput, sortfilter])

    return (
        <div className="flex my-4 justify-between">
            <form className="w-80">
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <LuPackageSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                    <Input
                        type="search"
                        id="default-search"
                        className="block w-full pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-600"
                        placeholder="Cari Produk"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            const { value } = e.target
                            setValue('data', value)
                            const data = getValues()
                            setDataInput(data.data)
                        }}
                    />
                </div>
            </form>

            <Select
                onValueChange={(value) => {
                    setSorFilter(value)
                }}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Urutkan" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Urutkan</SelectLabel>
                        <SelectItem value="harga terendah">Harga terendah</SelectItem>
                        <SelectItem value="harga tertinggi">Harga tertinggi</SelectItem>
                        <SelectItem value="stok tertinggi">Stok tertinggi</SelectItem>
                        <SelectItem value="stok terendah">Stok terendah</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
