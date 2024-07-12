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

export function InputDemo() {
    return <Input type="email" placeholder="Email" />
}

export default function ProductFilter() {
    return (
        <div className="flex my-4 gap-2">
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
                        required
                    />
                </div>
            </form>

            <Select>
                <SelectTrigger className="w-[180px] ml-auto">
                    <SelectValue placeholder="Semua Kategori" />
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

            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Urutkan" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Urutkan</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
