import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface FilterOrderProps {
    text?: string
}
export default function FilterOrder({ text }: FilterOrderProps) {
    return (
        <div className="border rounded-md">
            <Select>
                <SelectTrigger className="w-full focus:outline-none border-none">
                    <SelectValue placeholder={text} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>

        </div>
    )
}
