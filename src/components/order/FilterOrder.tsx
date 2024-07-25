import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface FilterOrderProps {
    text?: string;
    items: { value: string; text: string }[];
    onChange?: (value: string) => void;
}

export default function FilterOrder({ text, items, onChange }: FilterOrderProps) {
    return (
        <div className="border rounded-md">
            <Select onValueChange={onChange}>
                <SelectTrigger className="w-full focus:outline-none border-none">
                    <SelectValue placeholder={text} />
                </SelectTrigger>
                <SelectContent>
                    {items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.text}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
